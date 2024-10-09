import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import schema from "../validation/formSchema.jsx";

// console.log(useUserActions);

function ContactForm() {
	// const [data, setData] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);

	// const { setUser } = useUserActions();

	const navigate = useNavigate();

	// console.log(setUser);

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	});

	console.log(errors);

	async function onSubmit(data) {
		console.log(data);

		const options = {
			headers: { "Content-Type": "application/json" },
			method: "POST",
			body: JSON.stringify(data),
		};

		try {
			setIsLoading(true);
			setError(null);
			const response = await fetch(LOGIN_URL, options);
			const json = await response.json();

			if (!response.ok) {
				return setError(json.errors?.[0]?.message ?? "There was an error");
			}

			// setUser(json);
			// navigate("/dashboard");

			// store user in global state
			/// redirect to dahsboard
		} catch (error) {
			setError(error.toString());
		} finally {
			setIsLoading(false);
		}
	}

	return (
        <div className="flex mt-4 justify-center">
            <form className="bg-white p-8 flex justify-center" onSubmit={handleSubmit(onSubmit)}>
                <fieldset disabled={isLoading}>
                    {error && <ServerWarning>{error}</ServerWarning>}
                    <div className="form-control w-full max-w-md mx-auto">
                        <label className="label">
                            <span className="label-text text-center w-full">Full Name:</span>
                        </label>
                        <input className="p-2 bg-secondary text-white rounded-md w-full mt-2" {...register("fullName")} type="text" />
                    </div>
                    <div className="form-control w-full max-w-md mx-auto mt-3">
                        <label className="label">
                            <span className="label-text text-center w-full">Email:</span>
                        </label>
                        <input className="p-2 bg-secondary text-white rounded-md w-full mt-2" {...register("email")} type="email" />
                    </div>
                    <div className="form-control w-full max-w-md mx-auto mt-3">
                        <label className="label">
                            <span className="label-text text-center w-full">Subject:</span>
                        </label>
                        <input className="p-2 bg-secondary text-white rounded-md w-full mt-2" {...register("subject")} type="text" />
                    </div>
                    <div className="form-control w-full max-w-md mx-auto mt-3">
                        <label className="label">
                            <span className="label-text text-center w-full">Message:</span>
                        </label>
                        <textarea className="p-2 bg-secondary text-white rounded-md w-full mt-2" {...register("message")} rows="5" />
                    </div>
                    <div className="form-control w-full max-w-md mx-auto">
                        <button className="bg-primary hover:bg-primary mt-2 text-white font-bold py-2 px-4 rounded-md w-full">
                            {isLoading ? "Sending..." : "Send Message"}
                        </button>
                    </div>
                </fieldset>
            </form>
        </div>
    );
    
}

export default ContactForm;