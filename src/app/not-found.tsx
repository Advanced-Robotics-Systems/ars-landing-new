"use client";

import { Header } from "@/sections";
import { Link, CircularProgress } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function NotFound() {
  const [seconds, setSeconds] = useState(10);
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
      setSeconds((prev) => Math.max(prev - 1, 0));

      return () => clearInterval(interval);
    }, 1000);
  }, []);

  useEffect(() => {
    if (seconds === 0) {
      handleClick();
    }
  }, [seconds]);

  return (
    <>
      <Header />
      <main className="flex flex-col gap-y-4 h-screen items-center justify-center bg-midnight-blue padding-responsive">
        <h1 className="text-red-400 text-center text-5xl font-medium leading-normal">
          Page Unavailable
        </h1>
        <p className="text-white text-xl text-center font-semibold leading-normal">
          We are currently updating this page to serve you better.
          <br />
          Please come back soon!
          <br />
          Thank you for being patient.
          <br />
          <Link
            onPress={handleClick}
            underline="hover"
            className="relative text-ars-cyan hover:cursor-pointer"
          >
            Go back
          </Link>{" "}
        </p>
        <div className="flex gap-x-3 items-center">
          <p className="text-white text-xl font-semibold">
            Redirecting you in...{" "}
          </p>
          <CircularProgress
            aria-label="Countdown"
            formatOptions={{ style: "decimal" }}
            size="lg"
            minValue={0}
            maxValue={10}
            value={seconds}
            showValueLabel
            classNames={{
              value: "text-white text-xl font-semibold",
              indicator: "stroke-ars-cyan",
              track: "stroke-ars-cyan-60",
            }}
          />
        </div>
      </main>
    </>
  );
}
