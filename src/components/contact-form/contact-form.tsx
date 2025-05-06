"use client";
import { Button, Input, Textarea } from "@nextui-org/react";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    subject: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    setStatus("Submitting...");

    const res = await fetch("/api/submit-form", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      setStatus("Submitted Successfully!");
      setFormData({ name: "", subject: "", email: "", message: "" });
    } else {
      setStatus("Error During Submission. Please Retry.");
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (status === "Submitted Successfully!") {
        setStatus("");
      }
    }, 2000);

    return () => clearTimeout(timer);
  }, [status]);

  return (
    <form className="w-full text-white relative" onSubmit={handleSubmit}>
      <div className="flex gap-6 items-center justify-between w-full border-y border-cyan-blue-50 py-2 text-sm md:text-base">
        <p className="text-cyan-blue font-medium">Name</p>
        <Input
          radius="md"
          name="name"
          size="lg"
          placeholder="Your full name"
          className="input-autofill-fix font-medium rounded-xl md:max-w-md lg:max-w-xs xl:max-w-sm 2xl:max-w-md bg-[#FFFFFF33]"
          classNames={{ errorMessage: "text-xs text-red-400" }}
          value={formData.name}
          onChange={handleChange}
          required
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
          classNames={{ errorMessage: "text-xs text-red-400" }}
          value={formData.subject}
          onChange={handleChange}
          required
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
          classNames={{ errorMessage: "text-xs text-red-400" }}
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className="w-full border-b border-cyan-blue-50 py-4 text-sm md:text-base">
        <p className="text-cyan-blue font-medium mb-2">Your message</p>
        <Textarea
          placeholder="Message"
          minRows={5}
          maxRows={5}
          className="bg-[#FFFFFF33] rounded-xl "
          classNames={{ errorMessage: "text-xs text-red-400" }}
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        />
      </div>
      <Button
        type="submit"
        radius="full"
        size="lg"
        className="bg-cyan-blue text-[#030D2D] font-medium mt-8 disabled:bg-ars-gray"
        isDisabled={status === "Submitting..."}
      >
        Submit
      </Button>
      <p
        className={`${
          status === "Submitted Successfully!"
            ? "text-green-400"
            : status === "Error During Submission. Please Retry."
              ? "text-red-400"
              : "text-white"
        } mt-2 absolute left-2 z-10`}
      >
        {status}
      </p>
    </form>
  );
};

export default ContactForm;
