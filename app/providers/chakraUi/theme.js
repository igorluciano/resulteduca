"use client";

import { extendTheme } from "@chakra-ui/react";

export const pageMaxWidth = "1200px";
export const pageWithBreather = "90%";
export const introMaxWidth = "550px";
export const contentMinWidth = "300px";
export const bannerMaxWidth = "500px";

export const theme = extendTheme({
  colors: {
    transparent: "transparent",
    black: "#000",
    white: "#fff",
    assistant:"#FFF3EA66",
    primary: {
      'default': "#F1592A",
      'emphasis': "#ef4612",
      'selected': "#f25829",
    }
  },
  breakpoints: {
    base: "0px",
    xsm: "320px",
    sm: "576px",
    md: "768px",
    lg: "960px",
    xlg: "1200px",
    "2xlg": "1536px",
  },
  fontSizes: {
    "small": "0.875rem",
    "text0": "1rem",
    "text1": "1.25rem",
    "text2": "1.375rem",
    "text3": "1.5rem",
    "text4": "1.625rem",
  },
  fontWeights: {
    hairline: 100,
    thin: 200,
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900,
  },
  lineHeights: {
    normal: "normal",
    shorter: 1.25,
    short: 1.375,
    base: 1.5,
  },
});