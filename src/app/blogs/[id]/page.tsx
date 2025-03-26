/* eslint-disable @typescript-eslint/no-explicit-any */
import { BlogDetails, Header } from "@/sections";
import { client } from "@/utils/contentful/contentful";

export async function generateStaticParams() {
  const result = await client.getEntries({
    content_type: "blog",
  });

  return result.items.map((blog) => ({
    id: blog.fields.slug,
  }));
}

const fetchBlogBySlug = async (slug: string) => {
  const result = await client.getEntries({
    content_type: "blog",
    "fields.slug": slug,
  });

  if (!result.items.length) {
    throw new Error(`No blog found for slug: ${slug}`);
  }

  return result.items[0];
};

const fetchBlogs = async () => {
  const result = await client.getEntries({
    content_type: "blog", // Replace with your actual content type ID
  });
  return result.items || []; // Ensure an array is returned
};

const ReadBlog = async ({ params }: { params: Promise<{ id: string }> }) => {
  const id = (await params).id;

  // fetch blog by slug
  const blog = await fetchBlogBySlug(id);

  // fetch all blogs
  const Blogs = await fetchBlogs();

  return (
    <>
      <Header />
      <main
        className="bg-fixed min-h-screen pt-32"
        style={{
          background: `
        linear-gradient(-30deg, rgba(5, 144, 200, 0.02) 51.31%, #0D242673 114.45%), 
        linear-gradient(-30deg, #D7EFF9 51.31%, #0590C8B3 114.45%)`,
        }}
      >
        <div className=" h-full">
          <BlogDetails blog={blog} blogs={Blogs} />
        </div>
      </main>
    </>
  );
};

export default ReadBlog;
