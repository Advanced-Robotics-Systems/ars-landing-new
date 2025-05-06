// import { NextResponse } from "next/server";

// export async function POST(request: Request) {
//   const formData = await request.json();

//   try {
//     const scriptUrl = process.env.WEB_APP_URL as string;
//     console.log(formData);

//     const res = await fetch(scriptUrl, {
//       method: "POST",
//       body: new URLSearchParams(formData),
//     });

//     if (!res.ok) {
//       throw new Error("Failed to submit form data");
//     }

//     return NextResponse.json({ message: "Form submitted successfully!" });
//   } catch (error) {
//     console.error(error);
//     return NextResponse.json(
//       { message: "Error submitting form." },
//       { status: 500 }
//     );
//   }
// }

import { EmailTemplate } from "@/components";
import { ReactElement } from "react";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const formData = await request.json();

  try {
    const { data, error } = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: ["abrarhussain@arsystems.org"],
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
