"use client";

import { useEffect } from "react";

export default function Identity({children}) {
  useEffect(() => {
    if (window.location.href.includes("_token=")) {
      window.location.replace("/admin/" + window.location.hash);
    }
  }, []);

  return <>{children}</>;
}
