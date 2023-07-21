import Link from 'next/link';

const ContactButton: React.FC = () => {
  return (
    <button className="text-xs rounded font-bold uppercase text-blue-900 border-2 border-blue-900 p-3 hover:bg-blue-900 hover:text-white duration-200">
      <Link href="/contact">Contact Us </Link>
    </button>
  );
}

export default ContactButton;
