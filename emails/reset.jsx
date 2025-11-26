import {
  Tailwind,
  Html,
  Head,
  Body,
  pixelBasedPreset,
  Container,
  Section,
  Img,
  Hr,
  Button,
} from "@react-email/components";

const EmailIcon = ({ size }) => (
  <Img
    src="https://raw.githubusercontent.com/Yeachen29/myimages/refs/heads/main/reset-icon.png"
    width={size}
    height={size}
    className="m-auto"
  />
);

const Verify = () => {
  return (
    <>
      <Html>
        <Head>
          <title>Verify Your Email Address</title>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
          <meta name="color-scheme" content="light dark" />
          <meta name="supported-color-schemes" content="light dark" />
        </Head>
        <Tailwind
          config={{
            presets: [pixelBasedPreset],
            theme: {
              extend: {
                colors: {
                  primary: "#4F46E5",
                  secondary: "#FBBF24",
                },
              },
            },
          }}
        >
          <Body className="m-0 p-0 bg-white font-sans">
            <Container className="mx-auto border border-gray-300 rounded-lg shadow-md py-20">
              <Section className="logo text-center ">
                <h1 className="py-2 text-2xl font-bold m-0">
                  <Img
                    src="https://raw.githubusercontent.com/Yeachen29/myimages/refs/heads/main/line-webbase-icon.png"
                    alt="Web Dev Logo"
                    width="460"
                    className="m-auto"
                  />
                </h1>
                <Hr />
                <EmailIcon size="360px" />
              </Section>
              <Section className="text-center py-5">
                <Button
                  className="box-border w-full rounded-[8px] bg-indigo-600 px-[12px] py-[12px] text-center font-semibold text-white mt-8"
                  href="https://react.email"
                >
                  Reset Your Password
                </Button>
              </Section>
              <Section className="p-5 text-center">
                <h2 className="m-0">Reset Your Password</h2>
                <p className="text-sm px-10">
                  This is some placeholder text to show the general layout of
                  the email. It will be replaced with your actual content later.
                  This is some placeholder text to show
                </p>
              </Section>
              <Section className="m-0 p-5 text-center">
                <p className="text-center text-gray-600 text-xs">
                  Thank you
                  <br />© {new Date().getFullYear()} @webDev - YeachenAbir. All
                  rights reserved.
                </p>
              </Section>
              <Hr />
            </Container>
          </Body>
        </Tailwind>
      </Html>
    </>
  );
};
export default Verify;
