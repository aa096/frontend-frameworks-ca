import { ContactForm } from "../components";
import { Helmet } from "react-helmet";

function Contact() {
  return (
    <>
      <div>
        <Helmet>
          <title>Contact Us | AnyCart</title>
          <meta
            name="description"
            content="Get in touch with us through our contact form."
          />
        </Helmet>
        <main>
          <div className="container mx-auto max-w-screen-lg py-10">
            <h1 className="text-3xl font-bold text-center mb-6 text-primary">
              We’re Here for You
            </h1>
            <p className="text-center mb-8 mx-10">
              If you need support, have a question, or just want to say hello,
              fill out the form and we’ll be in touch soon.
            </p>
            <ContactForm />
          </div>
        </main>
      </div>
    </>
  );
}

export default Contact;
