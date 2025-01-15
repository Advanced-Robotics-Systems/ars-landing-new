"use client";

import { blogsResourcesData } from "@/data";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function ReadBlog() {
  const pathName = usePathname();
  const id = pathName.split("/")[2];
  const blogData = blogsResourcesData.find((blog) => blog.id === id);
  return (
    blogData && (
      <main className="padding-responsive h-screen">
        <iframe
          src={blogData.file}
          width="100%"
          height="150vh"
          className="border-none"
          title={blogData.title}
        />
        <Button
          as={Link}
          href={`/download/${blogData.fileName}`}
          size="lg"
          radius="full"
        >
          Download File
        </Button>
      </main>
    )
  );
}
