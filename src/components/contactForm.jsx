import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import schema from "../validation/formSchema.jsx";

function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="flex mt-4 justify-center">
      <form
        className="bg-white p-8 flex justify-center"
        onSubmit={handleSubmit((data) => {
          onSubmit(data);
        })}
      >
        <fieldset>
          <div className="form-control w-full max-w-md mx-auto">
            <label className="label">
              <span className="label-text text-center w-full">Full Name:</span>
            </label>
            <input
              className="p-2 bg-secondary text-white rounded-md w-full mt-2"
              {...register("fullName", {
                required: "Full name is required",
                minLength: {
                  value: 3,
                  message: "Full name must be at least 3 characters",
                },
              })}
              type="text"
            />
            {errors.fullName && <span>{errors.fullName.message}</span>}
          </div>

          <div className="form-control w-full max-w-md mx-auto mt-3">
            <label className="label">
              <span className="label-text text-center w-full">Email:</span>
            </label>
            <input
              className="p-2 bg-secondary text-white rounded-md w-full mt-2"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                },
              })}
              type="email"
            />
            {errors.email && <span>{errors.email.message}</span>}
          </div>

          <div className="form-control w-full max-w-md mx-auto mt-3">
            <label className="label">
              <span className="label-text text-center w-full">Subject:</span>
            </label>
            <input
              className="p-2 bg-secondary text-white rounded-md w-full mt-2"
              {...register("subject", {
                required: "Subject is required",
                minLength: {
                  value: 3,
                  message: "Subject must be at least 3 characters",
                },
              })}
              type="text"
            />
            {errors.subject && <span>{errors.subject.message}</span>}
          </div>

          <div className="form-control w-full max-w-md mx-auto mt-3">
            <label className="label">
              <span className="label-text text-center w-full">Message:</span>
            </label>
            <textarea
              className="p-2 bg-secondary text-white rounded-md w-full mt-2"
              {...register("body", {
                required: "Message is required",
                minLength: {
                  value: 3,
                  body: "Message must be at least 3 characters",
                },
              })}
              rows="5"
            />
            {errors.body && <span>{errors.body.message}</span>}
          </div>

          <div className="form-control w-full max-w-md mx-auto">
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
  );
}

export default ContactForm;
