import { Header } from "@/sections";
import img1 from "@/../public/blogs/blog-1/img-1.jpeg";
import img2 from "@/../public/blogs/blog-1/img-2.png";
import img3 from "@/../public/blogs/blog-1/img-3.png";
import img4 from "@/../public/blogs/blog-1/img-4.png";
import svg1 from "@/../public/blogs/blog-1/ SVG(2).png";
import svg2 from "@/../public/blogs/blog-1/SVG(1).png";
import svg3 from "@/../public/blogs/blog-1/ SVG.png";
import Image from "next/image";
import { footerSocials } from "@/data";
import { blogsResourcesData } from "@/data";
import { BlogReadButton, ResourceCard } from "@/components";

const TheFutureOfLogisticsIsAutonomous = () => {
  const blogs = blogsResourcesData;

  return (
    <>
      <Header />
      <main
        className="bg-fixed min-h-screen pt-5 md:pt-8 lg:pt-10"
        style={{
          background: `
      linear-gradient(-30deg, rgba(5, 144, 200, 0.02) 51.31%, #0D242673 114.45%), 
      linear-gradient(-30deg, #D7EFF9 51.31%, #0590C8B3 114.45%)`,
        }}
      >
        <div className=" h-full">
          <section className="padding-responsive pt-20">
            <BlogReadButton />
            <div className="flex lg:gap-8 xl:gap-10 justify-between pt-5 md:pt-8 lg:pt-10">
              {/* blog 1  */}
              <div className="w-full lg:w-3/4">
                <Image
                  className="w-full h-60 xs:h-64 sm:h-72 md:h-[400px] lg:h-[420px] xl:h-[460px] 2xl:h-[500px] rounded-3xl object-cover"
                  src={img1}
                  alt="featured image"
                />
                <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl font-semibold text-midnight-blue mt-4 md:mt-6 lg:mt-8 2xl:mt-10 ">
                  The Future of Logistics is Autonomous
                </h1>
                <p className="text-[14px] md:text-[16px] lg:text-[18px] mt-6 md:mt-9 lg:mt-12 xl:mt-14 2xl:mt-16 text-[#002838">
                  As demand for quicker, safer, and cost-effective solutions
                  grows, automation steps in to reshape the way we work. With
                  AMRs leading the way, the future of logistics is here!
                </p>
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold text-cyan-blue mt-4 md:mt-6 lg:mt-8 xl:mt-10">
                  Logistics is Evolving Faster than ever
                </h2>
                <Image
                  className="w-full h-60 xs:h-64 sm:h-[350px] md:h-[420px] lg:h-[460px] xl:h-[500px] 2xl:h-[540px] rounded-3xl mt-4 md:mt-6 lg:mt-8 xl:mt-10"
                  src={img2}
                  alt="featured image"
                />
                <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl font-semibold text-cyan-blue mt-10 text-center">
                  Smart, Fast, Reliable
                </h1>
                <p className="text-[14px] md:text-[16px] lg:text-[18px] mt-4 md:mt-6 lg:mt-8 xl:mt-10 text-[#002838]">
                  AMRs are designed to optimize workflows, improve efficiency,
                  and enhance reliability. Equipped with advanced sensors and
                  AI, they are changing the game for logistics.
                </p>
                <div className="h-48 xxs:h-56 xs:h-72 sm:h-80 md:h-[350px] lg:h-[390px] xl:h-[440px] 2xl:h-[480px] flex flex-col justify-end mt-10">
                  <div className="relative">
                    <svg
                      viewBox="0 0 614 300"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-full h-44 xxs:h-52 xs:h-64 sm:h-72 md:h-80 lg:h-[360px] xl:h-[400px] 2xl:h-[440px]"
                    >
                      <path
                        d="M613.5 307.279C522 307.279 476.275 307.279 307 307.279C137.725 307.279 80.5 307.279 0.5 307.279C0.5 138.004 137.725 0.779297 307 0.779297C476.275 0.779297 613.5 138.004 613.5 307.279Z"
                        fill="#22A9E1"
                        fill-opacity="0.55"
                      />
                    </svg>
                    <Image
                      className="w-full h-72 xxs:h-80 xs:h-[400px] sm:h-[450px] md:h-[500px] lg:h-[550px] xl:h-[600px] 2xl:h-[650px] absolute bottom-0"
                      src={img3}
                      alt="featured image"
                    />
                  </div>
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold text-cyan-blue mt-4 md:mt-6 lg:mt-8 xl:mt-10">
                  How AMRs Transform Logistics
                </h2>
                <div className="mt-4 md:mt-6 lg:mt-8 xl:mt-10 flex justify-between gap-5 md:gap-10">
                  <div className="flex flex-col items-center gap-3 md:gap-5 max-w-32 md:w-36 lg:w-40">
                    <Image className=" " src={svg1} alt="SVG" />
                    <p className="text-deep-blue text-[14px] md:text-[16px] lg:text-[18px] font-bold text-center">
                      Faster Operations
                    </p>
                  </div>
                  <div className="flex flex-col items-center gap-3 md:gap-5 max-w-32 md:w-36 lg:w-40">
                    <Image className=" " src={svg2} alt="SVG" />
                    <p className="text-deep-blue text-[14px] md:text-[16px] lg:text-[18px] font-bold text-center">
                      Greater Cost Saving
                    </p>
                  </div>
                  <div className="flex flex-col items-center gap-3 md:gap-5 max-w-32 md:w-36 lg:w-40">
                    <Image className=" " src={svg3} alt="SVG" />
                    <p className="text-deep-blue text-[14px] md:text-[16px] lg:text-[18px] font-bold text-center">
                      Safer Work Environment
                    </p>
                  </div>
                </div>
                <p className="text-[14px] md:text-[16px] lg:text-[18px] mt-4 md:mt-6 lg:mt-8 xl:mt-10 text-[#002838]">
                  From reducing operational costs to minimizing workplace risks,
                  AMRs offer tangible benefits for businesses aiming to optimize
                  their logistics.
                </p>
                <div className="h-32 xs:h-48 sm:h-60 md:h-72 lg:h-80 xl:h-[370px] 2xl:h-[420px] 3xl:h-[450px] flex flex-col justify-end mt-10 px-5">
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
                      className="w-full h-36 xs:h-52 sm:h-64 md:h-72 lg:h-80 xl:h-[370px] 2xl:h-[420px] 3xl:h-[450px] absolute bottom-0"
                      src={img4}
                      alt="featured image"
                    />
                  </div>
                </div>
                <p className="text-[#002447] text-base md:text-lg font-bold underline italic mt-3 md:mt-4">
                  A-Series
                </p>

                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold text-cyan-blue mt-4 md:mt-6 lg:mt-8 xl:mt-10">
                  Ready For Autonomous Future?
                </h3>
                <p className="text-[14px] md:text-[16px] lg:text-[18px] mt-4 md:mt-6 lg:mt-8 xl:mt-10 text-[#002838]">
                  How do you see automation transforming logistics in the next
                  10 years?
                </p>
              </div>

              <div className="hidden lg:block lg:w-1/4">
                <div className="flex flex-col items-end gap-10 sticky top-20">
                  {blogs && blogs.length > 0 && (
                    <div className="flex flex-col items-end gap-10 w-full">
                      {blogs?.map((resource) => (
                        <div className="max-h-96 " key={resource.id}>
                          <ResourceCard
                            title={resource.title}
                            img={resource.img}
                            category={resource.category}
                            time={resource.time}
                            linkTo={resource.link}
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
          </section>
        </div>
      </main>
    </>
  );
};

export default TheFutureOfLogisticsIsAutonomous;
