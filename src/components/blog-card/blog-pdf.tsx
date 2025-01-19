"use client";

import "@/pdfConfig";

import { useState } from "react";
import { Document, Page } from "react-pdf";

const BlogPdf = ({ file }: { file: string }) => {
  const [numPages, setNumPages] = useState<number>();

  function onDocumentLoaded({ numPages }: { numPages: number }) {
    setNumPages(numPages);
  }

  return (
    <div className="w-full h-screen max-w-4xl mx-auto flex flex-col items-center border border-ars-gray overflow-y-scroll">
      <Document file={file} onLoadSuccess={onDocumentLoaded}>
        {Array.from(new Array(numPages), (_, index) => (
          <div key={`page_${index + 1}`} className="flex justify-center mb-4">
            <Page pageNumber={index + 1} width={750} />
          </div>
        ))}
      </Document>
    </div>
  );
};

export default BlogPdf;
