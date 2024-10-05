"use client";

import React, { ReactNode, useEffect } from "react";
import { store } from "./store";
import { Provider } from "react-redux";
import { usePathname } from "next/navigation";
import ValidateToken from "@/middleware/validate-token";

function ReduxProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    ValidateToken(pathname);
  }, []);

  return <Provider store={store}> {children}</Provider>;
}

export default ReduxProvider;
