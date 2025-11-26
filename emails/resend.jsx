import {
  Tailwind,
  Html,
  Head,
  Body,
  pixelBasedPreset,
  Container,
  Section,
  Img,
} from "@react-email/components";

const EmailIcon = ({ size }) => (
  <Img
    src="https://raw.githubusercontent.com/Yeachen29/myimages/refs/heads/main/email.png"
    width={size}
    height={size}
    className="m-auto py-5"
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
            <Container className="mx-auto border border-gray-300 rounded-lg shadow-md bg-gray-700 text-white py-10">
              <Section className="logo text-center ">
                <h1 className="py-2 text-white text-2xl font-bold m-0">
                  <Img
                    src="https://raw.githubusercontent.com/Yeachen29/myimages/refs/heads/main/line-webbase-icon-white.png"
                    alt="Web Dev Logo"
                    width="460"
                    className="m-auto"
                  />
                </h1>
              </Section>
              <Section className="text-center bg-white text-gray-800">
                <EmailIcon size="120px" className="py-5" />
                <h1 className="my-0 p-5 text-6xl font-bold bg-gray-100">
                  22345
                </h1>
              </Section>
              <Section className="p-5 text-center">
                <h2 className="m-0 pt-5">Email Verification Again</h2>
                <p className="text-sm px-10">
                  This is some placeholder text to show the general layout of
                  the email. It will be replaced with your actual content later.
                  This is some placeholder text to show the general layout
                </p>
              </Section>
              <Section className="m-0 p-5 text-center">
                <p className="text-center text-gray-100 text-xs mt-6">
                  Thank you
                  <br />© {new Date().getFullYear()} @webDev - YeachenAbir. All
                  rights reserved.
                </p>
              </Section>
            </Container>
          </Body>
        </Tailwind>
      </Html>
    </>
  );
};
export default Verify;
