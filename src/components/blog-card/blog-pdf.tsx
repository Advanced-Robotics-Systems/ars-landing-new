"use client";

import { pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

import { useEffect, useReducer } from "react";
import { Document, Page } from "react-pdf";

type TState = {
  numPages: number;
  containerWidth: number;
  scale: number;
};

type TAction =
  | { type: "SET_NUM_PAGES"; numPages: number }
  | { type: "SET_CONTAINER_WIDTH"; containerWidth: number }
  | { type: "SET_SCALE"; scale: number };

function reducer(state: TState, action: TAction) {
  switch (action.type) {
    case "SET_NUM_PAGES":
      return { ...state, numPages: action.numPages };
    case "SET_CONTAINER_WIDTH":
      return { ...state, containerWidth: action.containerWidth };
    case "SET_SCALE":
      return { ...state, scale: action.scale };
    default:
      return state;
  }
}

const BlogPdf = ({ file }: { file: string }) => {
  const [state, dispatch] = useReducer(reducer, {
    numPages: 0,
    containerWidth: 0,
    scale: 0,
  });

  function onDocumentLoaded({ numPages }: { numPages: number }) {
    dispatch({ type: "SET_NUM_PAGES", numPages });
  }

  useEffect(() => {
    const updateWidth = () => {
      const width = Math.min(800, window.innerWidth - 20);
      dispatch({ type: "SET_CONTAINER_WIDTH", containerWidth: width });

      if (window.innerWidth < 350) {
        dispatch({ type: "SET_SCALE", scale: width / 350 });
      } else if (window.innerWidth < 390) {
        dispatch({ type: "SET_SCALE", scale: width / 400 });
      } else if (window.innerWidth < 450) {
        dispatch({ type: "SET_SCALE", scale: width / 500 });
      } else if (window.innerWidth < 500) {
        dispatch({ type: "SET_SCALE", scale: width / 600 });
      } else if (window.innerWidth < 580) {
        dispatch({ type: "SET_SCALE", scale: width / 700 });
      } else if (window.innerWidth < 720) {
        dispatch({ type: "SET_SCALE", scale: width / 800 });
      } else {
        dispatch({ type: "SET_SCALE", scale: width / 900 });
      }
    };

    updateWidth();
    window.addEventListener("resize", updateWidth);

    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  return (
    <section className="w-full h-full max-w-4xl mx-auto flex flex-col items-center overflow-auto no-scrollbar">
      <Document file={file} onLoadSuccess={onDocumentLoaded}>
        {Array.from({ length: state.numPages }, (_, index) => (
          <div
            key={`page_${index + 1}`}
            className="flex justify-center mb-3 max-w-full border-4 border-ars-gray"
          >
            <Page
              pageNumber={index + 1}
              width={state.containerWidth}
              scale={state.scale}
              renderTextLayer={false}
              renderAnnotationLayer={false}
            />
          </div>
        ))}
      </Document>
    </section>
  );
};

export default BlogPdf;
