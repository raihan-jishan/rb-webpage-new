//  imort Button component
import Pagebtn from "../../Buttons/Pagebtn";
import classes from "../../../styles/Pagebtn.module.css";
//  import react icons
import { MdCollections, MdBorderColor } from "react-icons/md";
// todo: update all stafs and make this thing dynamic import in a single js or json file.
import Thumbail from "./Thumbail";
export default function Here() {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Best Decorative Shop
            </h1>
            <p className="mb-8 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
              adipisci ut eaque! Optio, vel quaerat! Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Adipisci quibusdam dicta voluptas
              facilis explicabo rerum. Lorem ipsum dolor sit amet.
            </p>
            <div className={classes.mainContainer}>
              <Pagebtn>
                View collection <MdCollections />
              </Pagebtn>
              <Pagebtn>
                Order Now <MdBorderColor />
              </Pagebtn>
            </div>
          </div>
          <Thumbail />
        </div>
      </section>
    </>
  );
}
