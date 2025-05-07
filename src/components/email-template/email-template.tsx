import { Container, Hr, Row, Text } from "@react-email/components";
import { CSSProperties, FC } from "react";

type EmailTemplateProps = {
  name: string;
  subject: string;
  email: string;
  message: string;
};

const templateStyles = {
  label: {
    color: "#0590C8",
    fontWeight: "bold",
    textAlign: "justify",
  },
  value: {
    color: "#212529",
  },
  divider: {
    borderColor: "#22A9E1",
    margin: "16px auto",
  },
};

export const EmailTemplate: FC<Readonly<EmailTemplateProps>> = ({
  name,
  subject,
  email,
  message,
}) => (
  // <>
  //   <h2 style={{ color: "black" }}>New Form Submission from ARS Website!</h2>
  //   <table style={{ borderSpacing: 0, border: "1px solid black" }}>
  //     <tr>
  //       <td
  //         style={{
  //           fontWeight: "bold",
  //           border: "1px solid black",
  //           padding: "8px",
  //         }}
  //       >
  //         Form Field
  //       </td>
  //       <td
  //         style={{
  //           fontWeight: "bold",
  //           border: "1px solid black",
  //           padding: "8px",
  //         }}
  //       >
  //         Submitted Details
  //       </td>
  //     </tr>
  //     <tr>
  //       <td style={{ border: "1px solid black", padding: "8px" }}>Name:</td>
  //       <td style={{ border: "1px solid black", padding: "8px" }}>{name}</td>
  //     </tr>
  //     <tr>
  //       <td style={{ border: "1px solid black", padding: "8px" }}>Subject:</td>
  //       <td style={{ border: "1px solid black", padding: "8px" }}>{subject}</td>
  //     </tr>
  //     <tr>
  //       <td style={{ border: "1px solid black", padding: "8px" }}>Email:</td>
  //       <td style={{ border: "1px solid black", padding: "8px" }}>{email}</td>
  //     </tr>
  //     <tr>
  //       <td style={{ border: "1px solid black", padding: "8px" }}>Message:</td>
  //       <td style={{ border: "1px solid black", padding: "8px" }}>{message}</td>
  //     </tr>
  //   </table>
  // </>
  <Container
    style={{
      backgroundColor: "#505B66",
      color: "#212529",
      padding: "auto 16px",
      borderRadius: "16px",
    }}
  >
    <Text
      style={{
        fontWeight: "bold",
        fontSize: "20px",
        lineHeight: "24.38px",
        color: "#0590C8",
      }}
    >
      New Submission from ARS Website
    </Text>
    <Row style={templateStyles.label as CSSProperties}>Name:</Row>
    <Row style={templateStyles.value}>{name}</Row>
    <Hr style={templateStyles.divider} />
    <Row style={templateStyles.label as CSSProperties}>Subject:</Row>
    <Row style={templateStyles.value}>{subject}</Row>
    <Hr style={templateStyles.divider} />
    <Row style={templateStyles.label as CSSProperties}>Email:</Row>
    <Row style={templateStyles.value}>{email}</Row>
    <Hr style={templateStyles.divider} />
    <Row style={templateStyles.label as CSSProperties}>Message:</Row>
    <Row style={templateStyles.value}>{message}</Row>
    <Hr style={templateStyles.divider} />
  </Container>
);
