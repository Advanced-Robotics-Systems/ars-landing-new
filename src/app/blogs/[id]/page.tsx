import { BlogReadButton } from "@/components";
import { blogsResourcesData } from "@/data";

export default async function ReadBlog({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  const blogData = blogsResourcesData.find((blog) => blog.id === id);
  return (
    <>
      <BlogReadButton />
      {blogData ? (
        <main
          className="h-screen padding-responsive"
          style={{
            background:
              "linear-gradient(to bottom, rgba(34, 169, 225, 0.5), rgba(215, 239, 249, 1)), linear-gradient(to right top, rgba(5, 144, 200, 0.02), rgba(13, 36, 38, 1))",
          }}
        >
          <iframe
            src={blogData.file}
            width="100%"
            height="100%"
            className="border-none"
            title={blogData.title}
          />
        </main>
      ) : (
        <main>
          <div className="flex flex-col h-screen items-center justify-center bg-midnight-blue text-ars-primary padding-responsive">
            <h1 className="text-4xl font-semibold">No Blog Found</h1>
            <p className="text-xl font-medium text-ars-cyan">Wrong blog link</p>
          </div>
        </main>
      )}
    </>
  );
}
