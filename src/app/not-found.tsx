"use client";

import { Header } from "@/sections";
import { Link, CircularProgress } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function NotFound() {
  const [seconds, setSeconds] = useState(5);
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

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prev) => {
        if (prev > 0) {
          return prev - 1;
        } else {
          handleClick();
          clearInterval(interval);
          return prev;
        }
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

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
        <p className="text-white text-xl font-semibold">
          Redirecting you in...{" "}
        </p>
        <CircularProgress
          aria-label="Countdown"
          formatOptions={{ style: "decimal" }}
          size="lg"
          minValue={0}
          maxValue={5}
          value={seconds}
          showValueLabel
          classNames={{
            value: "text-white text-xl font-semibold",
            indicator: "stroke-ars-cyan",
            track: "stroke-ars-cyan-60",
          }}
        />
      </main>
    </>
  );
}
