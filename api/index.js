var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  future: () => future,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_react = require("@remix-run/react"), import_server = require("react-dom/server"), import_styled_components = require("styled-components"), import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  let sheet = new import_styled_components.ServerStyleSheet(), markup = (0, import_server.renderToString)(
    sheet.collectStyles(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react.RemixServer, { context: remixContext, url: request.url }, void 0, !1, {
        fileName: "app/entry.server.tsx",
        lineNumber: 15,
        columnNumber: 7
      }, this)
    )
  ), styles = sheet.getStyleTags();
  return markup = markup.replace("__STYLES__", styles), responseHeaders.set("Content-Type", "text/html"), new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App
});
var import_react3 = require("@remix-run/react");

// app/components/Head/Head.tsx
var import_react2 = require("@remix-run/react"), import_jsx_dev_runtime2 = require("react/jsx-dev-runtime");
function Head() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("head", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("meta", { charSet: "utf-8" }, void 0, !1, {
      fileName: "app/components/Head/Head.tsx",
      lineNumber: 6,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("meta", { name: "viewport", content: "width=device-width,initial-scale=1" }, void 0, !1, {
      fileName: "app/components/Head/Head.tsx",
      lineNumber: 7,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Meta, {}, void 0, !1, {
      fileName: "app/components/Head/Head.tsx",
      lineNumber: 8,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Links, {}, void 0, !1, {
      fileName: "app/components/Head/Head.tsx",
      lineNumber: 9,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("link", { rel: "icon", type: "image/x-icon", href: "/favicon.png" }, void 0, !1, {
      fileName: "app/components/Head/Head.tsx",
      lineNumber: 10,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("link", { rel: "preconnect", href: "https://fonts.googleapis.com" }, void 0, !1, {
      fileName: "app/components/Head/Head.tsx",
      lineNumber: 11,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
      "link",
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous"
      },
      void 0,
      !1,
      {
        fileName: "app/components/Head/Head.tsx",
        lineNumber: 12,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
      "link",
      {
        href: "https://fonts.googleapis.com/css2?family=Georama:wght@500;700;900&display=swap",
        rel: "stylesheet"
      },
      void 0,
      !1,
      {
        fileName: "app/components/Head/Head.tsx",
        lineNumber: 17,
        columnNumber: 7
      },
      this
    ),
    typeof document > "u" ? "__STYLES__" : null
  ] }, void 0, !0, {
    fileName: "app/components/Head/Head.tsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

// app/root.tsx
var import_jsx_dev_runtime3 = require("react/jsx-dev-runtime");
function App() {
  let { pathname: currentUrl } = (0, import_react3.useLocation)(), language = currentUrl.includes("blog") ? "es" : "en";
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("html", { lang: language, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Head, {}, void 0, !1, {
      fileName: "app/root.tsx",
      lineNumber: 16,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("body", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.Outlet, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 18,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 19,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 20,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.LiveReload, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 21,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 17,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 15,
    columnNumber: 5
  }, this);
}

// app/routes/blog/$slug.tsx
var slug_exports = {};
__export(slug_exports, {
  Caption: () => Caption,
  Category: () => Category,
  Content: () => Content,
  DateText: () => DateText,
  Hero: () => Hero,
  Image: () => Image,
  ImageContainer: () => ImageContainer,
  Title: () => Title,
  Wrapper: () => Wrapper5,
  default: () => Post,
  loader: () => loader
});
var import_react14 = require("@remix-run/react"), import_styled_components8 = __toESM(require("styled-components"));

// app/data/post.ts
var import_notion_to_md = require("notion-to-md");

// app/utils/db-connection.ts
var import_client = require("@notionhq/client");
function db() {
  return new import_client.Client({
    auth: process.env.NOTION_TOKEN
  });
}

// app/data/post.ts
var import_front_matter = __toESM(require("front-matter")), import_marked = require("marked"), POSTS = process.env.NOTION_POSTS_DATABASE_ID;
function parseCategories(categories) {
  return categories.map((category) => category.name).join(", ");
}
function parsePostResponse(post2) {
  let properties = post2.properties, title = properties.title.title[0].plain_text, categories = parseCategories(properties.categories.multi_select), copyright = properties.copyright.url, thumbnail = properties.thumbnail.url, publishedAt = properties.publishedAt.date.start;
  return {
    title,
    categories,
    copyright,
    thumbnail,
    publishedAt
  };
}
async function post(slug) {
  let n2m = new import_notion_to_md.NotionToMarkdown({ notionClient: db() }), params = {
    database_id: POSTS,
    page_size: 1,
    filter: {
      property: "slug",
      rich_text: {
        equals: slug
      }
    }
  }, getPage = await db().databases.query(params), pageId = getPage.results[0].id, metadata = parsePostResponse(getPage.results[0]), mdblocks = await n2m.pageToMarkdown(pageId), mdString = n2m.toMarkdownString(mdblocks), { body } = (0, import_front_matter.default)(mdString), parseToHtml = (0, import_marked.marked)(body);
  return {
    ...metadata,
    content: parseToHtml
  };
}

// app/containers/Layout/Layout.tsx
var import_react13 = require("react"), import_styled_components7 = require("styled-components");

// app/components/Logo/Logo.tsx
var import_react6 = require("react"), import_react7 = require("@remix-run/react");

// app/context/ThemeContext.ts
var import_react4 = require("react"), ThemeContext = (0, import_react4.createContext)({
  theme: "dark",
  toggleTheme: () => "dark"
});

// app/components/Logo/utils.ts
function checkLogo(url = "", website, blog) {
  return url.includes("blog") ? blog : website;
}
function setLogo(size, theme2) {
  return `/assets/images/logo-${size}-${theme2}.png`;
}

// app/components/Logo/data.ts
var imgs = [
  {
    id: 1,
    breakpoint: "max-width: 767px",
    websiteSize: "small",
    blogSize: "small"
  },
  {
    id: 2,
    breakpoint: "max-width: 1023px",
    websiteSize: "small",
    blogSize: "small"
  },
  {
    id: 3,
    breakpoint: "min-width: 1024px",
    websiteSize: "small",
    blogSize: "small"
  }
];

// app/components/Logo/styles.ts
var import_styled_components2 = __toESM(require("styled-components")), import_react5 = require("@remix-run/react"), Wrapper = (0, import_styled_components2.default)(import_react5.Link)`
  display: inline-block;

  picture {
    &:hover {
      opacity: 0.7;
    }
  }

  img {
    height: 35px;
  }
`;

// app/components/Logo/Logo.tsx
var import_jsx_dev_runtime4 = require("react/jsx-dev-runtime");
function Logo() {
  let { pathname: currentUrl } = (0, import_react7.useLocation)(), { theme: theme2 } = (0, import_react6.useContext)(ThemeContext), mainUrl = currentUrl.includes("blog") ? "/blog" : "/";
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Wrapper, { to: mainUrl, children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("picture", { children: [
    imgs.map(({ id, breakpoint, websiteSize, blogSize }) => /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
      "source",
      {
        srcSet: checkLogo(
          currentUrl,
          setLogo(websiteSize, theme2),
          setLogo(`blog-${blogSize}`, theme2)
        ),
        media: `(${breakpoint})`
      },
      id,
      !1,
      {
        fileName: "app/components/Logo/Logo.tsx",
        lineNumber: 20,
        columnNumber: 13
      },
      this
    )),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
      "img",
      {
        src: checkLogo(
          currentUrl,
          setLogo("medium", theme2),
          setLogo("blog-small", theme2)
        ),
        alt: "Mateo Olarte Logo"
      },
      void 0,
      !1,
      {
        fileName: "app/components/Logo/Logo.tsx",
        lineNumber: 31,
        columnNumber: 9
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/components/Logo/Logo.tsx",
    lineNumber: 17,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/Logo/Logo.tsx",
    lineNumber: 16,
    columnNumber: 5
  }, this);
}

// app/components/Nav/Nav.tsx
var import_react9 = require("react"), import_react10 = require("@remix-run/react");

// app/components/icons/home.tsx
var import_jsx_dev_runtime5 = require("react/jsx-dev-runtime");
function HomeIcon() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
    "svg",
    {
      version: "1.1",
      xmlns: "http://www.w3.org/2000/svg",
      xmlnsXlink: "http://www.w3.org/1999/xlink",
      x: "0px",
      y: "0px",
      viewBox: "0 0 512 512",
      xmlSpace: "preserve",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("g", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("g", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
        "path",
        {
          d: `M506.188,236.413L297.798,26.65c-0.267-0.27-0.544-0.532-0.826-0.786c-22.755-20.431-57.14-20.504-79.982-0.169
			c-0.284,0.253-0.56,0.514-0.829,0.782L5.872,236.352c-7.818,7.804-7.831,20.467-0.028,28.285
			c7.804,7.818,20.467,7.83,28.284,0.028L50,248.824v172.684c0,44.112,35.888,80,80,80h72c11.046,0,20-8.954,20-20v-163h70v163
			c0,11.046,8.954,20,20,20h70c44.112,0,80-35.888,80-80c0-11.046-8.954-20-20-20c-11.046,0-20,8.954-20,20
			c0,22.056-17.944,40-40,40h-50v-163c0-11.046-8.954-20-20-20H202c-11.046,0-20,8.954-20,20v163h-52c-22.056,0-40-17.944-40-40
			v-212c0-0.2-0.003-0.399-0.009-0.597L243.946,55.26c7.493-6.363,18.483-6.339,25.947,0.055L422,208.425v113.083
			c0,11.046,8.954,20,20,20c11.046,0,20-8.954,20-20v-72.82l15.812,15.917c3.909,3.935,9.047,5.904,14.188,5.904
			c5.097,0,10.195-1.937,14.096-5.812C513.932,256.912,513.974,244.249,506.188,236.413z`
        },
        void 0,
        !1,
        {
          fileName: "app/components/icons/home.tsx",
          lineNumber: 14,
          columnNumber: 11
        },
        this
      ) }, void 0, !1, {
        fileName: "app/components/icons/home.tsx",
        lineNumber: 13,
        columnNumber: 9
      }, this) }, void 0, !1, {
        fileName: "app/components/icons/home.tsx",
        lineNumber: 12,
        columnNumber: 7
      }, this)
    },
    void 0,
    !1,
    {
      fileName: "app/components/icons/home.tsx",
      lineNumber: 3,
      columnNumber: 5
    },
    this
  );
}

// app/components/icons/about.tsx
var import_jsx_dev_runtime6 = require("react/jsx-dev-runtime");
function AboutIcon() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
    "svg",
    {
      version: "1.1",
      xmlns: "http://www.w3.org/2000/svg",
      xmlnsXlink: "http://www.w3.org/1999/xlink",
      x: "0px",
      y: "0px",
      viewBox: "0 0 512 512",
      xmlSpace: "preserve",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("g", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("g", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
        "path",
        {
          d: `M510.702,438.722c-2.251-10.813-12.84-17.754-23.657-15.503c-10.814,2.251-17.755,12.843-15.503,23.656
			c1.297,6.229-0.248,12.613-4.236,17.519c-2.31,2.841-7.461,7.606-15.999,7.606H60.693c-8.538,0-13.689-4.766-15.999-7.606
			c-3.989-4.905-5.533-11.29-4.236-17.519c20.756-99.695,108.691-172.521,210.24-174.977c1.759,0.068,3.526,0.102,5.302,0.102
			c1.782,0,3.556-0.035,5.322-0.103c71.532,1.716,137.648,37.947,177.687,97.66c6.151,9.175,18.574,11.625,27.75,5.474
			c9.174-6.151,11.625-18.575,5.473-27.749c-32.817-48.944-80.47-84.534-134.804-102.417C370.538,220.036,392,180.477,392,136
			C392,61.01,330.991,0,256,0S120,61.01,120,136c0,44.504,21.488,84.084,54.633,108.911c-30.368,9.998-58.863,25.555-83.803,46.069
			c-45.732,37.617-77.529,90.086-89.532,147.742c-3.762,18.067,0.745,36.623,12.363,50.909C25.222,503.847,42.365,512,60.693,512
			h390.613c18.329,0,35.472-8.153,47.032-22.369C509.958,475.345,514.464,456.789,510.702,438.722z M160,136
			c0-52.935,43.065-96,96-96s96,43.065,96,96c0,51.305-40.455,93.339-91.141,95.878c-1.617-0.03-3.237-0.045-4.859-0.045
			c-1.614,0-3.228,0.016-4.84,0.046C200.465,229.35,160,187.312,160,136z`
        },
        void 0,
        !1,
        {
          fileName: "app/components/icons/about.tsx",
          lineNumber: 14,
          columnNumber: 11
        },
        this
      ) }, void 0, !1, {
        fileName: "app/components/icons/about.tsx",
        lineNumber: 13,
        columnNumber: 9
      }, this) }, void 0, !1, {
        fileName: "app/components/icons/about.tsx",
        lineNumber: 12,
        columnNumber: 7
      }, this)
    },
    void 0,
    !1,
    {
      fileName: "app/components/icons/about.tsx",
      lineNumber: 3,
      columnNumber: 5
    },
    this
  );
}

// app/components/icons/blog.tsx
var import_jsx_dev_runtime7 = require("react/jsx-dev-runtime");
function BlogIcon() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
    "svg",
    {
      version: "1.1",
      xmlns: "http://www.w3.org/2000/svg",
      xmlnsXlink: "http://www.w3.org/1999/xlink",
      x: "0px",
      y: "0px",
      viewBox: "0 0 512 512",
      xmlSpace: "preserve",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("g", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("g", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
          "path",
          {
            d: `M366.905,108.016h-141.91c-11.048,0-20.003,8.955-20.003,20.003s8.955,20.003,20.003,20.003h141.91
			c11.048,0,20.003-8.955,20.003-20.003S377.952,108.016,366.905,108.016z`
          },
          void 0,
          !1,
          {
            fileName: "app/components/icons/blog.tsx",
            lineNumber: 14,
            columnNumber: 11
          },
          this
        ) }, void 0, !1, {
          fileName: "app/components/icons/blog.tsx",
          lineNumber: 13,
          columnNumber: 9
        }, this) }, void 0, !1, {
          fileName: "app/components/icons/blog.tsx",
          lineNumber: 12,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("g", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("g", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
          "path",
          {
            d: `M366.905,188.027h-141.91c-11.048,0-20.003,8.955-20.003,20.003s8.955,20.003,20.003,20.003h141.91
			c11.047,0,20.003-8.955,20.003-20.003S377.953,188.027,366.905,188.027z`
          },
          void 0,
          !1,
          {
            fileName: "app/components/icons/blog.tsx",
            lineNumber: 22,
            columnNumber: 11
          },
          this
        ) }, void 0, !1, {
          fileName: "app/components/icons/blog.tsx",
          lineNumber: 21,
          columnNumber: 9
        }, this) }, void 0, !1, {
          fileName: "app/components/icons/blog.tsx",
          lineNumber: 20,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("g", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("g", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
          "path",
          {
            d: `M286.004,268.039h-61.009c-11.048,0-20.003,8.955-20.003,20.003c0,11.048,8.955,20.003,20.003,20.003h61.009
			c11.048,0,20.003-8.955,20.003-20.003C306.007,276.994,297.052,268.039,286.004,268.039z`
          },
          void 0,
          !1,
          {
            fileName: "app/components/icons/blog.tsx",
            lineNumber: 30,
            columnNumber: 11
          },
          this
        ) }, void 0, !1, {
          fileName: "app/components/icons/blog.tsx",
          lineNumber: 29,
          columnNumber: 9
        }, this) }, void 0, !1, {
          fileName: "app/components/icons/blog.tsx",
          lineNumber: 28,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("g", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("g", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
          "path",
          {
            d: `M448.028,272.039c11.048,0,20.003-8.955,20.003-20.003V80.012C468.031,35.893,432.137,0,388.019,0H203.992
			c-44.094,0-79.971,35.853-80.012,79.938c-44.118,0-80.012,35.893-80.012,80.012v272.039c0,44.118,35.893,80.012,80.012,80.012
			h194.028c44.118,0,80.012-35.893,80.012-80.012v-0.608c39.414-4.938,70.01-38.662,70.01-79.389
			c0-11.048-8.955-20.003-20.003-20.003c-11.048,0-20.003,8.955-20.003,20.003c0,22.054-17.942,40.001-39.996,40.006l-184.027,0.045
			h-0.009c-10.685,0-20.73-4.16-28.285-11.715c-7.558-7.556-11.721-17.604-11.721-28.291V80.012
			c0-22.059,17.947-40.006,40.006-40.006H388.02c22.059,0,40.006,17.947,40.006,40.006v172.025
			C428.025,263.084,436.98,272.039,448.028,272.039z M203.992,432.047h0.02l154.002-0.038
			c-0.012,22.049-17.954,39.984-40.006,39.984H123.981c-22.059,0-40.006-17.947-40.006-40.006V159.948
			c0-22.059,17.947-40.006,40.006-40.006v232.094c0,21.375,8.325,41.471,23.441,56.583
			C162.535,423.729,182.622,432.047,203.992,432.047z`
          },
          void 0,
          !1,
          {
            fileName: "app/components/icons/blog.tsx",
            lineNumber: 38,
            columnNumber: 11
          },
          this
        ) }, void 0, !1, {
          fileName: "app/components/icons/blog.tsx",
          lineNumber: 37,
          columnNumber: 9
        }, this) }, void 0, !1, {
          fileName: "app/components/icons/blog.tsx",
          lineNumber: 36,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/components/icons/blog.tsx",
      lineNumber: 3,
      columnNumber: 5
    },
    this
  );
}

