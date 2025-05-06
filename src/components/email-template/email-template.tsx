import { FC } from "react";

type EmailTemplateProps = {
  name: string;
  subject: string;
  email: string;
  message: string;
};

export const EmailTemplate: FC<Readonly<EmailTemplateProps>> = ({
  name,
  subject,
  email,
  message,
}) => (
  <>
    <h2 style={{ color: "black" }}>New Form Submission from ARS Website!</h2>
    <table style={{ borderSpacing: 0, border: "1px solid black" }}>
      <tr>
        <td
          style={{
            fontWeight: "bold",
            border: "1px solid black",
            padding: "8px",
          }}
        >
          Form Field
        </td>
        <td
          style={{
            fontWeight: "bold",
            border: "1px solid black",
            padding: "8px",
          }}
        >
          Submitted Details
        </td>
      </tr>
      <tr>
        <td style={{ border: "1px solid black", padding: "8px" }}>Name:</td>
        <td style={{ border: "1px solid black", padding: "8px" }}>{name}</td>
      </tr>
      <tr>
        <td style={{ border: "1px solid black", padding: "8px" }}>Subject:</td>
        <td style={{ border: "1px solid black", padding: "8px" }}>{subject}</td>
      </tr>
      <tr>
        <td style={{ border: "1px solid black", padding: "8px" }}>Email:</td>
        <td style={{ border: "1px solid black", padding: "8px" }}>{email}</td>
      </tr>
      <tr>
        <td style={{ border: "1px solid black", padding: "8px" }}>Message:</td>
        <td style={{ border: "1px solid black", padding: "8px" }}>{message}</td>
      </tr>
    </table>
  </>
);
