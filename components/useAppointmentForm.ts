import { useState, ChangeEvent, FormEvent } from "react";

export const useAppointmentForm = () => {
  const [formData, setFormData] = useState({
    date: null as Date | null,
    massage: "",
    phone: "",
    name: "",
    email: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleDateChange = (date: Date) => {
    setFormData((prevState) => ({
      ...prevState,
      date: date,
    }));
  };

  const handleDropdownChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
    // Reset the form
    setFormData({
      name: "",
      email: "",
      date: null as Date | null,
      phone: "",
      massage: "",
    });
  };

  return {
    formData,
    handleChange,
    handleDateChange,
    handleDropdownChange,
    handleSubmit,
  };
};
