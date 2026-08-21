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

- `bun run lint` - Run Oxlint and Stylelint
- `bun run lint:js` - Run Oxlint only
- `bun run lint:js:fix` - Run Oxlint and auto-fix issues
- `bun run lint:css` - Run Stylelint only
- `bun run format` - Format code with Oxfmt
- `bun run format:check` - Check code formatting
- `bun run type-check` - Run TypeScript type checking
- `bun run security` - Run security audit

## 🎨 Code Quality & Formatting

This project uses several tools to maintain code quality:

- **Oxlint** - Fast JavaScript/TypeScript linting (Rust-based), with native React, Next.js, TypeScript, and Unicorn rules
- **Stylelint** - CSS linting
- **Oxfmt** - Code formatting (Rust-based, Prettier-compatible)
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
