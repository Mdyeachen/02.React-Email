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
    src="https://bodyjewelrysatix.s3.us-west-1.amazonaws.com/satix/webDev/cannon.png"
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
          <Body className="m-0 p-0 font-sans">
            <Container className="mx-auto border border-gray-300 rounded-lg shadow-md p-4 md-p-12">
              <Hr />
              <h2>Hey [First Name]</h2>
              <p>
                We just got your submission — and we’re so glad you decided to
                share your story with us. 💎 Show Your Shine isn’t just about
                piercings — it’s about people.
              </p>
              <p>
                Your story adds real light to our community, and we can’t wait
                to feature it. Our team will review your submission soon.
              </p>

              <h3>Once it’s approved, you’ll get:</h3>
              <ul className="list-none">
                <li>✅ A $10 Luxe Modz Gift Card</li>
                <li>✅ A chance to be featured on our socials</li>
                <li>✅ A spot in our official #LuxeModzStories gallery</li>
              </ul>
              <Hr />
              <Section className="text-center bg-teal-950 text-white m-0 py-5">
                <h3 className="m-0">
                  In the meantime, here’s something special —
                </h3>
                <p className="m-0">
                  Use code <b>SHINE25</b> for 25% OFF your next order at
                  checkout. ✨
                </p>
              </Section>

              <Section>
                <h3>👉 Shop New Arrivals</h3>
                <p>
                  Thank you for being part of this movement — where every
                  piercing tells a story.
                </p>
                <p>
                  Keep shining, <br />
                  The Luxe Modz Team
                </p>
              </Section>
              <Section className="text-center bg-teal-950 text-white">
                <p>
                  <b>
                    BodyJewelry.com | Luxe Modz <br />
                    #ShowYourShine | #PiercedForAReason
                  </b>
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
