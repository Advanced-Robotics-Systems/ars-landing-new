"use client";
import { BlogReadButton, ResourceCard } from "@/components";
import { footerSocials } from "@/data";
import { Blog } from "@/utils/dataTypes/types";

const BlogDetails = ({ blog, blogs }: { blog: Blog; blogs: Blog[] }) => {
  // const [resources, setResources] = useState(blogs);
  // console.log("blogs:", blogs[0].fields.content);
  return (
    <section className="padding-responsive pt-20">
      <div className="flex justify-between">
        {/* blog 1  */}
        {/* <div className="w-3/4">
          <Image
            className="w-full h-[500px] rounded-3xl"
            src={img1}
            alt="featured image"
          />
          <h2 className="text-[60px] font-semibold text-midnight-blue mt-10 ">
            The Future of Logistics is Autonomous
          </h2>
          <p className="text-[18px] mt-16 text-[#002838">
            As demand for quicker, safer, and cost-effective solutions grows,
            automation steps in to reshape the way we work. With AMRs leading
            the way, the future of logistics is here!
          </p>
          <h2 className="text-5xl font-semibold text-cyan-blue mt-10">
            Logistics is Evolving Faster than ever
          </h2>
          <Image
            className="w-full h-[500px] rounded-3xl mt-10"
            src={img2}
            alt="featured image"
          />
          <h1 className="text-[60px] font-semibold text-cyan-blue mt-10 text-center">
            Smart, Fast, Reliable
          </h1>
          <p className="text-[18px] mt-10 text-[#002838]">
            AMRs are designed to optimize workflows, improve efficiency, and
            enhance reliability. Equipped with advanced sensors and AI, they are
            changing the game for logistics.
          </p>
          <div className="h-[480px] flex flex-col justify-end mt-10">
            <div className="relative">
              <svg
                viewBox="0 0 614 300"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-[440px]"
              >
                <path
                  d="M613.5 307.279C522 307.279 476.275 307.279 307 307.279C137.725 307.279 80.5 307.279 0.5 307.279C0.5 138.004 137.725 0.779297 307 0.779297C476.275 0.779297 613.5 138.004 613.5 307.279Z"
                  fill="#22A9E1"
                  fill-opacity="0.55"
                />
              </svg>
              <Image
                className="w-full h-[650px] absolute bottom-0"
                src={img3}
                alt="featured image"
              />
            </div>
          </div>
          <h2 className="text-5xl font-semibold text-cyan-blue mt-10">
            How AMRs Transform Logistics
          </h2>
          <div className="mt-10 flex justify-between gap-10">
            <div className="flex flex-col items-center gap-5">
              <Image className=" " src={svg1} alt="SVG" />
              <p className="text-deep-blue text-lg font-bold">
                Faster Operations
              </p>
            </div>
            <div className="flex flex-col items-center gap-5">
              <Image className=" " src={svg2} alt="SVG" />
              <p className="text-deep-blue text-lg font-bold">
                Greater Cost Saving
              </p>
            </div>
            <div className="flex flex-col items-center gap-5">
              <Image className=" " src={svg3} alt="SVG" />
              <p className="text-deep-blue text-lg font-bold">
                Safer Work Environment
              </p>
            </div>
          </div>
          <p className="text-[18px] mt-10 text-[#002838]">
            From reducing operational costs to minimizing workplace risks, AMRs
            offer tangible benefits for businesses aiming to optimize their
            logistics.
          </p>
          <div className="h-[450px] flex flex-col justify-end mt-10 px-5">
            <div className="relative">
              <svg
                viewBox="0 0 662 90"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full"
              >
                <path
                  d="M0 89.7996V0.799561H662L560.611 89.7996H0Z"
                  fill="#22A9E1"
                  fill-opacity="0.55"
                />
              </svg>
              <Image
                className="w-full h-[450px] absolute bottom-0"
                src={img4}
                alt="featured image"
              />
            </div>
          </div>
          <p className="text-[#002447] text-lg font-bold underline italic mt-4">
            A-Series
          </p>

          <h3 className="text-4xl font-semibold text-cyan-blue mt-10">
            Ready For Autonomous Future?
          </h3>
          <p className="text-[18px] mt-10 text-[#002838]">
            How do you see automation transforming logistics in the next 10
            years?
          </p>
        </div> */}

        <div className="w-1/4">
          <div className="flex flex-col items-end gap-10 sticky top-20">
            {blogs && blogs.length > 0 && (
              <div className="flex flex-col items-end gap-10 w-full">
                {blogs?.map((resource, index) => (
                  <div className="max-h-96 " key={index}>
                    <ResourceCard
                      title={resource.fields.title}
                      img={resource.fields.featuredImage.fields.file.url}
                      category={resource.fields.category}
                      time={resource.fields.readTime}
                      linkTo={`/blogs/${resource.fields.slug}`}
                    />
                  </div>
                ))}
              </div>
            )}
            <div className="w-full max-w-80 flex flex-col items-center gap-7">
              <h5>Share this article:</h5>
              <div className="flex gap-10 ">
                {footerSocials.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noreferrer"
                    className="text-3xl text-cyan-blue"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <BlogReadButton />
    </section>
  );
};

export default BlogDetails;

{
  /*<p>{(blog.fields as any).content.content[0]?.content[0].value}</p>
          <h1 className="text-cyan-blue text-5xl font-medium">
            {(blog.fields as any).content.content[1]?.content[0].value}
          </h1>
          <Image
            className="w-full h-full rounded-3xl"
            src={(blog.fields as any).content.content[2]?.content[1].data.uri}
            alt={(blog.fields.featuredImage as Asset).fields.title as string}
            width={"100%"}
            height={500}
          />
          <h1 className="text-6xl text-cyan-blue font-semibold text-center">
            {(blog.fields as any).content.content[3]?.content[0].value}
          </h1>
          <p>{(blog.fields as any).content.content[4]?.content[0].value}</p>
          <Image
            className="w-full h-full rounded-3xl"
            src={(blog.fields as any).content.content[5]?.content[1].data.uri}
            alt={(blog.fields.featuredImage as Asset).fields.title as string}
            width={"100%"}
            height={500}
          />
          <h1 className="text-6xl text-cyan-blue font-semibold">
            {(blog.fields as any).content.content[6]?.content[0].value}
          </h1>
          <p>{(blog.fields as any).content.content[7]?.content[0].value}</p>
          <Image
            className="w-full h-full rounded-3xl"
            src={(blog.fields as any).content.content[5]?.content[1].data.uri}
            alt={(blog.fields.featuredImage as Asset).fields.title as string}
            width={"100%"}
            height={500}
          />
          <h1 className="text-2x font-semibold underline italic">
            {(blog.fields as any).content.content[8]?.content[0].value}
          </h1>
          <h1 className="text-6xl text-cyan-blue font-semibold">
            {(blog.fields as any).content.content[9]?.content[0].value}
          </h1>
          <p>{(blog.fields as any).content.content[10]?.content[0].value}</p>
          <p>{(blog.fields as any).content.content[11]?.content[0].value}</p> */
}
{
  /* {blog.fields.content.content.map((content, index) => {
            if ((content as any).content[1]?.nodeType === "hyperlink") {
              return (
                <Image
                  key={index}
                  className="w-full h-full rounded-3xl"
                  src={(content as any).content[1].data.uri}
                  alt={
                    (blog.fields.featuredImage as Asset).fields.title as string
                  }
                  width={"100%"}
                  height={500}
                />
              );
            } else if ((content as any).nodeType === "heading-4") {
              return (
                <div key={index}>
                  <h1 className="text-6xl text-cyan-blue font-semibold text-center">
                    {(content as any).content[0].value}
                  </h1>
                </div>
              );
            } else if ((content as any).nodeType === "heading-5") {
              return (
                <div key={index}>
                  <h1 className="text-5xl text-cyan-blue font-semibold">
                    {(content as any).content[0].value}
                  </h1>
                </div>
              );
            } else if ((content as any).nodeType === "heading-6") {
              return (
                <div key={index}>
                  <h1 className="text-4xl text-cyan-blue font-semibold">
                    {(content as any).content[0].value}
                  </h1>
                </div>
              );
            } else {
              return (
                <div key={index}>
                  {/* <h1 className="">{(content as any).content[0].value}</h1> 
                  <p>
                    {(content as any).content.map((text, index) => {
                      if (text.marks[0]?.type === "bold") {
                        return (
                          <span key={index} className="text-xl font-medium">
                            {text.value}
                          </span>
                        );
                      } else {
                        return (
                          <span key={index} className="">
                            {text.value}
                          </span>
                        );
                      }
                    })}
                  </p>
                </div>
              );
            }
          })} */
}
