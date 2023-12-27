"use client";

import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

export function ChakraUiProvider({ children }) {

  const breakpoints = {
    base: "0px",
    xsm: "320px",
    sm: "576px",
    md: "768px",
    lg: "960px",
    xlg: "1200px",
    "2xlg": "1536px",
  };

  const theme = extendTheme({ breakpoints });

  return (
    <CacheProvider>
      <ChakraProvider theme={theme}>{children}</ChakraProvider>
    </CacheProvider>
  );
}