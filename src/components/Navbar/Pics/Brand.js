// import Link from react router dom 🙂 
import { Link } from "react-router-dom"

export default function Brand(){
    return(
        <>
          <Link to='/' className='navbar-logo'>
           {/* Rokeya-Beding  */}
          
           <span className="ml-3 text-3xl font-semibold">Logo </span>
          </Link>
        </>
    )
}