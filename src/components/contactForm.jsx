import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import schema from "../validation/formSchema.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function ContactForm() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
    setFormSubmitted(true);
  };

  return (
    <div className="flex mt-4 justify-center">
      <div className="w-full max-w-md">
        {formSubmitted && (
          <div className="text-primary font-bold mb-4 text-center">
            <FontAwesomeIcon icon={faEnvelope} />
            <p>Your message has been successfully posted to the console!</p>
          </div>
        )}

        <form
          className="bg-white p-8"
          onSubmit={handleSubmit((data) => {
            onSubmit(data);
          })}
        >
          <fieldset>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text text-center w-full font-bold">
                  Full Name:
                </span>
              </label>
              <input
                className="p-2 bg-secondary text-white rounded-md w-full mt-2"
                {...register("fullName")}
                type="text"
              />
              <span>{errors.fullName?.message}</span>
            </div>

            <div className="form-control w-full mt-3">
              <label className="label">
                <span className="label-text text-center w-full font-bold">
                  Email:
                </span>
              </label>
              <input
                className="p-2 bg-secondary text-white rounded-md w-full mt-2"
                {...register("email")}
                type="email"
              />
              {errors.email && <span>{errors.email.message}</span>}
            </div>

            <div className="form-control w-full mt-3">
              <label className="label">
                <span className="label-text text-center w-full font-bold">
                  Subject:
                </span>
              </label>
              <input
                className="p-2 bg-secondary text-white rounded-md w-full mt-2"
                {...register("subject")}
                type="text"
              />
              {errors.subject && <span>{errors.subject.message}</span>}
            </div>

            <div className="form-control w-full mt-3">
              <label className="label">
                <span className="label-text text-center w-full font-bold">
                  Message:
                </span>
              </label>
              <textarea
                className="p-2 bg-secondary text-white rounded-md w-full mt-2"
                {...register("body")}
                rows="5"
              />
              {errors.body && <span>{errors.body.message}</span>}
            </div>

            <div className="form-control w-full">
              <button
                type="submit"
                className="bg-primary hover:bg-primary mt-2 text-white font-bold py-2 px-4 rounded-md w-full"
              >
                Send Message
              </button>
            </div>
          </fieldset>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
