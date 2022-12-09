// imort  module styling 🏈 
import  classes from '../../styles/Pagebtn.module.css'; 
export default function Pagebtn({children}){
    return(
        <>
        <button className={classes.PageContainer}>

           {children}
        </button>
        </>
    )
}