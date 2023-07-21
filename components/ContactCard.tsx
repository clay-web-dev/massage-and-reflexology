const ContactCard: React.FC<{
  heading: string;
  copy: string;
  link: string;
  linkText: string;
}> = (props) => {
  return (
    <div className="one bg-gray-200 p-5 rounded-lg mt-4">
      <h5 className="text-blue-900 text-2xl font-bold pb-2">{props.heading}</h5>
      <p className="color-gray">{props.copy}</p>
      <p>
        <a className="text-blue-900 text-base" href={props.link}>
          <strong>{props.linkText}</strong>
        </a>
      </p>
    </div>
  );
};

export default ContactCard;
