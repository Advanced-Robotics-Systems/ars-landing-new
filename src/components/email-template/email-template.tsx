import { Container, Hr, Row, Text } from "@react-email/components";
import { CSSProperties, FC } from "react";

type EmailTemplateProps = {
  name: string;
  subject: string;
  email: string;
  message: string;
};

const templateStyles: {
  label: CSSProperties;
  value: CSSProperties;
  divider: CSSProperties;
} = {
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
  <Container
    style={{
      backgroundColor: "#D7EFF9",
      color: "#212529",
      paddingLeft: "16px",
      paddingRight: "16px",
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
    <Row style={templateStyles.label}>Name:</Row>
    <Row style={templateStyles.value}>{name}</Row>
    <Hr style={templateStyles.divider} />
    <Row style={templateStyles.label}>Subject:</Row>
    <Row style={templateStyles.value}>{subject}</Row>
    <Hr style={templateStyles.divider} />
    <Row style={templateStyles.label}>Email:</Row>
    <Row style={templateStyles.value}>{email}</Row>
    <Hr style={templateStyles.divider} />
    <Row style={templateStyles.label}>Message:</Row>
    <Row style={templateStyles.value}>{message}</Row>
    <Hr style={templateStyles.divider} />
  </Container>
);
