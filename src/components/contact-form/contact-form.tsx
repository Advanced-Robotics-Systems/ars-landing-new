"use client";
import { Button, Input, Textarea } from "@nextui-org/react";

const ContactForm = () => {
  return (
    <form className="w-full text-white ">
      <div className="flex gap-6 items-center justify-between w-full border-y border-cyan-blue-50 py-2 text-sm md:text-base">
        <p className="text-cyan-blue font-medium">Name</p>
        <Input
          radius="md"
          name="name"
          size="lg"
          placeholder="Your full name"
          className=" font-medium rounded-xl md:max-w-md lg:max-w-xs xl:max-w-sm 2xl:max-w-md bg-[#FFFFFF33]"
        />
      </div>

      <div className="flex gap-3 items-center justify-between w-full border-b border-cyan-blue-50 py-2 text-sm md:text-base">
        <p className="text-cyan-blue font-medium">Subject</p>
        <Input
          radius="md"
          name="subject"
          size="lg"
          placeholder="Subject of message"
          className=" font-medium rounded-xl md:max-w-md lg:max-w-xs xl:max-w-sm 2xl:max-w-md bg-[#FFFFFF33]"
        />
      </div>
      <div className="flex gap-7 items-center justify-between w-full border-b border-cyan-blue-50 py-2 text-sm md:text-base">
        <p className="text-cyan-blue font-medium">Email</p>
        <Input
          radius="md"
          name="email"
          size="lg"
          type="email"
          placeholder="email@company.com"
          className=" font-medium rounded-xl md:max-w-md lg:max-w-xs xl:max-w-sm 2xl:max-w-md bg-[#FFFFFF33]"
        />
      </div>
      <div className="w-full border-b border-cyan-blue-50 py-4 text-sm md:text-base">
        <p className="text-cyan-blue font-medium mb-2">Your message</p>
        <Textarea
          placeholder="Message"
          minRows={5}
          maxRows={5}
          className="bg-[#FFFFFF33] rounded-xl "
          name="message"
        />
      </div>

      <Button
        type="submit"
        radius="full"
        size="lg"
        className="bg-cyan-blue text-[#030D2D] font-medium mt-8"
      >
        Submit
      </Button>
    </form>
  );
};

export default ContactForm;
