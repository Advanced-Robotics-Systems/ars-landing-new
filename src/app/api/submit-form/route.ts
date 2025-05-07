import { EmailTemplate } from "@/components";
import { ReactElement } from "react";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const formData = await request.json();

  try {
    const { data, error } = await resend.emails.send({
      from: "ARS Website <abrarhussain@arsystems.org>",
      to: ["inquiries@arsystems.org"],
      subject: "Form Submission (ARS)",
      react: EmailTemplate(formData) as ReactElement,
    });

    if (error) {
      // @ts-expect-error: 'error' object has the field 'statusCode' but it is apparently not declared in the 'ErrorResponse' type
      return Response.json({ error }, { status: error.statusCode });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
