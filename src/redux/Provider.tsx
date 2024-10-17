"use client";

import React, { ReactNode, useEffect } from "react";
import { store } from "./store";
import { Provider } from "react-redux";
import { usePathname, useRouter } from "next/navigation";
import ValidateToken from "@/middleware/validate-token";

function ReduxProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();

  const getValidateStatus = async () => {
    const validate = await ValidateToken();
    if (validate == false) {
      router.push("/login");
    }
  };

  useEffect(() => {
    getValidateStatus();
  }, [pathname]);

  return <Provider store={store}> {children}</Provider>;
}

export default ReduxProvider;
