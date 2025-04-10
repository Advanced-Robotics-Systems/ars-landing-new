"use client";

import { ICONS } from "@/utils/icons";
import { Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";

const BlogReadButton = () => {
  const router = useRouter();
  return (
    <Button
      size="sm"
      radius="full"
      startContent={ICONS.angle_left}
      className="bg-transparent hover:bg-ars-gray/60 text-midnight-blue hover:text-midnight-blue/60"
      onPress={() => router.back()}
    >
      Back
    </Button>
  );
};

export default BlogReadButton;
