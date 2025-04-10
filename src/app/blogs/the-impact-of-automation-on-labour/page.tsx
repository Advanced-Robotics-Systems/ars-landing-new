import img1 from "@/../public/blogs/blog-2/img-1.png";
import img2 from "@/../public/blogs/blog-2/img-2.png";
import img3 from "@/../public/blogs/blog-2/img-3.png";
import img4 from "@/../public/blogs/blog-2/img-4.png";
import svg1 from "@/../public/blogs/blog-2/SVG.png";
import svg2 from "@/../public/blogs/blog-2/SVG(1).png";
import svg3 from "@/../public/blogs/blog-2/SVG(2).png";
import Image from "next/image";
import { Header } from "@/sections";
import { blogsResourcesData, footerSocials } from "@/data";
import { BlogReadButton, ResourceCard } from "@/components";
import { Button } from "@nextui-org/react";
import { ICONS } from "@/utils/icons";

const TheImpactAutomationOnLabour = () => {
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
              {/* blog 2 */}
              <div className="w-full lg:w-3/4">
                <Image
                  className="w-full h-60 xs:h-64 sm:h-72 md:h-[400px] lg:h-[420px] xl:h-[460px] 2xl:h-[500px] rounded-3xl object-cover"
                  src={img1}
                  alt="featured image"
                />
                <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl font-semibold text-midnight-blue mt-4 md:mt-6 lg:mt-8 2xl:mt-10 ">
                  The Impact of Automation on Labor
                </h1>
                <p className="text-[14px] md:text-[16px] lg:text-[18px] mt-6 md:mt-9 lg:mt-12 xl:mt-14 2xl:mt-16 text-[#002838">
                  As automation advances, it&apos;s reshaping the workforce
                  landscape. Let&apos;s dive into how these changes affect labor
                  markets globally.
                </p>
                <h1 className=" text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl text-deep-blue mt-4 md:mt-6 lg:mt-8 xl:mt-10">
                  <span className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
                    30%{" "}
                  </span>
                  of all tasks in <span className="font-bold">60%</span> of
                  occupations could be automated with current technology.
                </h1>
                <p className="text-[14px] md:text-[16px] lg:text-[18px] mt-4 md:mt-6 lg:mt-8 xl:mt-10 text-[#002838">
                  Automation is set to transform numerous jobs, altering task
                  compositions across various industries. How prepared are we
                  for this shift?
                </p>
                <h2 className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl text-deep-blue mt-4 md:mt-6 lg:mt-8 xl:mt-10 text-center">
                  By 2030, Upto <br />
                  <span className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl text-ars-cyan font-semibold">
                    800 million
                  </span>
                  <br /> Global Workers Could Be Displaced By <br /> Automation.
                </h2>
                <Image
                  className="w-full h-60 xs:h-64 sm:h-[350px] md:h-[420px] lg:h-[460px] xl:h-[500px] 2xl:h-[540px] rounded-3xl mt-4 md:mt-6 lg:mt-8 xl:mt-10"
                  src={img2}
                  alt="featured image"
                />
                <p className="text-[14px] md:text-[16px] lg:text-[18px] mt-4 md:mt-6 lg:mt-8 xl:mt-10 text-[#002838">
                  Jobs With High Automation Potential Include:
                </p>

                <div className="mt-4 md:mt-6 lg:mt-8 xl:mt-10 flex justify-between gap-5 md:gap-10">
                  <div className="flex flex-col items-center gap-3 md:gap-5 max-w-32 md:w-36 lg:w-40">
                    <Image className=" " src={svg1} alt="SVG" />
                    <p className="text-deep-blue text-[14px] md:text-[16px] lg:text-[18px] font-bold text-center">
                      Picking and Packing
                    </p>
                  </div>
                  <div className="flex flex-col items-center gap-3 md:gap-5 max-w-32 md:w-36 lg:w-40">
                    <Image className=" " src={svg2} alt="SVG" />
                    <p className="text-deep-blue text-[14px] md:text-[16px] lg:text-[18px] font-bold text-center">
                      Inventory Management
                    </p>
                  </div>
                  <div className="flex flex-col items-center gap-3 md:gap-5 max-w-32 md:w-36 lg:w-40">
                    <Image className=" " src={svg3} alt="SVG" />
                    <p className="text-deep-blue text-[14px] md:text-[16px] lg:text-[18px] font-bold text-center">
                      Forklift Operation
                    </p>
                  </div>
                </div>

                <p className="text-[14px] md:text-[16px] lg:text-[18px] mt-4 md:mt-6 lg:mt-8 xl:mt-10 text-[#002838]">
                  In warehouses, <span className="font-bold">repetitive</span>{" "}
                  and
                  <span className="font-bold">physical tasks</span> are the
                  first to be automated, while roles requiring
                  <span className="font-bold"> decision-making</span>,
                  <span className="font-bold"> problem-solving</span> , or
                  <span className="font-bold"> technical skills</span> are less
                  likely to be replaced.
                </p>
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold text-cyan-blue mt-4 md:mt-6 lg:mt-8 xl:mt-10">
                  The Path Forward
                </h2>
                <p className="text-[14px] md:text-[16px] lg:text-[18px] mt-4 md:mt-6 lg:mt-8 xl:mt-10 text-[#002838]">
                  Embracing automation requires:
                </p>
                <div className=" w-full sm:w-10/12 md:w-full xl:w-10/12 padding-responsive space-y-3 md:space-y-5 text-midnight-blue">
                  <div className="flex items-center ">
                    <Button
                      isIconOnly
                      size="sm"
                      radius="full"
                      disableAnimation
                      className="bg-transparent -mr-4 text-xl md:text-2xl"
                    >
                      {ICONS.circle}
                    </Button>
                    <Button
                      radius="full"
                      className="bg-ars-cyan/30 text-lg sm:text-xl md:text-2xl font-medium sm:font-semibold py-6 md:py-7 lg:py-8 px-5 md:px-6 lg:px-7"
                    >
                      Reskilling initiatives
                    </Button>
                  </div>
                  <div className="flex items-center justify-end">
                    <Button
                      isIconOnly
                      size="sm"
                      radius="full"
                      disableAnimation
                      className="bg-transparent -mr-4 text-xl md:text-2xl"
                    >
                      {ICONS.circle}
                    </Button>
                    <Button
                      radius="full"
                      className="bg-ars-cyan/30 text-lg sm:text-xl md:text-2xl font-medium sm:font-semibold py-6 md:py-7 lg:py-8 px-5 md:px-6 lg:px-7"
                    >
                      Continuous Innovation
                    </Button>
                  </div>
                  <div className="flex items-center">
                    <Button
                      isIconOnly
                      size="sm"
                      radius="full"
                      disableAnimation
                      className="bg-transparent -mr-4 text-xl md:text-2xl"
                    >
                      {ICONS.circle}
                    </Button>
                    <Button
                      radius="full"
                      className="bg-ars-cyan/30 text-lg sm:text-xl md:text-2xl font-medium sm:font-semibold py-6 md:py-7 lg:py-8 px-5 md:px-6 lg:px-7"
                    >
                      Policy adaptations
                    </Button>
                  </div>
                  <div className="flex items-center justify-end">
                    <Button
                      isIconOnly
                      size="sm"
                      radius="full"
                      disableAnimation
                      className="bg-transparent -mr-4 text-xl md:text-2xl"
                    >
                      {ICONS.circle}
                    </Button>
                    <Button
                      radius="full"
                      className="bg-ars-cyan/30 text-lg sm:text-xl md:text-2xl font-medium sm:font-semibold py-6 md:py-7 lg:py-8 px-5 md:px-6 lg:px-7"
                    >
                      Technology Integration
                    </Button>
                  </div>
                </div>
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
                      src={img3}
                      alt="featured image"
                    />
                  </div>
                </div>
                <p className="text-[14px] md:text-[16px] lg:text-[18px] mt-4 md:mt-6 lg:mt-8 xl:mt-10 text-[#002838]">
                  The future isn&apos;t about replacing humans but enhancing
                  their capabilities with{" "}
                  <span className="font-bold">automation</span>. Collaboration
                  between humans and robots drives
                  <span className="font-bold">safer</span>,
                  <span className="font-bold"> smarter</span>, and more
                  <span className="font-bold"> productive warehouses</span>.
                </p>

                <Image
                  className="w-full h-60 xs:h-64 sm:h-72 md:h-[400px] lg:h-[420px] xl:h-[460px] 2xl:h-[500px] rounded-3xl mt-10"
                  src={img4}
                  alt="featured image"
                />

                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold text-cyan-blue mt-4 md:mt-6 lg:mt-8 xl:mt-10">
                  How do you perceive Automation&apos;s impact on Labor?
                </h3>
                <p className="text-[14px] md:text-[16px] lg:text-[18px] mt-4 md:mt-6 lg:mt-8 xl:mt-10 text-[#002838]">
                  How is automation influencing your industry, and what steps
                  are you taking to adapt?
                </p>
              </div>

              <div className="hidden lg:block lg:w-1/4">
                <div className="flex flex-col items-end gap-10 2xl:sticky 2xl:top-20">
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

export default TheImpactAutomationOnLabour;
