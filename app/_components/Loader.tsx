"use client";

import { FC, useEffect } from "react";

interface LoaderProps {}

const Loader: FC<LoaderProps> = ({}) => {
  useEffect(() => {
    async function getLoader() {
      const { hatch } = await import("ldrs");
      hatch.register();
    }
    getLoader();
  }, []);

  return <l-hatch></l-hatch>;
};

export default Loader;
