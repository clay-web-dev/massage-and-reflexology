import Link from "next/link";

const NavItem: React.FC<{
  pageLink: string;
  handleClick: () => void;
  copy: string;
}> = (props) => {
  return (
    <li className="p-3 m-auto uppercase text-xs font-bold text-blue-900  hover:bg-gray-200 hover:rounded-full duration-200">
      <Link href={props.pageLink} onClick={props.handleClick}>
        {props.copy}
      </Link>
    </li>
  );
};

export default NavItem;
