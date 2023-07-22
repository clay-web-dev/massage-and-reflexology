import Input from "./Input";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "react-datepicker/dist/react-datepicker-cssmodules.css";
import MassageTypeDropdown from "./MassageTypeDropdown";
import { useAppointmentForm } from "./useAppointmentForm";

// Get the current date and set it as the minimum selectable date
const today = new Date();
today.setHours(0, 0, 0, 0); // Set time to 00:00:00
const minSelectableDate = today;

const AppointmentForm = () => {
  const {
    formData,
    handleChange,
    handleDateChange,
    handleDropdownChange,
    handleSubmit,
  } = useAppointmentForm();

  return (
    <form
      name="appointment"
      className=""
      onSubmit={handleSubmit}
      data-netlify="true"
    >
      <div className="flex">
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
      </div>
      <div className="flex">
        <MassageTypeDropdown
          value={formData.massage}
          onChange={handleDropdownChange}
        />
        <DatePicker
          selected={formData.date}
          onChange={handleDateChange}
          dateFormat="dd/MM/yyyy"
          className="p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          id="date"
          name="date"
          minDate={minSelectableDate} // Set the minimum selectable date
          placeholderText="Date"
          showYearDropdown
        />
      </div>

      <Input
        type="tel"
        id="phone"
        name="phone"
        placeholder="Phone Number"
        value={formData.phone}
        handleInputChange={handleChange}
      />

      <button
        className="bg-blue-900 text-white font-bold py-2 px-4 rounded mt-4"
        type="submit"
      >
        Send
      </button>
    </form>
  );
};

export default AppointmentForm;