// app/data/navigation.ts
var websiteLinks = [
  {
    id: 1,
    label: "Home",
    link: "/",
    Icon: HomeIcon
  },
  {
    id: 2,
    label: "About",
    link: "/about",
    Icon: AboutIcon
  },
  {
    id: 3,
    label: "Blog",
    link: "/blog",
    Icon: BlogIcon
  }
], blogLinks = [
  {
    id: 1,
    label: "Inicio",
    link: "/blog",
    Icon: BlogIcon
  },
  {
    id: 2,
    label: "Sitio web",
    link: "/",
    Icon: HomeIcon,
    highlight: !0
  }
];

// app/components/icons/dark.tsx
var import_jsx_dev_runtime8 = require("react/jsx-dev-runtime");
function DarkIcon() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
    "svg",
    {
      version: "1.1",
      id: "Capa_1",
      xmlns: "http://www.w3.org/2000/svg",
      xmlnsXlink: "http://www.w3.org/1999/xlink",
      x: "0px",
      y: "0px",
      viewBox: "0 0 312.999 312.999",
      xmlSpace: "preserve",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("g", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("g", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
        "path",
        {
          d: `M305.6,178.053c-3.2-0.8-6.4,0-9.2,2c-10.4,8.8-22.4,16-35.6,20.8c-12.4,4.8-26,7.2-40.4,7.2c-32.4,0-62-13.2-83.2-34.4
			c-21.2-21.2-34.4-50.8-34.4-83.2c0-13.6,2.4-26.8,6.4-38.8c4.4-12.8,10.8-24.4,19.2-34.4c3.6-4.4,2.8-10.8-1.6-14.4
			c-2.8-2-6-2.8-9.2-2c-34,9.2-63.6,29.6-84.8,56.8c-20.4,26.8-32.8,60-32.8,96.4c0,43.6,17.6,83.2,46.4,112s68.4,46.4,112,46.4
			c36.8,0,70.8-12.8,98-34c27.6-21.6,47.6-52.4,56-87.6C314.4,184.853,311.2,179.253,305.6,178.053z M244.4,261.653
			c-23.2,18.4-52.8,29.6-85.2,29.6c-38,0-72.4-15.6-97.2-40.4c-24.8-24.8-40.4-59.2-40.4-97.2c0-31.6,10.4-60.4,28.4-83.6
			c12.4-16,28-29.2,46-38.4c-2,4.4-4,8.8-5.6,13.6c-5.2,14.4-7.6,29.6-7.6,45.6c0,38,15.6,72.8,40.4,97.6s59.6,40.4,97.6,40.4
			c16.8,0,32.8-2.8,47.6-8.4c5.2-2,10.4-4,15.2-6.4C274,232.453,260.8,248.853,244.4,261.653z`
        },
        void 0,
        !1,
        {
          fileName: "app/components/icons/dark.tsx",
          lineNumber: 16,
          columnNumber: 11
        },
        this
      ) }, void 0, !1, {
        fileName: "app/components/icons/dark.tsx",
        lineNumber: 15,
        columnNumber: 9
      }, this) }, void 0, !1, {
        fileName: "app/components/icons/dark.tsx",
        lineNumber: 14,
        columnNumber: 7
      }, this)
    },
    void 0,
    !1,
    {
      fileName: "app/components/icons/dark.tsx",
      lineNumber: 3,
      columnNumber: 5
    },
    this
  );
}

