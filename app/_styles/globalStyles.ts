import { createGlobalStyle } from "styled-components";
import { playfairDisplay, poppins } from "./fonts";
import { globalCss } from "@stitches/react";

export const GlobalStyles = createGlobalStyle`
  /* css reset */
  @import './reset.css';

  :root {
    --color-primary-50: #EBF3FF;
    --color-primary-100: #D6E7FF;
    --color-primary-200: #A8CBFF;
    --color-primary-300: #80B3FF;
    --color-primary-400: #579AFF;
    --color-primary-500: #297EFF;
    --color-primary-600: #0066FF;
    --color-primary-700: #0050C7;
    --color-primary-800: #00378A;
    --color-primary-900: #00378A;
    --color-primary-950: #001433;
    --color-primary-50: #EBF3FF;

    --color-neutral-white: #FFF;
    --color-neutral-50: #F8FAFC;
    --color-neutral-100: #F3F4F6;
    --color-neutral-200: #E2E8F0;
    --color-neutral-300: #CBD5E1;
    --color-neutral-400: #94A3B8;
    --color-neutral-500: #64748B;
    --color-neutral-600: #475569;
    --color-neutral-700: #334155;
    --color-neutral-800: #1E293B;
    --color-neutral-900: #0F172A;
    --color-neutral-950: #020617;
    --color-neutral-black: #000;

    --color-red-100: #FEE2E2;
    --color-red-400: #F87171;

    --color-green-100: #DCFCE7;
    --color-green-400: #4ADE80;

    --font-poppins: ${poppins.style.fontFamily};
    --font-playfair-display: ${playfairDisplay.style.fontFamily};
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-family: var(--font-poppins);
    font-size: 1.6rem;
    line-height: 1.5;
    font-weight: 400;
    min-height: 100vh;
  }
`;
