"use client";

import { AppProgressBar } from "next-nprogress-bar";

import { FC } from "react";

interface ProgressBarProps {}

const ProgressBar: FC<ProgressBarProps> = ({}) => {
  return (
    <AppProgressBar
      height="4px"
      color="var(--color-primary-600)"
      options={{ showSpinner: false }}
      shallowRouting
    />
  );
};

export default ProgressBar;
