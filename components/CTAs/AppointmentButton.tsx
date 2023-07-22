import Link from 'next/link';

const AppointmentButton: React.FC = () => {
  return (
    <button className="text-xs rounded font-bold uppercase text-blue-900 border-2 border-blue-900 p-3 hover:bg-blue-900 hover:text-white duration-200">
      <Link href="/appointment">Appointments </Link>
    </button>
  );
}

export default AppointmentButton;
