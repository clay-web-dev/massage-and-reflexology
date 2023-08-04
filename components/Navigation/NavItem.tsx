import Link from "next/link";
import React, { useState } from "react";

// Define the type for subMenuItems
type SubMenuItem = {
  pageLink: string;
  copy: string;
};

const NavItem: React.FC<{
  pageLink: string;
  handleClick: () => void;
  copy: string;
  subMenuItems?: SubMenuItem[];
}> = (props) => {
  const [isSubMenuVisible, setIsSubMenuVisible] = useState(false);

  const handleMouseEnter = () => {
    setIsSubMenuVisible(true);
  };

  const handleMouseLeave = () => {
    setIsSubMenuVisible(false);
  };
  
  return (
    <li
      className="p-3 m-auto uppercase text-sm font-bold text-blue-900  hover:border-b hover:border-blue-900  duration-200 relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link href={props.pageLink} onClick={props.handleClick}>
        {props.copy}
      </Link>
      {props.subMenuItems && isSubMenuVisible && props.subMenuItems.length > 0 && (
        <ul className="whitespace-nowrap mt-1 sub-menu absolute left-0 top-full bg-white border border-gray-200" style={{ display: 'block', zIndex: 10 }}>
          {props.subMenuItems.map((subItem, index) => (
            <li key={index} className="sub-menu-item hover:bg-white hover:text-blue-900 hover:border-blue-900 duration-200 ">
              <a href={subItem.pageLink} className="block p-3">
                {subItem.copy}
              </a>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

export default NavItem;
