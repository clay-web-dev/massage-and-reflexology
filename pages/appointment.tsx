import Head from "next/head";
import AppointmentForm from "@/components/AppointmentForm";

const AppointmentPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Appointments</title>
        <meta
          name="description"
          content="Welcome to the appointments page"
        />
      </Head>
      <div className="max-w-screen-sm m-auto h-[800px] max-lg:h-[450px] flex items-center">
        <div className="text-center">
        <h3 className="font-bold">Appointment</h3>
        <p>If you would like to make an appointment please fill the form below, and I will reply to you as soon as possible</p>
      <AppointmentForm/>
        </div>


      </div>
    </>
  );
};

export default AppointmentPage;
