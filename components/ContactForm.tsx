import { useState, useRef, ChangeEvent, FormEvent } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import Input from "./Input";
import getConfig from 'next/config'

const ContactForm = () => {
  const captchaRef = useRef<any>(null);
  const captchaKey = getConfig().publicRuntimeConfig.REACT_APP_SITE_KEY;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here
    const token = captchaRef.current.getValue();
    console.log(token);
    captchaRef.current.reset();
    console.log(formData);
    // Reset the form
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <form className="" onSubmit={handleSubmit}>
      <Input
        value={formData.name}
        handleInputChange={handleChange}
        type={"text"}
        id={"name"}
        name={"name"}
        placeholder={"Name"}
      />
      <Input
        value={formData.email}
        handleInputChange={handleChange}
        type={"email"}
        id={"email"}
        name={"email"}
        placeholder={"Email"}
      />

      <div className="mb-4">
        <textarea
          className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-900 h-[150px]"
          id="message"
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
      </div>
      <ReCAPTCHA sitekey={captchaKey} ref={captchaRef} />
      <button
        className="bg-blue-900 text-white font-bold py-2 px-4 rounded mt-4"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
};

export default ContactForm;
