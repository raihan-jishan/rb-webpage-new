// import Link from react router dom 🙂 
import { Link } from "react-router-dom"
// import classes 
import classes from '../../../styles/Logo.module.css';
export default function Brand(){
    return(
        <>
          <Link to='/' className={classes.navbarLogo}>
           {/* Rokeya-Beding  */}
          
           <span className="ml-3 text-3xl font-semibold">Logo </span>
          </Link>
        </>
    )
}