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
} from "@react-email/components";

const EmailIcon = ({ size }) => (
  <Img
    src="https://raw.githubusercontent.com/Yeachen29/myimages/refs/heads/main/email.png"
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
            <Container className="mx-auto border border-gray-300 rounded-lg shadow-md">
              <Section className="logo">
                <h1 className="bg-gray-800 py-4 text-white text-center text-2xl font-bold m-auto">
                  <Img
                    src="https://raw.githubusercontent.com/Yeachen29/myimages/refs/heads/main/webbase-icon-white.png"
                    alt="Web Dev Logo"
                    width="150"
                    className="m-auto"
                  />
                </h1>
              </Section>
              <Section className="text-center">
                <h1 className="my-10 text-6xl font-bold">22345</h1>
              </Section>
              <Section className="p-5 bg-gray-50 text-center">
                <EmailIcon size="120px" />
                <h2 className="m-0">Verify Your Email Address</h2>
                <p className="text-sm text-gray-600 px-10">
                  This is some placeholder text to show the general layout of
                  the email. It will be replaced with your actual content later.
                  This is some placeholder text to show the general layout of
                  the email. It will be replaced with your actual content later.
                </p>
              </Section>
              <Section className="m-0 p-5 text-center">
                <p className="text-center text-gray-500 text-xs mt-6">
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
