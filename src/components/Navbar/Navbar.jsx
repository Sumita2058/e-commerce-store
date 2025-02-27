import { IoSearch } from "react-icons/io5";
import { Navlinks } from "../../constant/Navlinks";
import { RiMenu3Fill, RiCloseLine } from "react-icons/ri";
import { useState } from "react";
import ResponsiveMenu from "./ResponsiveMenu";
import { FaCartShopping } from "react-icons/fa6";

  
const Navbar = () => {
  const [showMenu, setshowMenu] = useState(false);
  const toggleMenu = () => {
    setshowMenu(!showMenu);
  };
  return (
    <div className=" relative p-1  bg-gray-500  text-white ">
      <div className=" flex justify-between items-center">
        <div className="flex flex-row gap-2 items-center p-8 col-span-4 text-lg">
          <div className="lg:hidden md:block">
            {showMenu ? (
              <RiCloseLine
                onClick={toggleMenu}
                className="cursor-pointer fixed top-5 left-60 z-50 transition-all text-white"
                size={30}
              />
            ) : (
              <RiMenu3Fill
                onClick={toggleMenu}
                className="text-2xl text-black cursor-pointer "
                size={30}
              />
            )}
          </div>
          <h1>
            Comfort <span className="text-orange-500 text-2xl">Z</span>one
          </h1>
        </div>
        <nav className="hidden md:block justify-center items-center">
          <ul className="flex items-center top-0 gap-8 ">
            {Navlinks.map(({ id, name, link }) => (
              <li key={id} className="py-6 hover:text-orange-300 duration-100">
                <a href={link} className="inline-block text-md font-semibold">
                  {name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex p-10 gap-3 text-md items-center">
          <IoSearch className="text-lg"/>
          
          <FaCartShopping className="text-lg" />
      </div>
      <ResponsiveMenu showMenu={showMenu} />
    </div>
    </div>
  );
};
export default Navbar;
