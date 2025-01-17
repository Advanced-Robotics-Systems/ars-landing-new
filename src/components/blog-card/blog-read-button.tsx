"use client";

import { ICONS } from "@/utils/icons";
import { Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";

const BlogReadButton = () => {
  const router = useRouter();
  return (
    <Button
      isIconOnly
      radius="full"
      className="fixed top-5 left-5 bg-ars-gray hover:bg-ars-gray/60 text-white"
      onPress={() => router.back()}
    >
      {ICONS.arrow_left}
    </Button>
  );
};

export default BlogReadButton;
