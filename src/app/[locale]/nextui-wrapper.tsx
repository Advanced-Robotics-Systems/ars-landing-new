"use client";

import { NextUIProvider } from "@nextui-org/react";
import { useRouter } from "next/navigation";

declare module "@react-types/shared" {
  interface RouterConfig {
    routerOptions: NonNullable<Parameters<ReturnType<typeof useRouter>["push"]>[1]>;
  }
}

export default function NextUIWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const useHref = (href: string) => process.env.BASE_PATH + href;

  return (
    <NextUIProvider navigate={router.push} useHref={useHref}>
      {children}
    </NextUIProvider>
  );
}
