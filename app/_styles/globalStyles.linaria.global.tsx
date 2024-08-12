import { css } from "@linaria/core";

export const globalStyles = css`
  :global() {
    @import "./reset.css";
    :root {
      --color-primary-50: #ebf3ff;
      --color-primary-100: #d6e7ff;
      --color-primary-200: #a8cbff;
      --color-primary-300: #80b3ff;
      --color-primary-400: #579aff;
      --color-primary-500: #297eff;
      --color-primary-600: #0066ff;
      --color-primary-700: #0050c7;
      --color-primary-800: #00378a;
      --color-primary-900: #00378a;
      --color-primary-950: #001433;
      --color-primary-50: #ebf3ff;

      --color-gray-white: #fff;
      --color-gray-50: #f8fafc;
      --color-gray-100: #f3f4f6;
      --color-gray-200: #e2e8f0;
      --color-gray-300: #cbd5e1;
      --color-gray-400: #94a3b8;
      --color-gray-500: #64748b;
      --color-gray-600: #475569;
      --color-gray-700: #334155;
      --color-gray-800: #1e293b;
      --color-gray-900: #0f172a;
      --color-gray-950: #020617;
      --color-gray-black: #000;

      --color-red-100: #fee2e2;
      --color-red-400: #f87171;

      --color-green-100: #dcfce7;
      --color-green-400: #4ade80;
    }

    *,
    *::before,
    *::after {
      margin: 0;
      padding: 0;
    }

    html {
      font-size: 62.5%;
    }

    body {
      font-family: var(--font-poppins);
      font-size: 1.6rem;
      line-height: 1.5;
      font-weight: 400;
      line-height: 1.6;
      color: var(--color-neutral-800);
      min-height: 100vh;
    }

    h1,
    h2,
    h3,
    h4,
    h5 {
      font-weight: 600;
      line-height: 1.25;
    }

    a {
      text-decoration: none;
      color: inherit;
    }
  }
`;
