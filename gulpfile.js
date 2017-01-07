const argv = require('minimist')(process.argv.slice(2));
const gulp = require('gulp');
const gulpLoadPlugins = require('gulp-load-plugins');
const browserSync = require('browser-sync').create();
const del = require('del');
const wiredep = require('wiredep').stream;
const runSequence = require('run-sequence');
const scsslint = require('gulp-scss-lint');

const $ = gulpLoadPlugins();
const reload = browserSync.reload;

var develop = true;

gulp.task('scss-lint', () => gulp.src('dev/styles/**/*.scss')
  .pipe(scsslint()));

function lint(files, options) {
  return gulp.src(files)
  .pipe($.eslint({ fix: true }))
  .pipe(reload({stream: true, once: true}))
  .pipe($.eslint.format())
  .pipe($.if(!browserSync.active, $.eslint.failAfterError()));
}

gulp.task('lint', () => {
  return lint('dev/scripts/**/*.js')
  .pipe(gulp.dest('dev/scripts'));
});

gulp.task('styles', argv.production ? null : ['scss-lint'], () => {
  return gulp.src('dev/styles/*.scss')
  .pipe($.plumber())
  .pipe($.sourcemaps.init())
  .pipe($.sass.sync({
    outputStyle: 'expanded',
    precision: 10,
    includePaths: ['.']
  }).on('error', $.sass.logError))
  .pipe($.autoprefixer({browsers: ['> 1%', 'last 2 versions', 'Firefox ESR']}))
  .pipe($.sourcemaps.write())
  .pipe(gulp.dest('.tmp/styles'))
  .pipe(reload({stream: true}));
});

gulp.task('scripts', argv.production ? null : ['lint'], () => {
  return gulp.src('dev/scripts/**/*.js')
  .pipe($.plumber())
  .pipe($.sourcemaps.init())
  .pipe($.babel({
    presets: ['es2015'],
  }))
  .pipe($.sourcemaps.write('.'))
  .pipe(gulp.dest('.tmp/scripts'))
  .pipe(reload({stream: true}));
});

gulp.task('html', ['styles', 'scripts'], () => {
  return gulp.src('dev/*.html')
  .pipe($.useref({searchPath: ['.tmp', 'dev', '.']}))
  .pipe($.if('*.js', $.uglify()))
  .pipe($.if('*.css', $.cssnano({safe: true, autoprefixer: false})))
  .pipe($.if('*.html', $.htmlmin({collapseWhitespace: true})))
  .pipe(gulp.dest('dist'));
});

gulp.task('images', () => {
  return gulp.src('dev/images/**/*')
  .pipe($.cache($.imagemin()))
  .pipe(gulp.dest('dist/images'));
});

gulp.task('fonts', () => {
  return gulp.src(require('main-bower-files')('**/*.{eot,svg,ttf,woff,woff2}', function (err) {})
  .concat('dev/fonts/**/*'))
  .pipe($.if(develop, gulp.dest('.tmp/fonts'), gulp.dest('dist/fonts')));
});

gulp.task('extras', () => {
  return gulp.src([
    'dev/*',
    '!dev/*.html'
  ], {
    dot: true
  }).pipe(gulp.dest('dist'));
});

gulp.task('clean', del.bind(null, ['.tmp', 'dist']));

gulp.task('serve', () => {
  runSequence(['clean', 'wiredep'], ['styles', 'scripts', 'fonts'], () => {
    browserSync.init({
      notify: false,
      port: 9000,
      server: {
        baseDir: ['.tmp', 'dev'],
        routes: {
          '/bower_components': 'bower_components'
        }
      }
    });

    gulp.watch([
      'dev/*.html',
      'dev/images/**/*',
      '.tmp/fonts/**/*'
    ]).on('change', reload);

    gulp.watch('dev/styles/**/*.scss', ['styles']);
    gulp.watch('dev/scripts/**/*.js', ['scripts']);
    gulp.watch('dev/fonts/**/*', ['fonts']);
    gulp.watch('bower.json', ['wiredep', 'fonts']);
  });
});

gulp.task('serve:dist', ['default'], () => {
  browserSync.init({
    notify: false,
    port: 9000,
    server: {
      baseDir: ['dist']
    }
  });
});

// inject bower components
gulp.task('wiredep', () => {
  gulp.src('dev/styles/*.scss')
  .pipe($.filter(file => file.stat && file.stat.size))
  .pipe(wiredep({
    ignorePath: /^(\.\.\/)+/
  }))
  .pipe(gulp.dest('dev/styles'));

  gulp.src('dev/*.html')
  .pipe(wiredep({
    ignorePath: /^(\.\.\/)*\.\./
  }))
  .pipe(gulp.dest('dev'));
});

gulp.task('build', ['lint', 'html', 'images', 'fonts', 'extras'], () => {
  return gulp.src('dist/**/*').pipe($.size({title: 'build', gzip: true}));
});

gulp.task('default', () => {
  return new Promise(resolve => {
    develop = false;
    runSequence(['clean', 'wiredep'], 'build', resolve);
  });
});
