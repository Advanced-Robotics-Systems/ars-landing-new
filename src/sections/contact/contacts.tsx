import { ContactForm } from "@/components";

const Contacts = () => {
  return (
    <section className=" bg-gradient-to-tr from-white to-ars-cyan ">
      <div className="bg-gradient-to-tr from-ice-blue to-[#FFFFFF33] padding-responsive">
        <h1 className="pt-10 lg:pt-7 pb-3 pl-3 text-white text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-medium">
          Contact
        </h1>
        <div className="bg-midnight-blue flex flex-col lg:flex-row gap-7 px-5 md:px-10 lg:px-12 xl:px-16 py-12 md:py-16 lg:py-24 rounded-t-3xl">
          <div className="text-white space-y-6 md:space-y-8 lg:space-y-10 w-full lg:w-1/2">
            <h3 className="text-xl md:text-2xl xl:text-3xl w-full md:w-3/4 lg:w-full ">
              If you&apos;d like to know more then please call, message or
              follow Azimuth
            </h3>

            <div className="flex gap-24 md:gap-40 xl:gap-52 text-sm md:text-base">
              <h5 className="text-cyan-blue font-medium">Address</h5>
              <p>
                Eagle Street <br /> London <br /> WC1R 4TH <br /> United Kingdom
              </p>
            </div>
            <div className="flex gap-[104px] md:gap-[168px] xl:gap-[216px] text-sm md:text-base">
              <h5 className="text-cyan-blue font-medium">Phone</h5>
              <p>+60 12 345 6789</p>
            </div>
            <div className="flex gap-6 md:gap-20 xl:gap-32 text-sm md:text-base">
              <h5 className="text-cyan-blue font-medium">General enquiries</h5>
              <p>+60 12 345 6789</p>
            </div>
          </div>
          <div className="w-[1px] bg-cyan-blue-50 hidden lg:block"></div>
          <hr className="border-cyan-blue-50 lg:hidden" />

          <div className="w-full lg:w-1/2">
            <h3 className="text-xl md:text-2xl xl:text-3xl text-white mb-8">
              Enquiries
            </h3>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