// app/components/icons/light.tsx
var import_jsx_dev_runtime9 = require("react/jsx-dev-runtime");
function LightIcon() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
    "svg",
    {
      version: "1.1",
      id: "Capa_1",
      xmlns: "http://www.w3.org/2000/svg",
      xmlnsXlink: "http://www.w3.org/1999/xlink",
      x: "0px",
      y: "0px",
      viewBox: "0 0 302.4 302.4",
      xmlSpace: "preserve",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("g", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("g", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
          "path",
          {
            d: `M204.8,97.6C191.2,84,172,75.2,151.2,75.2s-40,8.4-53.6,22.4c-13.6,13.6-22.4,32.8-22.4,53.6s8.8,40,22.4,53.6
			c13.6,13.6,32.8,22.4,53.6,22.4s40-8.4,53.6-22.4c13.6-13.6,22.4-32.8,22.4-53.6S218.8,111.2,204.8,97.6z M190.4,190.4
			c-10,10-24,16-39.2,16s-29.2-6-39.2-16s-16-24-16-39.2s6-29.2,16-39.2s24-16,39.2-16s29.2,6,39.2,16s16,24,16,39.2
			S200.4,180.4,190.4,190.4z`
          },
          void 0,
          !1,
          {
            fileName: "app/components/icons/light.tsx",
            lineNumber: 16,
            columnNumber: 11
          },
          this
        ) }, void 0, !1, {
          fileName: "app/components/icons/light.tsx",
          lineNumber: 15,
          columnNumber: 9
        }, this) }, void 0, !1, {
          fileName: "app/components/icons/light.tsx",
          lineNumber: 14,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("g", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("g", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
          "path",
          {
            d: `M292,140.8h-30.8c-5.6,0-10.4,4.8-10.4,10.4c0,5.6,4.8,10.4,10.4,10.4H292c5.6,0,10.4-4.8,10.4-10.4
			C302.4,145.6,297.6,140.8,292,140.8z`
          },
          void 0,
          !1,
          {
            fileName: "app/components/icons/light.tsx",
            lineNumber: 26,
            columnNumber: 11
          },
          this
        ) }, void 0, !1, {
          fileName: "app/components/icons/light.tsx",
          lineNumber: 25,
          columnNumber: 9
        }, this) }, void 0, !1, {
          fileName: "app/components/icons/light.tsx",
          lineNumber: 24,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("g", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("g", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
          "path",
          {
            d: `M151.2,250.8c-5.6,0-10.4,4.8-10.4,10.4V292c0,5.6,4.8,10.4,10.4,10.4c5.6,0,10.4-4.8,10.4-10.4v-30.8
			C161.6,255.6,156.8,250.8,151.2,250.8z`
          },
          void 0,
          !1,
          {
            fileName: "app/components/icons/light.tsx",
            lineNumber: 34,
            columnNumber: 11
          },
          this
        ) }, void 0, !1, {
          fileName: "app/components/icons/light.tsx",
          lineNumber: 33,
          columnNumber: 9
        }, this) }, void 0, !1, {
          fileName: "app/components/icons/light.tsx",
          lineNumber: 32,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("g", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("g", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("path", { d: "M258,243.6l-22-22c-3.6-4-10.4-4-14.4,0s-4,10.4,0,14.4l22,22c4,4,10.4,4,14.4,0S262,247.6,258,243.6z" }, void 0, !1, {
          fileName: "app/components/icons/light.tsx",
          lineNumber: 42,
          columnNumber: 11
        }, this) }, void 0, !1, {
          fileName: "app/components/icons/light.tsx",
          lineNumber: 41,
          columnNumber: 9
        }, this) }, void 0, !1, {
          fileName: "app/components/icons/light.tsx",
          lineNumber: 40,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("g", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("g", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
          "path",
          {
            d: `M151.2,0c-5.6,0-10.4,4.8-10.4,10.4v30.8c0,5.6,4.8,10.4,10.4,10.4c5.6,0,10.4-4.8,10.4-10.4V10.4
			C161.6,4.8,156.8,0,151.2,0z`
          },
          void 0,
          !1,
          {
            fileName: "app/components/icons/light.tsx",
            lineNumber: 47,
            columnNumber: 11
          },
          this
        ) }, void 0, !1, {
          fileName: "app/components/icons/light.tsx",
          lineNumber: 46,
          columnNumber: 9
        }, this) }, void 0, !1, {
          fileName: "app/components/icons/light.tsx",
          lineNumber: 45,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("g", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("g", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("path", { d: "M258.4,44.4c-4-4-10.4-4-14.4,0l-22,22c-4,4-4,10.4,0,14.4c3.6,4,10.4,4,14.4,0l22-22C262.4,54.8,262.4,48.4,258.4,44.4z" }, void 0, !1, {
          fileName: "app/components/icons/light.tsx",
          lineNumber: 55,
          columnNumber: 11
        }, this) }, void 0, !1, {
          fileName: "app/components/icons/light.tsx",
          lineNumber: 54,
          columnNumber: 9
        }, this) }, void 0, !1, {
          fileName: "app/components/icons/light.tsx",
          lineNumber: 53,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("g", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("g", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
          "path",
          {
            d: `M41.2,140.8H10.4c-5.6,0-10.4,4.8-10.4,10.4s4.4,10.4,10.4,10.4h30.8c5.6,0,10.4-4.8,10.4-10.4
			C51.6,145.6,46.8,140.8,41.2,140.8z`
          },
          void 0,
          !1,
          {
            fileName: "app/components/icons/light.tsx",
            lineNumber: 60,
            columnNumber: 11
          },
          this
        ) }, void 0, !1, {
          fileName: "app/components/icons/light.tsx",
          lineNumber: 59,
          columnNumber: 9
        }, this) }, void 0, !1, {
          fileName: "app/components/icons/light.tsx",
          lineNumber: 58,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("g", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("g", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("path", { d: "M80.4,221.6c-3.6-4-10.4-4-14.4,0l-22,22c-4,4-4,10.4,0,14.4s10.4,4,14.4,0l22-22C84.4,232,84.4,225.6,80.4,221.6z" }, void 0, !1, {
          fileName: "app/components/icons/light.tsx",
          lineNumber: 68,
          columnNumber: 11
        }, this) }, void 0, !1, {
          fileName: "app/components/icons/light.tsx",
          lineNumber: 67,
          columnNumber: 9
        }, this) }, void 0, !1, {
          fileName: "app/components/icons/light.tsx",
          lineNumber: 66,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("g", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("g", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("path", { d: "M80.4,66.4l-22-22c-4-4-10.4-4-14.4,0s-4,10.4,0,14.4l22,22c4,4,10.4,4,14.4,0S84.4,70.4,80.4,66.4z" }, void 0, !1, {
          fileName: "app/components/icons/light.tsx",
          lineNumber: 73,
          columnNumber: 11
        }, this) }, void 0, !1, {
          fileName: "app/components/icons/light.tsx",
          lineNumber: 72,
          columnNumber: 9
        }, this) }, void 0, !1, {
          fileName: "app/components/icons/light.tsx",
          lineNumber: 71,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/components/icons/light.tsx",
      lineNumber: 3,
      columnNumber: 5
    },
    this
  );
}

// app/components/Nav/styles.ts
var import_styled_components3 = __toESM(require("styled-components")), import_react8 = require("@remix-run/react");

// app/utils/constants.ts
var MEDIA_QUERIES = {
  tablet: "@media screen and (min-width: 768px)",
  tabletMax: "@media screen and (max-width: 767px)",
  landscape: "@media screen and (min-width: 1024px)",
  landscapeMax: "@media screen and (max-width: 1023px)",
  desktop: "@media screen and (min-width: 1180px)",
  desktopMax: "@media screen and (max-width: 1179px)",
  desktopHD: "@media screen and (min-width: 1600px)",
  desktopHDMax: "@media screen and (max-width: 1599px)"
}, COLORS = {
  blue: "#0466C8",
  blueDark: "#103976",
  blueSky: "#2196f3",
  orange: "#ff9800",
  orangeLight: "#FFB544",
  white: "#fafafa",
  lightGray: "#dbdee3",
  gray: "#939393",
  grayDark: "#5d6064",
  black: "#02060c"
}, FONTS = {
  main: "'Georama', sans-serif"
};

// app/utils/themes.ts
var import_styled_theming = __toESM(require("styled-theming"));
var backgroundColor = (0, import_styled_theming.default)("mode", {
  light: COLORS.white,
  dark: COLORS.black
}), mainColor = (0, import_styled_theming.default)("mode", {
  light: COLORS.black,
  dark: COLORS.white
}), secondaryColor = (0, import_styled_theming.default)("mode", {
  light: COLORS.grayDark,
  dark: COLORS.lightGray
}), terciaryColor = (0, import_styled_theming.default)("mode", {
  light: COLORS.white,
  dark: COLORS.white
}), fourtyColor = (0, import_styled_theming.default)("mode", {
  light: COLORS.grayDark,
  dark: COLORS.white
}), linksColor = (0, import_styled_theming.default)("mode", {
  light: COLORS.blue,
  dark: COLORS.blueSky
}), linksColorSecondary = (0, import_styled_theming.default)("mode", {
  light: COLORS.orange,
  dark: COLORS.blueSky
}), linksColorTerciary = (0, import_styled_theming.default)("mode", {
  light: COLORS.blueSky,
  dark: COLORS.orangeLight
}), shadows = (0, import_styled_theming.default)("mode", {
  light: COLORS.lightGray,
  dark: COLORS.blueDark
});

// app/components/Nav/styles.ts
var Wrapper2 = import_styled_components3.default.nav`
  ${MEDIA_QUERIES.landscapeMax} {
    position: fixed;
    z-index: 1;
    bottom: 0;
    left: 0;
    width: 100%;
    background-color: ${backgroundColor};
  }

  ${MEDIA_QUERIES.landscape} {
    width: 75%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`, List = import_styled_components3.default.ul`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin: 0;
  padding: 0;
  list-style-type: none;

  ${MEDIA_QUERIES.landscapeMax} {
    padding: 0.8rem;
    box-shadow: 0 -3px 12px ${shadows};
    justify-content: space-evenly;
  }

  ${MEDIA_QUERIES.tabletMax} {
    justify-content: space-between;
  }

  ${MEDIA_QUERIES.landscape} {
    width: 85%;
  }
`, IconContainer = import_styled_components3.default.span`
  display: block;

  ${MEDIA_QUERIES.landscape} {
    display: none;
  }

  svg {
    height: 1.2rem;
    transition: 0.25s fill ease-out;
    fill: ${mainColor};

    &:hover {
      fill: ${linksColor};
    }
  }
`, Box = import_styled_components3.default.li`
  margin: 0 0.5rem;

  ${MEDIA_QUERIES.tablet} {
    margin: 0 1rem;
  }

  ${MEDIA_QUERIES.landscape} {
    margin: 0 2rem;
  }

  &:last-child {
    margin-right: 0;
  }

  &:hover {
    ${MEDIA_QUERIES.landscapeMax} {
      a {
        color: ${linksColor};
      }

      svg {
        fill: ${linksColor};
      }
    }
  }
`, Item = (0, import_styled_components3.default)(import_react8.Link)`
  transition: 0.25s color ease-out;
  color: ${({ isActive }) => isActive ? linksColor : mainColor};
  text-align: center;
  text-decoration: none;

  &:hover {
    color: ${linksColor};
  }

  ${MEDIA_QUERIES.landscape} {
    font-size: 1.2rem;
    ${(props) => props.isBtn && import_styled_components3.css`
          display: inline-block;
          padding: 0.5rem 1.5rem;
          border: 2px solid ${linksColor};
          border-radius: 0.6rem;
          background-color: ${backgroundColor};
          color: ${linksColor};
          text-decoration: none;
          /* stylelint-disable no-duplicate-selectors */
          &:hover {
            background-color: ${linksColor};
            color: ${terciaryColor};
          }
          /* stylelint-enable no-duplicate-selectors */
        `}
  }

  svg {
    fill: ${({ isActive }) => isActive ? linksColor : mainColor};
  }
`, ThemeBtn = import_styled_components3.default.button`
  position: fixed;
  top: 2rem;
  right: 1.5rem;
  padding: 0;
  border: 0;
  border-radius: 0.5rem;
  transition: 0.25s transform ease-in-out, 0.25s opacity ease-in-out;
  background: ${backgroundColor};
  cursor: pointer;
  opacity: 0.8;
  outline: none;

  ${MEDIA_QUERIES.tablet} {
    right: 2rem;
  }

  ${MEDIA_QUERIES.landscape} {
    position: static;
  }

  &:hover {
    transform: scale(1.2);
    opacity: 1;
  }

  svg {
    width: 1.5rem;
    height: 1.5rem;
    fill: ${mainColor};
  }
`;

