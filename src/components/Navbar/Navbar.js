/* eslint-disable jsx-a11y/anchor-is-valid */
// import logo from components
// import Ulitems from "./Pics/Uils";
import Brand from "./Pics/Brand";
import Button from "./Pics/Button";
//  import react icons
import { MdBookmark } from "react-icons/md";
// import custom css
import style from "../../styles/Navbar.module.css";
import Links from "./Pics/Links";
export default function Navbar() {
  return (
    <div className={style.navbar}> 
    <header className="text-gray-600 body-font">
    <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      <nav className="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
     <Links /> 
      </nav>
      <a className="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-gray-900 lg:items-center lg:justify-center mb-4 md:mb-0">
        {/* heading logo components */}
      <div className={style.LogoHeading}>
              <MdBookmark className={style.CustomLogoiicon} />
              <Brand />
            </div>
      </a>
      <div className="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
        {/* button components */}
       
      </div>
    </div>
  </header>
  </div>
  );
}
