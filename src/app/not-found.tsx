"use client";

import { Header } from "@/sections";
import { Link } from "@nextui-org/react";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();

  const handleClick = () => {
    if (document.referrer) {
      window.history.replaceState(null, "", document.referrer);
      router.back();
    } else {
      window.history.replaceState(null, "", "/");
      router.push("/");
    }
  };

  return (
    <>
      <Header />
      <main className="flex flex-col gap-y-4 h-screen items-center justify-center bg-midnight-blue padding-responsive">
        <h1 className="text-white text-center text-5xl font-medium leading-normal">
          Oops! Looks like you&apos;ve come to the wrong place.
          <br />
          <Link
            onPress={handleClick}
            underline="hover"
            className="relative text-ars-cyan hover:cursor-pointer"
          >
            Go back
          </Link>{" "}
          to continue browsing
        </h1>
      </main>
    </>
  );
}
