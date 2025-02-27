
import PropTypes from 'prop-types';
import { Navlinks } from '../../constant/Navlinks';

const ResponsiveMenu = ({ showMenu }) => { 
  return (
    <div
      className={`lg:hidden fixed top-0 left-0 w-[80%] h-100  bg-black z-10  ${
        showMenu ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      <div className="p-4 ">
        <ul className="flex flex-col text-black p-8">
          {Navlinks.map(({ id, name, link }) => (
            <li key={id} className="p-4  text-blue-200 duration-100">
              <a href={link} >
                {name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
 
ResponsiveMenu.propTypes = {
  showMenu: PropTypes.bool.isRequired,
};

export default ResponsiveMenu;