# Personal website

Portfolio website. Built with Next.js 16, React 19, and TypeScript.

## 🚀 Getting Started

### Prerequisites

- **Bun** >= 1 (recommended) and **Node.js** >= 24

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/mateoolarte/website.git
   cd website
   ```

2. **Install dependencies**

   ```bash
   bun install
   ```

### Development

Start the development server:

```bash
bun run dev
```

The application will be available at [http://localhost:3000](http://localhost:3000).

## 📦 Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **UI Library**: [React 19](https://react.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **UI Components**: [Radix UI](https://www.radix-ui.com/) (accessible primitives)
- **Icons**: [Phosphor Icons](https://phosphoricons.com/)
- **Internationalization**: [next-intl](https://next-intl.dev/)
- **Analytics**: [PostHog](https://posthog.com/)
- **Styling**: CSS Modules
- **Font**: Reddit Sans (Google Fonts)

## 🛠️ Available Scripts

### Development & Build

- `bun run dev` - Start development server
- `bun run build` - Build for production
- `bun run start` - Start production server
- `bun run analyze` - Analyze bundle size

### Code Quality

- `bun run lint` - Run ESLint and Stylelint
- `bun run lint:js` - Run ESLint only
- `bun run lint:css` - Run Stylelint only
- `bun run format` - Format code with Prettier
- `bun run format:check` - Check code formatting
- `bun run type-check` - Run TypeScript type checking
- `bun run security` - Run security audit

### Testing

- `bun run test` - Run unit tests (Vitest)
- `bun run test:watch` - Run unit tests in watch mode
- `bun run test:e2e` - Run end-to-end tests (Playwright)
- `bun run test:e2e:dev` - Run E2E tests in UI mode
- `bun run test:e2e:report` - View Playwright test report

## 🧪 Testing

### Unit Tests

Unit tests are written with [Vitest](https://vitest.dev/) and [React Testing Library](https://testing-library.com/react):

```bash
# Run tests once
bun run test

# Run tests in watch mode
bun run test:watch
```

### E2E Tests

End-to-end tests use [Playwright](https://playwright.dev/) and run against Chrome, Firefox, and Safari:

```bash
# Run E2E tests
bun run test:e2e

# Run E2E tests with UI
bun run test:e2e:dev

# View test report
bun run test:e2e:report
```

## 🎨 Code Quality & Formatting

This project uses several tools to maintain code quality:

- **ESLint** - JavaScript/TypeScript linting
  - **eslint-plugin-sonarjs** - SonarJS rules for bug detection and code quality
  - **eslint-plugin-unicorn** - Additional opinionated ESLint rules
- **Stylelint** - CSS linting
- **Prettier** - Code formatting
- **TypeScript** - Type checking
- **Husky** - Git hooks
- **lint-staged** - Run linters on staged files
- **commitlint** - Conventional commit messages

All checks run automatically on commit via git hooks.

## 🔒 Security

Run security audits on dependencies:

```bash
bun run security
```

## 📊 Bundle Analysis

Analyze the production bundle size:

```bash
bun run analyze
```

This opens an interactive visualization of the bundle composition.

## 🚢 Deployment

1. Build the production bundle:

   ```bash
   bun run build
   ```

2. Start the production server:

   ```bash
   bun run start
   ```

The project is optimized for deployment on [Vercel](https://vercel.com), which is the recommended platform for Next.js applications.
