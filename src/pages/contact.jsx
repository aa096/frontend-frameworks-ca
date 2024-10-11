import { ContactForm } from "../components";

function Contact() {
    return (
        <>
          <div className="container mx-auto max-w-screen-lg py-10">
            <h1 className="text-3xl font-bold text-center mb-6 text-primary">We’re Here for You</h1>
            <p className="text-center mb-8 mx-10">
              If you need support, have a question, or just want to say hello, fill out the form and we’ll be in touch soon.
            </p>
            <ContactForm />
          </div>
        </>
      );
    }

export default Contact;