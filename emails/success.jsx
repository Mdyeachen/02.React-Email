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
    src="https://bodyjewelrysatix.s3.us-west-1.amazonaws.com/satix/webDev/gold-thropy.png"
    alt="success"
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
            <Container className="mx-auto border border-gray-300 rounded-lg shadow-md bg-indigo-700 text-white">
              <Section className="my-16">
                <Section className="logo text-center ">
                  <h1 className="py-2 text-white text-2xl font-bold m-0">
                    <Img
                      src="https://bodyjewelrysatix.s3.us-west-1.amazonaws.com/satix/webDev/logowhite.png"
                      alt="Web Dev Logo"
                      width="380"
                      className="m-auto"
                    />
                  </h1>
                  <h1 className="my-3 text-2xl font-bold ">Congratulations</h1>
                  <EmailIcon size="250px" />
                </Section>
                <Section className="p-3 text-center text-red">
                  <h2 className="m-0">Successful to Verification</h2>
                  <p className="text-sm px-10 text-white">
                    This is some placeholder text to show the general layout of
                    the email. It will be replaced with your actual content
                    later. This is some placeholder text to show
                  </p>
                </Section>
                <Section className="m-0 p-5 text-center">
                  <p className="text-center text-gray-100 text-xs mt-6">
                    Thank you
                    <br />© {new Date().getFullYear()} @webDev - YeachenAbir.
                    All rights reserved.
                  </p>
                </Section>
              </Section>
            </Container>
          </Body>
        </Tailwind>
      </Html>
    </>
  );
};
export default Verify;