// app/components/Nav/Nav.tsx
var import_jsx_dev_runtime10 = require("react/jsx-dev-runtime");
function checkLinks(value = "") {
  return value.includes("blog") ? blogLinks : websiteLinks;
}
function Nav() {
  let { pathname: currentUrl } = (0, import_react10.useLocation)(), { theme: theme2, toggleTheme } = (0, import_react9.useContext)(ThemeContext), links = checkLinks(currentUrl), latestPostLink = "";
  function handleThemeMode(themeMode) {
    window.localStorage.setItem("theme-mode", themeMode), toggleTheme(themeMode);
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(Wrapper2, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(List, { children: links.map(({ id, label, link, Icon: Icon2, highlight }) => {
      let postUrl = label === "\xDAltimo post" ? `/blog/${latestPostLink}` : link;
      return /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(Box, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
        Item,
        {
          to: postUrl,
          isActive: currentUrl === link,
          isBtn: highlight,
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(IconContainer, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(Icon2, {}, void 0, !1, {
              fileName: "app/components/Nav/Nav.tsx",
              lineNumber: 47,
              columnNumber: 19
            }, this) }, void 0, !1, {
              fileName: "app/components/Nav/Nav.tsx",
              lineNumber: 46,
              columnNumber: 17
            }, this),
            label
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/components/Nav/Nav.tsx",
          lineNumber: 41,
          columnNumber: 15
        },
        this
      ) }, id, !1, {
        fileName: "app/components/Nav/Nav.tsx",
        lineNumber: 40,
        columnNumber: 13
      }, this);
    }) }, void 0, !1, {
      fileName: "app/components/Nav/Nav.tsx",
      lineNumber: 34,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
      ThemeBtn,
      {
        type: "button",
        onClick: () => handleThemeMode(theme2 === "dark" ? "light" : "dark"),
        children: theme2 === "dark" ? /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(LightIcon, {}, void 0, !1, {
          fileName: "app/components/Nav/Nav.tsx",
          lineNumber: 60,
          columnNumber: 29
        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(DarkIcon, {}, void 0, !1, {
          fileName: "app/components/Nav/Nav.tsx",
          lineNumber: 60,
          columnNumber: 45
        }, this)
      },
      void 0,
      !1,
      {
        fileName: "app/components/Nav/Nav.tsx",
        lineNumber: 56,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/components/Nav/Nav.tsx",
    lineNumber: 33,
    columnNumber: 5
  }, this);
}

// app/containers/Header/styles.ts
var import_styled_components4 = __toESM(require("styled-components"));
var Wrapper3 = import_styled_components4.default.header`
  max-width: 1180px;
  width: 90%;
  margin: 0 auto;
  padding: 1.5rem 0.5rem;

  ${MEDIA_QUERIES.tablet} {
    padding: 2rem 0;
  }

  ${MEDIA_QUERIES.landscape} {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

// app/containers/Header/Header.tsx
var import_jsx_dev_runtime11 = require("react/jsx-dev-runtime");
function Header() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(Wrapper3, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(Logo, {}, void 0, !1, {
      fileName: "app/containers/Header/Header.tsx",
      lineNumber: 9,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(Nav, {}, void 0, !1, {
      fileName: "app/containers/Header/Header.tsx",
      lineNumber: 10,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/containers/Header/Header.tsx",
    lineNumber: 8,
    columnNumber: 5
  }, this);
}

// app/components/Footer/Footer.tsx
var import_react11 = require("@remix-run/react");

// app/components/icons/github.tsx
var import_jsx_dev_runtime12 = require("react/jsx-dev-runtime");
function GithubIcon() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("svg", { viewBox: "0 0 512 512", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("path", { d: "m256 0c-140.699219 0-256 116.300781-256 257 0 139.882812 114.25 255 256 255 141.574219 0 256-114.945312 256-255 0-140.699219-115.300781-257-256-257zm45 477.5c-14.398438 3-29.699219 4.5-45 4.5s-30.601562-1.5-45-4.5v-70.199219c0-16.800781 4.5-22.800781 10.5-30.902343 3.054688-3.492188 4.898438-6.625 18.597656-27.296876l-23.097656-3.601562c-59.402344-8.699219-82.800781-39.601562-92.101562-63.601562-12-32.097657-5.699219-72.300782 15.902343-97.796876 3.300781-3.902343 6-10.503906 3.601563-17.402343-4.503906-13.800781-3.902344-35.699219-.902344-44.101563 15.90625 2.273438 32.261719 13.667969 45.902344 21.902344 6.285156 3.667969 9.582031 2.699219 12.597656 3 10.960938-2.28125 28.058594-7.800781 54.300781-7.800781 16.199219 0 33.300781 2.398437 50.101563 7.199219 3.003906-.070313 7.832031 2.484374 16.199218-2.398438 14.257813-8.6875 30.058594-19.691406 45.898438-21.902344 3 8.402344 3.601562 30.300782-.898438 44.101563-2.402343 6.898437.296876 13.5 3.601563 17.402343 21.597656 25.5 27.898437 65.699219 15.898437 97.796876-9.300781 24-32.699218 54.902343-92.101562 63.601562l-23.097656 3.601562c14.160156 21.367188 15.652344 23.929688 18.601562 27.296876 5.996094 8.101562 10.496094 14.101562 10.496094 30.902343zm30-8.699219v-61.5c0-17.101562-3.601562-28.5-8.402344-36.902343 45.601563-12.296876 78.003906-39.300782 92.402344-78 15.300781-40.796876 8.402344-89.398438-17.101562-123 4.503906-20.097657 4.503906-52.199219-6.296876-67.199219-4.800781-6.597657-11.402343-10.199219-19.800781-10.199219-.300781 0-.300781 0-.300781 0-23.261719 1.257812-41.570312 12.972656-61.199219 24.898438-18-4.800782-36.300781-7.199219-54.601562-7.199219-18.597657 0-37.199219 2.699219-53.695313 7.199219-20.664062-12.460938-38.796875-23.671876-62.703125-24.898438-7.5 0-14.101562 3.601562-18.902343 10.199219-10.796876 15-10.796876 47.101562-6.296876 67.199219-25.503906 33.601562-32.402343 82.5-17.101562 123 14.398438 38.699218 46.800781 65.703124 92.402344 78-3.722656 6.511718-6.667969 14.914062-7.828125 26.285156-9.210938 3.175781-17.199219 4.210937-24.628907 2.027344-7.835937-2.316407-13.941406-7.546876-19.246093-16.46875-11.914063-20.015626-32.207031-36.355469-55.3125-34.230469l2.636719 29.882812c10.699218-.980469 21.347656 10.339844 26.878906 19.671875 9.125 15.367188 21.417968 25.445313 36.546875 29.914063 11.230469 3.308593 21.496093 3.230469 32.550781.871093v40.449219c-87.300781-30.601562-151-114-151-211.800781 0-124.199219 101.800781-227 226-227s226 102.800781 226 227c0 97.800781-63.699219 181.199219-151 211.800781zm0 0" }, void 0, !1, {
    fileName: "app/components/icons/github.tsx",
    lineNumber: 4,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/icons/github.tsx",
    lineNumber: 3,
    columnNumber: 5
  }, this);
}

// app/components/icons/twitter.tsx
var import_jsx_dev_runtime13 = require("react/jsx-dev-runtime");
function TwitterIcon() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("svg", { viewBox: "0 -45 512.00013 512", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("path", { d: "m194.816406 422.710938c-85.453125 0-152.992187-14.929688-185.304687-40.953126l-.628907-.507812-.570312-.570312c-7.675781-7.679688-10.191406-17.753907-6.894531-27.636719l.300781-.820313c4-10.003906 13.800781-16.738281 24.421875-16.800781 21.859375-.378906 40.984375-2.984375 58.339844-8.042969-27.683594-12.875-46.914063-35.167968-58.355469-67.433594-3.847656-10.0625-.527344-21.21875 8.339844-27.871093 2.1875-1.644531 4.660156-2.886719 7.277344-3.71875-15.382813-17.757813-26.746094-37.964844-33.109376-59.335938l-.199218-.664062-.136719-.679688c-2.160156-10.808593 2.671875-21.921875 11.527344-26.707031 3.714843-2.132812 7.75-3.238281 11.800781-3.332031-4.367188-9.40625-7.542969-19.0625-9.425781-28.777344-5.226563-26.921875-.914063-53.910156 12.8125-80.214844l3.175781-6.351562c2.542969-5.082031 7.402344-8.652344 13.003906-9.5625 5.601563-.90625 11.34375.945312 15.355469 4.957031l5.785156 5.792969c45.703125 47.914062 86.640625 70.648437 157.417969 86.203125 3.160156-27.167969 14.90625-52.421875 33.855469-72.296875 22.550781-23.648438 52.664062-36.917969 84.792969-37.371094h.210937c23.441406 0 52.519531 13.382813 70.105469 22.820313 15.085937-4.9375 33.261718-12.582032 52.121094-20.664063 8.824218-4.140625 19.703124-2.2460938 26.640624 4.691406 6.800782 6.800781 8.6875 16.390625 5.078126 25.710938-1.371094 3.816406-2.925782 7.5625-4.65625 11.226562 2.582031 1.183594 4.945312 2.789063 6.941406 4.785157 6.035156 6.035156 8.550781 15.480468 6.40625 24.066406l-.230469.816406c-7.226563 23.289062-21.109375 42.257812-39.46875 54.164062-3.066406 163.285157-126.027344 295.078126-276.730469 295.078126zm-156.511718-57.675782c30.449218 17.226563 88.476562 27.648438 156.511718 27.648438 65.410156 0 127.136719-28.082032 173.804688-79.074219 47.050781-51.410156 72.960937-119.679687 72.960937-192.234375v-.816406c0-6.570313 3.617188-12.566406 9.4375-15.652344 11.808594-6.253906 21.371094-16.90625 27.589844-30.527344-6.414063 1.011719-12.933594-1.5625-16.929687-6.929687-4.644532-6.238281-4.695313-14.664063-.128907-20.957031 2.464844-3.398438 4.699219-6.933594 6.691407-10.589844-16.285157 6.839844-31.75 12.972656-45.175782 17.046875-4.878906 1.476562-10.316406.898437-14.773437-1.589844-23.902344-13.316406-46.164063-21.277344-59.585938-21.316406-49.527343.757812-89.796875 43.175781-89.796875 94.605469 0 5.316406-2.359375 10.300781-6.464844 13.679687-4.109374 3.375-9.453124 4.726563-14.671874 3.695313-81.609376-16.078126-129.96875-40.1875-180.257813-90.722657-7.207031 17.269531-9.175781 34.664063-5.84375 51.839844 3.378906 17.398437 12.367187 34.832031 25.996094 50.414063 5.179687 5.914062 5.867187 14.375 1.710937 21.050781-4.140625 6.652343-12.011718 9.761719-19.578125 7.734375-5.914062-1.585938-11.351562-3.667969-16.507812-6.34375 10.503906 22.816406 28.570312 43.917968 51.28125 59.480468 6.582031 4.511719 9.332031 12.921876 6.691406 20.453126-2.644531 7.542968-10.03125 12.398437-18.015625 11.804687-8.699219-.644531-16.40625-2.296875-23.5-5.082031 12.734375 25.933594 33.082031 40.203125 64.429688 45.65625 7.464843 1.300781 13.277343 7.195312 14.464843 14.667968 1.191407 7.472657-2.507812 14.878907-9.199219 18.429688-26.71875 14.164062-55.921874 21.765625-91.140624 23.628906zm0 0" }, void 0, !1, {
    fileName: "app/components/icons/twitter.tsx",
    lineNumber: 4,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/icons/twitter.tsx",
    lineNumber: 3,
    columnNumber: 5
  }, this);
}

// app/components/icons/linkedin.tsx
var import_jsx_dev_runtime14 = require("react/jsx-dev-runtime");
function LinkedinIcon() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
    "svg",
    {
      height: "512",
      viewBox: "0 0 24 24",
      width: "512",
      xmlns: "http://www.w3.org/2000/svg",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("path", { d: "m18.59 24c.103 0 4.762-.001 4.66-.001.414 0 .75-.336.75-.75-.35-7.857 1.842-16.148-6.338-16.148-1.573 0-2.826.537-3.729 1.247 0-1.461-1.579-.653-5.224-.87-.414 0-.75.336-.75.75.302 14.166-.674 15.771.75 15.771h4.66c1.353 0 .492-1.908.75-8.188 0-2.594.75-3.102 2.046-3.102 1.434 0 1.675.996 1.675 3.228.257 6.167-.598 8.063.75 8.063zm-2.425-12.791c-4.491 0-3.546 4.938-3.546 11.29h-3.16v-13.521h2.974v1.298c0 .72 1.097 1.074 1.479.35.492-.934 1.77-2.025 3.75-2.025 3.527 0 4.838 1.733 4.838 6.396v7.503h-3.16c0-7.144.756-11.291-3.175-11.291z" }, void 0, !1, {
          fileName: "app/components/icons/linkedin.tsx",
          lineNumber: 9,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("path", { d: "m1.122 7.479c-1.42 0-.448 1.585-.75 15.771 0 .414.336.75.75.75h4.665c1.42 0 .448-1.585.75-15.771 0-1.295-1.881-.531-5.415-.75zm3.915 15.021h-3.165v-13.521h3.165z" }, void 0, !1, {
          fileName: "app/components/icons/linkedin.tsx",
          lineNumber: 10,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("path", { d: "m3.452 0c-4.576 0-4.548 6.929 0 6.929 4.545 0 4.581-6.929 0-6.929zm0 5.429c-2.568 0-2.592-3.929 0-3.929 2.597 0 2.564 3.929 0 3.929z" }, void 0, !1, {
          fileName: "app/components/icons/linkedin.tsx",
          lineNumber: 11,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/components/icons/linkedin.tsx",
      lineNumber: 3,
      columnNumber: 5
    },
    this
  );
}

// app/components/icons/mail.tsx
var import_jsx_dev_runtime15 = require("react/jsx-dev-runtime");
function MailIcon() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
    "svg",
    {
      version: "1.1",
      xmlns: "http://www.w3.org/2000/svg",
      xmlnsXlink: "http://www.w3.org/1999/xlink",
      x: "0px",
      y: "0px",
      viewBox: "0 0 512 512",
      xmlSpace: "preserve",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("g", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("g", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
        "path",
        {
          d: `M467,61H45C20.218,61,0,81.196,0,106v300c0,24.72,20.128,45,45,45h422c24.72,0,45-20.128,45-45V106
			C512,81.28,491.872,61,467,61z M460.786,91L256.954,294.833L51.359,91H460.786z M30,399.788V112.069l144.479,143.24L30,399.788z
			 M51.213,421l144.57-144.57l50.657,50.222c5.864,5.814,15.327,5.795,21.167-0.046L317,277.213L460.787,421H51.213z M482,399.787
			L338.213,256L482,112.212V399.787z`
        },
        void 0,
        !1,
        {
          fileName: "app/components/icons/mail.tsx",
          lineNumber: 14,
          columnNumber: 11
        },
        this
      ) }, void 0, !1, {
        fileName: "app/components/icons/mail.tsx",
        lineNumber: 13,
        columnNumber: 9
      }, this) }, void 0, !1, {
        fileName: "app/components/icons/mail.tsx",
        lineNumber: 12,
        columnNumber: 7
      }, this)
    },
    void 0,
    !1,
    {
      fileName: "app/components/icons/mail.tsx",
      lineNumber: 3,
      columnNumber: 5
    },
    this
  );
}

// app/data/secondaryNav.ts
var socialLinks = [
  {
    id: 1,
    link: "https://github.com/mateoolarte",
    Icon: GithubIcon
  },
  {
    id: 2,
    link: "https://twitter.com/mateo_olarte",
    Icon: TwitterIcon
  },
  {
    id: 3,
    link: "https://www.linkedin.com/in/mateoolarte/",
    Icon: LinkedinIcon
  },
  {
    id: 4,
    link: "mailto:mateo.olarte8@gmail.com",
    Icon: MailIcon
  }
], info = {
  es: {
    heading: "\xBFInteresado en hablar conmigo?",
    subtitle: "Contactame en:",
    madeBy: "Hecho con",
    in: "en "
  },
  en: {
    heading: "Are you interested in talking with me?",
    subtitle: "Contact me on:",
    madeBy: "Made with",
    in: "in "
  }
};

// app/components/Footer/styles.ts
var import_styled_components5 = __toESM(require("styled-components"));
var Wrapper4 = import_styled_components5.default.footer`
  max-width: 1180px;
  width: 90%;
  margin: 0 auto;
  text-align: center;
`, Heading = import_styled_components5.default.h3`
  margin-top: 0;
  margin-bottom: 1rem;
  font-size: 1.6rem;
`, Subtitle = import_styled_components5.default.p`
  margin-top: 0;
  margin-bottom: 1.5rem;
  color: ${secondaryColor};
  font-size: 1.1rem;
`, SocialLinks = import_styled_components5.default.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 0 4rem;
  padding: 0;
  list-style-type: none;
`, SocialItem = import_styled_components5.default.li`
  margin: 0 1rem;
`, SocialLink = import_styled_components5.default.a`
  display: inline-block;
`, SocialIcon = import_styled_components5.default.span`
  display: inline-block;

  svg {
    width: 2.5rem;
    height: 2.5rem;
    fill: ${mainColor};

    &:hover {
      fill: ${linksColor};
    }
  }
`, Copyright = import_styled_components5.default.p`
  margin-top: 0;
  margin-bottom: 6rem;
  color: ${secondaryColor};
  line-height: 1.8;

  ${MEDIA_QUERIES.landscape} {
    margin-bottom: 2rem;
  }
`;

// app/components/Footer/Footer.tsx
var import_jsx_dev_runtime16 = require("react/jsx-dev-runtime");
function Cta({ content }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_jsx_dev_runtime16.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(Heading, { children: content.heading }, void 0, !1, {
      fileName: "app/components/Footer/Footer.tsx",
      lineNumber: 28,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(Subtitle, { children: content.subtitle }, void 0, !1, {
      fileName: "app/components/Footer/Footer.tsx",
      lineNumber: 29,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Footer/Footer.tsx",
    lineNumber: 27,
    columnNumber: 5
  }, this);
}
function Footer() {
  let { pathname: currentUrl } = (0, import_react11.useLocation)(), isSpanish = currentUrl.includes("blog"), currentYear = new Date().getFullYear();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(Wrapper4, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(Cta, { content: isSpanish ? info.es : info.en }, void 0, !1, {
      fileName: "app/components/Footer/Footer.tsx",
      lineNumber: 41,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(SocialLinks, { children: socialLinks.map(({ id, link, Icon: Icon2 }) => /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(SocialItem, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(SocialLink, { href: link, target: "_blank", children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(SocialIcon, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(Icon2, {}, void 0, !1, {
      fileName: "app/components/Footer/Footer.tsx",
      lineNumber: 48,
      columnNumber: 19
    }, this) }, void 0, !1, {
      fileName: "app/components/Footer/Footer.tsx",
      lineNumber: 47,
      columnNumber: 17
    }, this) }, void 0, !1, {
      fileName: "app/components/Footer/Footer.tsx",
      lineNumber: 46,
      columnNumber: 15
    }, this) }, id, !1, {
      fileName: "app/components/Footer/Footer.tsx",
      lineNumber: 45,
      columnNumber: 13
    }, this)) }, void 0, !1, {
      fileName: "app/components/Footer/Footer.tsx",
      lineNumber: 42,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(Copyright, { children: [
      isSpanish ? info.es.madeBy : info.en.madeBy,
      " ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("span", { role: "img", "aria-label": "heart", children: "\u2764\uFE0F" }, void 0, !1, {
        fileName: "app/components/Footer/Footer.tsx",
        lineNumber: 57,
        columnNumber: 9
      }, this),
      " ",
      isSpanish ? info.es.in : info.en.in,
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("strong", { children: "Medell\xEDn, Colombia" }, void 0, !1, {
        fileName: "app/components/Footer/Footer.tsx",
        lineNumber: 61,
        columnNumber: 9
      }, this),
      " ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("br", {}, void 0, !1, {
        fileName: "app/components/Footer/Footer.tsx",
        lineNumber: 61,
        columnNumber: 45
      }, this),
      "Mateo Olarte \xA9 ",
      currentYear
    ] }, void 0, !0, {
      fileName: "app/components/Footer/Footer.tsx",
      lineNumber: 55,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Footer/Footer.tsx",
    lineNumber: 40,
    columnNumber: 5
  }, this);
}

// app/hooks/useTheme.ts
var import_react12 = require("react");

// app/utils/is-browser.ts
function isBrowser() {
  return typeof window < "u";
}

// app/hooks/useTheme.ts
function useTheme() {
  let [themeMode, seThemeMode] = (0, import_react12.useState)("dark");
  return (0, import_react12.useEffect)(() => {
    if (isBrowser()) {
      let currentMode = window.localStorage.getItem("theme-mode");
      if (currentMode)
        seThemeMode(currentMode);
      else {
        let matchedTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
        return seThemeMode(matchedTheme), window.localStorage.setItem("theme-mode", matchedTheme), themeMode;
      }
    }
  }, [themeMode]), themeMode;
}

// app/containers/Layout/styles.ts
var import_styled_components6 = require("styled-components");
var GlobalStyle = import_styled_components6.createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html {
    background-color: ${backgroundColor};
    font-family: sans-serif;
    text-size-adjust: 100%;
  }

  body {
    margin: 0;
    color: ${mainColor};
    font-family: ${FONTS.main};
    font-size: 16px;
    font-weight: 500;
    letter-spacing: 0.43px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  main {
    max-width: 1180px;
    width: 90%;
    margin: 0 auto;
  }

  picture {
    display: block;
  }

  a {
    color: ${linksColor};
  }
`;

// app/containers/Layout/Layout.tsx
var import_jsx_dev_runtime17 = require("react/jsx-dev-runtime");
function Layout({ children }) {
  let theme2 = useTheme(), [currentMode, setCurrentMode] = (0, import_react13.useState)(theme2);
  return (0, import_react13.useEffect)(() => {
    setCurrentMode(theme2);
  }, [theme2]), /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_styled_components7.ThemeProvider, { theme: { mode: currentMode }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
    ThemeContext.Provider,
    {
      value: { theme: currentMode, toggleTheme: setCurrentMode },
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(GlobalStyle, {}, void 0, !1, {
          fileName: "app/containers/Layout/Layout.tsx",
          lineNumber: 29,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(Header, {}, void 0, !1, {
          fileName: "app/containers/Layout/Layout.tsx",
          lineNumber: 30,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("main", { children }, void 0, !1, {
          fileName: "app/containers/Layout/Layout.tsx",
          lineNumber: 31,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(Footer, {}, void 0, !1, {
          fileName: "app/containers/Layout/Layout.tsx",
          lineNumber: 32,
          columnNumber: 9
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/containers/Layout/Layout.tsx",
      lineNumber: 26,
      columnNumber: 7
    },
    this
  ) }, void 0, !1, {
    fileName: "app/containers/Layout/Layout.tsx",
    lineNumber: 25,
    columnNumber: 5
  }, this);
}

// app/routes/blog/$slug.tsx
var import_jsx_dev_runtime18 = require("react/jsx-dev-runtime"), Wrapper5 = import_styled_components8.default.article`
  width: 90%;
  max-width: 740px;
  margin: 3rem auto 8rem;
`, Hero = import_styled_components8.default.div`
  text-align: center;
`, Category = import_styled_components8.default.span`
  display: inline-block;
  margin-bottom: 1.1rem;
  color: ${fourtyColor};
  font-family: ${FONTS.main};
  font-size: 1rem;
`, DateText = import_styled_components8.default.span`
  display: inline-block;
  margin-top: 0.3rem;
  margin-bottom: 1.2rem;
  color: ${fourtyColor};
  font-family: ${FONTS.main};
  font-size: 0.9rem;

  ${MEDIA_QUERIES.tablet} {
    margin-bottom: 1.6rem;
  }
`, Title = import_styled_components8.default.h1`
  font-size: 1.8rem;

  ${MEDIA_QUERIES.tablet} {
    font-size: 2.2rem;
  }
`, ImageContainer = import_styled_components8.default.figure`
  display: none;
  margin-bottom: 3rem;

  ${MEDIA_QUERIES.landscape} {
    display: block;
  }
`, Image = import_styled_components8.default.img`
  ${MEDIA_QUERIES.landscape} {
    width: 100%;
    height: 360px;
    margin-bottom: 0.5rem;
    object-fit: cover;
  }
`, Caption = import_styled_components8.default.figcaption`
  color: ${mainColor};
  font-size: 0.8rem;
  opacity: 0.5;

  a {
    color: ${linksColor};
    text-decoration: none;
  }
`, Content = import_styled_components8.default.div`
  font-family: ${FONTS.main};

  p {
    margin: 0;
    font-size: 1.1rem;
    font-weight: 500;
    line-height: 1.8;
  }

  hr {
    border-color: ${shadows};
    border-style: solid;
  }

  a {
    color: ${linksColor};

    &:visited,
    &:hover {
      color: ${linksColorTerciary};
    }

    &:focus {
      color: ${linksColorSecondary};
    }
  }
`, loader = async ({ params }) => await post(params.slug);
function Post() {
  let { title, createdAt, categories, thumbnail, content, copyright } = (0, import_react14.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(Layout, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(Wrapper5, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(Hero, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(Category, { children: categories }, void 0, !1, {
        fileName: "app/routes/blog/$slug.tsx",
        lineNumber: 129,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(Title, { children: title }, void 0, !1, {
        fileName: "app/routes/blog/$slug.tsx",
        lineNumber: 130,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(DateText, { children: createdAt }, void 0, !1, {
        fileName: "app/routes/blog/$slug.tsx",
        lineNumber: 131,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(ImageContainer, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(Image, { src: thumbnail, alt: `Imagen principal ${title}` }, void 0, !1, {
          fileName: "app/routes/blog/$slug.tsx",
          lineNumber: 133,
          columnNumber: 13
        }, this),
        copyright && /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(Caption, { children: [
          "Tomado de:",
          " ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("a", { href: copyright, target: "_blank", rel: "noreferrer", children: copyright }, void 0, !1, {
            fileName: "app/routes/blog/$slug.tsx",
            lineNumber: 137,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/blog/$slug.tsx",
          lineNumber: 135,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/blog/$slug.tsx",
        lineNumber: 132,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/blog/$slug.tsx",
      lineNumber: 128,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(Content, { dangerouslySetInnerHTML: { __html: content } }, void 0, !1, {
      fileName: "app/routes/blog/$slug.tsx",
      lineNumber: 144,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/blog/$slug.tsx",
    lineNumber: 127,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/blog/$slug.tsx",
    lineNumber: 126,
    columnNumber: 5
  }, this);
}

// app/routes/blog/index.tsx
var blog_exports = {};
__export(blog_exports, {
  default: () => Blog,
  loader: () => loader2,
  meta: () => meta
});
var import_react16 = require("@remix-run/react"), import_styled_components10 = __toESM(require("styled-components"));

// app/utils/seo.ts
function SEO({ title, description }) {
  return {
    title: `${title} | Mateo Olarte | Frontend Engineer`,
    description
  };
}

// app/data/posts.ts
var POSTS_ID = process.env.NOTION_POSTS_DATABASE_ID;
function parseCategories2(categories) {
  return categories.map((category) => category.name).join(", ");
}
function parsePostResponse2(post2) {
  var _a, _b, _c, _d;
  let properties = post2.properties, id = post2.id, title = properties.title.title[0].plain_text, slug = properties.slug.rich_text[0].plain_text, categories = parseCategories2(properties.categories.multi_select), thumbnail = properties.thumbnail.url, publishedAt = (_b = (_a = properties.publishedAt) == null ? void 0 : _a.date) == null ? void 0 : _b.start, excerpt = (_d = (_c = properties.excerpt) == null ? void 0 : _c.rich_text[0]) == null ? void 0 : _d.plain_text;
  return {
    id,
    title,
    slug,
    categories,
    thumbnail,
    publishedAt,
    excerpt
  };
}
async function posts() {
  let params = {
    database_id: POSTS_ID,
    filter: {
      and: [
        {
          property: "title",
          title: {
            is_not_empty: !0
          }
        },
        {
          property: "status",
          select: {
            equals: "Published"
          }
        }
      ]
    }
  };
  return (await (await db().databases.query(params)).results).map(parsePostResponse2);
}

// app/components/PostCard/styles.ts
var import_styled_components9 = __toESM(require("styled-components")), import_react15 = require("@remix-run/react");
var Wrapper6 = import_styled_components9.default.article`
  width: 100%;
  margin-bottom: 3rem;

  ${MEDIA_QUERIES.landscape} {
    display: flex;
    flex-direction: column;
    width: calc(100% / 3 - 2rem);
    ${({ isCover }) => isCover && import_styled_components9.css`
        flex-direction: row;
        width: 100%;
      `}

    &:nth-child(3n) {
      margin: 0 3rem 3rem;
    }
  }
`, ImageContainer2 = import_styled_components9.default.div`
  display: none;
  ${MEDIA_QUERIES.landscape} {
    display: block;
    width: 100%;
    height: 250px;
    margin-bottom: 1.5rem;
    ${({ isCover }) => isCover && import_styled_components9.css`
        display: block;
        width: 50%;
        height: auto;
        min-height: 400px;
        margin-bottom: 0;
      `}
  }
`, Image2 = import_styled_components9.default.div`
  ${MEDIA_QUERIES.landscape} {
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center center;
  }
`, Info = import_styled_components9.default.div`
  ${({ isCover }) => isCover && import_styled_components9.css`
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 100%;
      padding: 2rem;
      background-color: ${shadows};
      text-align: center;
    `}

  ${MEDIA_QUERIES.landscape} {
    ${({ isCover }) => isCover && import_styled_components9.css`
        width: 50%;
        padding: 3rem;
      `}
  }

  ${MEDIA_QUERIES.desktop} {
    ${({ isCover }) => isCover && import_styled_components9.css`
        padding: 3rem 5rem;
      `}
  }
`, Details = import_styled_components9.default.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.4rem;
  ${MEDIA_QUERIES.tablet} {
    margin-bottom: 1.8rem;
  }
`, Category2 = import_styled_components9.default.span`
  display: inline-block;
  color: ${fourtyColor};
  font-family: ${FONTS.main};
  font-size: 1rem;
  ${({ isCover }) => isCover && import_styled_components9.css`
      margin-bottom: 1.1rem;
    `}
`, DateText2 = import_styled_components9.default.span`
  display: inline-block;
  color: ${fourtyColor};
  font-family: ${FONTS.main};
  font-size: 0.9rem;
  ${({ isCover }) => isCover && import_styled_components9.css`
      margin-top: 0.3rem;
      margin-bottom: 1.2rem;
    `}

  ${MEDIA_QUERIES.tablet} {
    ${({ isCover }) => isCover && import_styled_components9.css`
        margin-bottom: 1.6rem;
      `}
  }
`, Title2 = import_styled_components9.default.h1`
  font-size: 1.4rem;
  ${({ isCover }) => isCover && import_styled_components9.css`
      margin: 0;
      font-size: 1.6rem;
    `};

  ${MEDIA_QUERIES.tablet} {
    margin-bottom: 1.6rem;
    font-size: 1.6rem;
    ${({ isCover }) => isCover && import_styled_components9.css`
        margin: 0;
        font-size: 2rem;
      `};
  }
`, Description = import_styled_components9.default.p`
  margin-top: 0;
  margin-bottom: 2rem;
  color: ${fourtyColor};
  font-family: ${FONTS.main};
  line-height: 1.5;

  ${MEDIA_QUERIES.landscape} {
    ${({ isCover }) => isCover && import_styled_components9.css`
        margin-bottom: 1rem;
        padding: 0 1rem;
      `};
  }
`, Btn = (0, import_styled_components9.default)(import_react15.Link)`
  display: inline-block;
  color: ${linksColor};
  font-weight: 700;
  text-decoration: none;

  ${({ isCover }) => isCover && import_styled_components9.css`
      padding: 0.3rem 1rem;
      border: 2px solid ${linksColor};
      border-radius: 0.6rem;
      background-color: ${linksColor};
      color: ${terciaryColor};
      font-weight: 500;

      &:hover {
        background: none;
        color: ${linksColor};
      }
    `};

  ${MEDIA_QUERIES.tablet} {
    font-size: 1.1rem;
    ${({ isCover }) => isCover && import_styled_components9.css`
        padding: 0.5rem 1.5rem;
      `};
  }
`;

// app/components/PostCard/PostCard.tsx
var import_jsx_dev_runtime19 = require("react/jsx-dev-runtime");
function PostCard({
  title,
  slug,
  publishedAt,
  categories,
  thumbnail,
  excerpt,
  isCover
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(Wrapper6, { isCover, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(ImageContainer2, { isCover, children: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(Image2, { style: { backgroundImage: `url(${thumbnail})` } }, void 0, !1, {
      fileName: "app/components/PostCard/PostCard.tsx",
      lineNumber: 37,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/components/PostCard/PostCard.tsx",
      lineNumber: 36,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(Info, { isCover, children: [
      isCover ? /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_jsx_dev_runtime19.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(Category2, { isCover, children: categories }, void 0, !1, {
          fileName: "app/components/PostCard/PostCard.tsx",
          lineNumber: 42,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(Title2, { isCover, children: title }, void 0, !1, {
          fileName: "app/components/PostCard/PostCard.tsx",
          lineNumber: 43,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(DateText2, { isCover, children: publishedAt }, void 0, !1, {
          fileName: "app/components/PostCard/PostCard.tsx",
          lineNumber: 44,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/PostCard/PostCard.tsx",
        lineNumber: 41,
        columnNumber: 11
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_jsx_dev_runtime19.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(Details, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(Category2, { children: categories }, void 0, !1, {
            fileName: "app/components/PostCard/PostCard.tsx",
            lineNumber: 49,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(DateText2, { children: publishedAt }, void 0, !1, {
            fileName: "app/components/PostCard/PostCard.tsx",
            lineNumber: 50,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/PostCard/PostCard.tsx",
          lineNumber: 48,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(Title2, { children: title }, void 0, !1, {
          fileName: "app/components/PostCard/PostCard.tsx",
          lineNumber: 52,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/PostCard/PostCard.tsx",
        lineNumber: 47,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(Description, { isCover, children: excerpt }, void 0, !1, {
        fileName: "app/components/PostCard/PostCard.tsx",
        lineNumber: 56,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(Btn, { to: `/blog/${slug}`, isCover, children: "Leer m\xE1s" }, void 0, !1, {
        fileName: "app/components/PostCard/PostCard.tsx",
        lineNumber: 57,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/PostCard/PostCard.tsx",
      lineNumber: 39,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/PostCard/PostCard.tsx",
    lineNumber: 35,
    columnNumber: 5
  }, this);
}

// app/routes/blog/index.tsx
var import_jsx_dev_runtime20 = require("react/jsx-dev-runtime"), Wrapper7 = import_styled_components10.default.section`
  display: flex;
  flex-wrap: wrap;
  margin-top: 0;
  margin-bottom: 4rem;

  ${MEDIA_QUERIES.landscape} {
    margin-top: 2rem;
  }
`, meta = () => SEO({
  title: "Blog",
  description: "I'm a Frontend Engineer building digital products, working with web technologies like HTML, CSS, Javascript, React, GraphQL, NextJS, Remix."
}), loader2 = async () => await posts();
function Blog() {
  let data = (0, import_react16.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(Layout, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(Wrapper7, { children: data.map((post2, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(PostCard, { ...post2, isCover: index === 0 }, post2.id, !1, {
    fileName: "app/routes/blog/index.tsx",
    lineNumber: 44,
    columnNumber: 18
  }, this)) }, void 0, !1, {
    fileName: "app/routes/blog/index.tsx",
    lineNumber: 42,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/blog/index.tsx",
    lineNumber: 41,
    columnNumber: 5
  }, this);
}

// app/routes/about.tsx
var about_exports = {};
__export(about_exports, {
  default: () => About,
  meta: () => meta2
});
var import_styled_components11 = __toESM(require("styled-components"));
var import_jsx_dev_runtime21 = require("react/jsx-dev-runtime"), Wrapper8 = import_styled_components11.default.section`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
  margin-bottom: 4rem;

  ${MEDIA_QUERIES.tablet} {
    margin-top: 4rem;
    margin-bottom: 8rem;
  }
`, Heading2 = import_styled_components11.default.h3`
  margin-top: 0;
  margin-bottom: 2.5rem;
  color: ${mainColor};
  font-size: 2rem;
`, Info2 = import_styled_components11.default.div`
  width: 100%;

  ${MEDIA_QUERIES.landscape} {
    width: 60%;
  }

  p {
    font-size: 1.2rem;
    line-height: 1.8;
  }
`, LinksHeading = import_styled_components11.default.h3`
  margin-top: 2rem;
  margin-bottom: 1.4rem;
  color: ${mainColor};
  font-size: 1.6rem;
`, Links2 = import_styled_components11.default.ul`
  margin: 0;
  line-height: 1.5;
`, Item2 = import_styled_components11.default.li`
  margin-bottom: 0.5rem;
`, ItemLink = import_styled_components11.default.a`
  color: ${linksColor};
  font-size: 1.1rem;
`, meta2 = () => SEO({
  title: "About",
  description: "I\u2019m a Frontend Engineer from Medell\xEDn, Colombia. I passionate about technology especially web development, I like to work with modern technologies and always trying to learn new things to find the best solution to improve the quality of products."
});
function About() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(Layout, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(Wrapper8, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(Info2, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(Heading2, { children: "Hi, I'm Mateo Olarte" }, void 0, !1, {
      fileName: "app/routes/about.tsx",
      lineNumber: 77,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("p", { children: "I\u2019m a Frontend Engineer from Medell\xEDn, Colombia. I passionate about technology especially web development, I like to work with modern technologies and always trying to learn new things to find the best solution to improve the quality of products." }, void 0, !1, {
      fileName: "app/routes/about.tsx",
      lineNumber: 79,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("p", { children: "In high school, I found programming something interesting because I could create things through code and see how that can improve the lives of people. Then I decided to teach myself to code this allows me to have a lot of opportunities and growth in my professional career." }, void 0, !1, {
      fileName: "app/routes/about.tsx",
      lineNumber: 86,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("p", { children: "I have been working on different kinds of companies where I have been the chance to solve bussiness challenges that give me more experienced building digital projects and make an impact on the world." }, void 0, !1, {
      fileName: "app/routes/about.tsx",
      lineNumber: 94,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("p", { children: "Also, I like to play with design things and user experience to deliver better quality in my developments." }, void 0, !1, {
      fileName: "app/routes/about.tsx",
      lineNumber: 101,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(LinksHeading, { children: "Resources" }, void 0, !1, {
      fileName: "app/routes/about.tsx",
      lineNumber: 106,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(Links2, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(Item2, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(
        ItemLink,
        {
          href: "https://github.com/mateoolarte/bookmarks",
          target: "_blank",
          children: "Learning resources (Deprecated)"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/about.tsx",
          lineNumber: 109,
          columnNumber: 15
        },
        this
      ) }, void 0, !1, {
        fileName: "app/routes/about.tsx",
        lineNumber: 108,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(Item2, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(
        ItemLink,
        {
          href: "https://calendly.com/mateoolarte/mentorship",
          target: "_blank",
          children: "Need some technical help? Schedule a meeting here."
        },
        void 0,
        !1,
        {
          fileName: "app/routes/about.tsx",
          lineNumber: 117,
          columnNumber: 15
        },
        this
      ) }, void 0, !1, {
        fileName: "app/routes/about.tsx",
        lineNumber: 116,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/about.tsx",
      lineNumber: 107,
      columnNumber: 11
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/about.tsx",
    lineNumber: 76,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/routes/about.tsx",
    lineNumber: 75,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/about.tsx",
    lineNumber: 74,
    columnNumber: 5
  }, this);
}

// app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index,
  loader: () => loader3,
  meta: () => meta3
});
var import_react20 = require("@remix-run/react");

// app/data/projects.ts
var imgUrlBase = "/assets/images/projects/", iconGrowly = `${imgUrlBase}icon-growly.png`, bgGrowly = `${imgUrlBase}bg-growly.jpg`, iconGuruhotel = `${imgUrlBase}icon-guruhotel.svg`, bgGuruhotel = `${imgUrlBase}bg-guruhotel.jpg`, iconEcoactua = `${imgUrlBase}icon-ecoactua.svg`, bgEcoactua = `${imgUrlBase}bg-ecoactua.jpg`, projects = [
  {
    id: 2,
    name: "Growly",
    icon: iconGrowly,
    bgImage: bgGrowly,
    date: "2021",
    role: "Co-founder / Developer",
    description: "Create a website for your company, We are in charge of improving your digital presence",
    link: "https://getgrowly.com"
  },
  {
    id: 3,
    name: "Guruhotel",
    icon: iconGuruhotel,
    bgImage: bgGuruhotel,
    date: "2020",
    role: "Freelance / Developer",
    description: "The Shopify for the hotel industry. Independent hotels use our software to rebuild their hotel website.",
    link: "https://guruhotel.com"
  },
  {
    id: 4,
    name: "Ecoactua",
    icon: iconEcoactua,
    bgImage: bgEcoactua,
    date: "2019",
    role: "Creator / Developer",
    description: "Web application to report environmental issues in your city. Solved by local authorities.",
    link: "https://ecoactua.up.railway.app/#/"
  }
];

// app/data/latestPosts.ts
var POSTS_ID2 = process.env.NOTION_POSTS_DATABASE_ID;
function parsePostResponse3(post2) {
  let properties = post2.properties, id = post2.id, title = properties.title.title[0].plain_text, slug = properties.slug.rich_text[0].plain_text;
  return {
    id,
    title,
    slug
  };
}
async function latestPosts() {
  let params = {
    database_id: POSTS_ID2,
    page_size: 2,
    filter: {
      and: [
        {
          property: "title",
          title: {
            is_not_empty: !0
          }
        },
        {
          property: "status",
          select: {
            equals: "Published"
          }
        }
      ]
    }
  };
  return (await (await db().databases.query(params)).results).map(parsePostResponse3);
}

// app/components/HomeHero/HomeHero.tsx
var import_react17 = require("@remix-run/react");

// app/components/HomeHero/styles.ts
var import_styled_components12 = __toESM(require("styled-components"));
var Wrapper9 = import_styled_components12.default.div`
  margin: 2rem 0 4rem;

  ${MEDIA_QUERIES.tablet} {
    margin: 5rem 0 7rem;
  }
`, Title3 = import_styled_components12.default.h1`
  margin-top: 0;
  margin-bottom: 0.5rem;
  line-height: 1.2;

  ${MEDIA_QUERIES.tablet} {
    font-size: 2.4rem;
  }

  strong {
    color: ${linksColor};
  }
`, Subtitle2 = import_styled_components12.default.p`
  margin-top: 0;
  color: ${secondaryColor};
  line-height: 1.5;
  font-size: 1.1rem;

  ${MEDIA_QUERIES.landscape} {
    font-size: 1.2rem;
  }
`;

// app/components/HomeHero/HomeHero.tsx
var import_jsx_dev_runtime22 = require("react/jsx-dev-runtime");
function HomeHero() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(Wrapper9, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(Title3, { children: [
      "Hi there \u{1F44B}\u{1F3FB}",
      /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("br", {}, void 0, !1, {
        fileName: "app/components/HomeHero/HomeHero.tsx",
        lineNumber: 10,
        columnNumber: 9
      }, this),
      "I'm a ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("strong", { children: "Frontend Engineer" }, void 0, !1, {
        fileName: "app/components/HomeHero/HomeHero.tsx",
        lineNumber: 11,
        columnNumber: 20
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/HomeHero/HomeHero.tsx",
      lineNumber: 8,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(Subtitle2, { children: [
      "I like to solve problems through technology and a lifelong learner. More about me ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(import_react17.Link, { to: "/about", children: "here." }, void 0, !1, {
        fileName: "app/components/HomeHero/HomeHero.tsx",
        lineNumber: 15,
        columnNumber: 18
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/HomeHero/HomeHero.tsx",
      lineNumber: 13,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/HomeHero/HomeHero.tsx",
    lineNumber: 7,
    columnNumber: 5
  }, this);
}

// app/components/ProjectCard/styles.ts
var import_styled_components13 = __toESM(require("styled-components"));
var Wrapper10 = import_styled_components13.default.a`
  display: flex;
  width: 100%;
  border-radius: 0.6rem;
  transition: box-shadow 0.45s ease-in-out;
  color: ${mainColor};
  box-shadow: 0 3px 12px ${shadows};
  text-decoration: none;

  ${MEDIA_QUERIES.tablet} {
    width: calc(50% - 1rem);
    height: 280px;
  }

  ${MEDIA_QUERIES.landscape} {
    height: 330px;
  }

  &:hover {
    box-shadow: 0 3px 28px ${shadows};

    .backgroundImageProject {
      opacity: 1;
    }
  }
`, Info3 = import_styled_components13.default.div`
  width: 100%;
  padding: 1.5rem;
  text-align: center;

  ${MEDIA_QUERIES.landscape} {
    width: 50%;
    text-align: left;
  }
`, Icon = import_styled_components13.default.img`
  margin-bottom: 0.5rem;
`, Name = import_styled_components13.default.h3`
  margin-top: 0;
  margin-bottom: 0.5rem;
  font-size: 1.6rem;
  font-weight: 600;
`, Details2 = import_styled_components13.default.p`
  margin-top: 0;
  margin-bottom: 2rem;
  font-size: 0.9rem;
  font-weight: 300;
`, Description2 = import_styled_components13.default.p`
  margin-top: 0;
  font-size: 0.9rem;
  font-weight: 300;
  line-height: 1.4;
`, BgImageContainer = import_styled_components13.default.div`
  display: none;

  ${MEDIA_QUERIES.landscape} {
    display: block;
    width: 50%;
    border-radius: 0 0.6rem 0.6rem 0;
    border-left: 1px solid ${shadows};
  }
`, BgImage = import_styled_components13.default.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 0 0.6rem 0.6rem 0;
  transition: opacity 0.37s ease-in-out;
  opacity: 0.6;
`;

// app/components/ProjectCard/ProjectCard.tsx
var import_jsx_dev_runtime23 = require("react/jsx-dev-runtime");
function ProjectCard({
  name,
  icon,
  bgImage,
  date,
  role,
  description,
  link
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(Wrapper10, { href: link, target: "_blank", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(Info3, { children: [
      icon && /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(
        Icon,
        {
          src: icon,
          alt: `Icon for ${name}`,
          height: "45px",
          loading: "lazy"
        },
        void 0,
        !1,
        {
          fileName: "app/components/ProjectCard/ProjectCard.tsx",
          lineNumber: 35,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(Name, { children: name }, void 0, !1, {
        fileName: "app/components/ProjectCard/ProjectCard.tsx",
        lineNumber: 42,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(Details2, { children: [
        date,
        " - ",
        role
      ] }, void 0, !0, {
        fileName: "app/components/ProjectCard/ProjectCard.tsx",
        lineNumber: 43,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(Description2, { children: description }, void 0, !1, {
        fileName: "app/components/ProjectCard/ProjectCard.tsx",
        lineNumber: 46,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/ProjectCard/ProjectCard.tsx",
      lineNumber: 33,
      columnNumber: 7
    }, this),
    bgImage && /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(BgImageContainer, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(
      BgImage,
      {
        src: bgImage,
        className: "backgroundImageProject",
        loading: "lazy"
      },
      void 0,
      !1,
      {
        fileName: "app/components/ProjectCard/ProjectCard.tsx",
        lineNumber: 50,
        columnNumber: 11
      },
      this
    ) }, void 0, !1, {
      fileName: "app/components/ProjectCard/ProjectCard.tsx",
      lineNumber: 49,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/ProjectCard/ProjectCard.tsx",
    lineNumber: 32,
    columnNumber: 5
  }, this);
}

// app/containers/FeaturedProjects/styles.ts
var import_styled_components14 = __toESM(require("styled-components")), Heading3 = import_styled_components14.default.h2`
  margin-top: 0;
  font-size: 2rem;
`, ProjectsWrapper = import_styled_components14.default.div`
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  margin-bottom: 4rem;
`;

// app/containers/FeaturedProjects/FeaturedProjects.tsx
var import_jsx_dev_runtime24 = require("react/jsx-dev-runtime");
function FeaturedProjects({ projects: projects2 }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(import_jsx_dev_runtime24.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(Heading3, { id: "projects", children: "Featured Projects" }, void 0, !1, {
      fileName: "app/containers/FeaturedProjects/FeaturedProjects.tsx",
      lineNumber: 23,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(ProjectsWrapper, { children: projects2.map((project) => /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(ProjectCard, { ...project }, project.id, !1, {
      fileName: "app/containers/FeaturedProjects/FeaturedProjects.tsx",
      lineNumber: 27,
      columnNumber: 18
    }, this)) }, void 0, !1, {
      fileName: "app/containers/FeaturedProjects/FeaturedProjects.tsx",
      lineNumber: 25,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/containers/FeaturedProjects/FeaturedProjects.tsx",
    lineNumber: 22,
    columnNumber: 5
  }, this);
}

// app/components/HomePost/styles.ts
var import_styled_components15 = __toESM(require("styled-components")), import_react18 = require("@remix-run/react");
var Wrapper11 = import_styled_components15.default.article`
  margin-bottom: 1.4rem;
`, Title4 = (0, import_styled_components15.default)(import_react18.Link)`
  color: ${mainColor};
  font-size: 1.2rem;
  font-weight: 600;
  text-decoration: none;
`;

// app/components/HomePost/HomePost.tsx
var import_jsx_dev_runtime25 = require("react/jsx-dev-runtime");
function HomePost({ title, link }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(Wrapper11, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(Title4, { to: link, children: title }, void 0, !1, {
    fileName: "app/components/HomePost/HomePost.tsx",
    lineNumber: 11,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/HomePost/HomePost.tsx",
    lineNumber: 10,
    columnNumber: 5
  }, this);
}

// app/containers/LatestPosts/styles.ts
var import_styled_components16 = __toESM(require("styled-components")), import_react19 = require("@remix-run/react");
var Heading4 = import_styled_components16.default.h2`
  margin-top: 0;
  font-size: 2rem;
`, PostsWrapper = import_styled_components16.default.div`
  margin-bottom: 5rem;
`, Btn2 = (0, import_styled_components16.default)(import_react19.Link)`
  display: inline-block;
  padding: 0.8rem 2rem;
  border: 2px solid ${linksColor};
  border-radius: 0.6rem;
  background-color: ${linksColor};
  color: ${backgroundColor};
  text-decoration: none;

  &:hover {
    background: transparent;
    color: ${linksColor};
  }
`;

// app/containers/LatestPosts/LatestPosts.tsx
var import_jsx_dev_runtime26 = require("react/jsx-dev-runtime");
function LatestPosts({ posts: posts2 }) {
  return !posts2 || posts2.length === 0 ? null : /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(import_jsx_dev_runtime26.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(Heading4, { children: "Latest posts" }, void 0, !1, {
      fileName: "app/containers/LatestPosts/LatestPosts.tsx",
      lineNumber: 20,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(PostsWrapper, { children: [
      posts2.map(({ id, slug, title }) => /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(HomePost, { link: `/blog/${slug}`, title }, id, !1, {
        fileName: "app/containers/LatestPosts/LatestPosts.tsx",
        lineNumber: 24,
        columnNumber: 11
      }, this)),
      /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(Btn2, { to: "/blog", children: "See more" }, void 0, !1, {
        fileName: "app/containers/LatestPosts/LatestPosts.tsx",
        lineNumber: 27,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/containers/LatestPosts/LatestPosts.tsx",
      lineNumber: 22,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/containers/LatestPosts/LatestPosts.tsx",
    lineNumber: 19,
    columnNumber: 5
  }, this);
}

// app/routes/index.tsx
var import_jsx_dev_runtime27 = require("react/jsx-dev-runtime"), meta3 = () => SEO({
  title: "Home",
  description: "I'm a Frontend Engineer building digital products, working with web technologies like HTML, CSS, Javascript, React, GraphQL, NextJS, Remix."
}), loader3 = async () => {
  let posts2 = await latestPosts();
  return {
    projects: projects || [],
    latestPosts: posts2 || []
  };
};
function Index() {
  let { projects: projects2, latestPosts: latestPosts2 } = (0, import_react20.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(Layout, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(HomeHero, {}, void 0, !1, {
      fileName: "app/routes/index.tsx",
      lineNumber: 37,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(FeaturedProjects, { projects: projects2 }, void 0, !1, {
      fileName: "app/routes/index.tsx",
      lineNumber: 38,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(LatestPosts, { posts: latestPosts2 }, void 0, !1, {
      fileName: "app/routes/index.tsx",
      lineNumber: 39,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/index.tsx",
    lineNumber: 36,
    columnNumber: 5
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { version: "92a89a81", entry: { module: "/build/entry.client-2HYSQHHG.js", imports: ["/build/_shared/chunk-AKWN7DGW.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-TUXYTHRY.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/about": { id: "routes/about", parentId: "root", path: "about", index: void 0, caseSensitive: void 0, module: "/build/routes/about-EFWIFHIO.js", imports: ["/build/_shared/chunk-G22BKBVR.js", "/build/_shared/chunk-J6NQFR2J.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/blog/$slug": { id: "routes/blog/$slug", parentId: "root", path: "blog/:slug", index: void 0, caseSensitive: void 0, module: "/build/routes/blog/$slug-TFFXDOKB.js", imports: ["/build/_shared/chunk-J6NQFR2J.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/blog/index": { id: "routes/blog/index", parentId: "root", path: "blog", index: !0, caseSensitive: void 0, module: "/build/routes/blog/index-3AJN2JVY.js", imports: ["/build/_shared/chunk-G22BKBVR.js", "/build/_shared/chunk-J6NQFR2J.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/index": { id: "routes/index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/index-4OHBZG5D.js", imports: ["/build/_shared/chunk-G22BKBVR.js", "/build/_shared/chunk-J6NQFR2J.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, url: "/build/manifest-92A89A81.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public/build", future = { v2_meta: !1 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/blog/$slug": {
    id: "routes/blog/$slug",
    parentId: "root",
    path: "blog/:slug",
    index: void 0,
    caseSensitive: void 0,
    module: slug_exports
  },
  "routes/blog/index": {
    id: "routes/blog/index",
    parentId: "root",
    path: "blog",
    index: !0,
    caseSensitive: void 0,
    module: blog_exports
  },
  "routes/about": {
    id: "routes/about",
    parentId: "root",
    path: "about",
    index: void 0,
    caseSensitive: void 0,
    module: about_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: routes_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  future,
  publicPath,
  routes
});
//# sourceMappingURL=index.js.map
