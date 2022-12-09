import React from 'react';
import { Link } from 'react-router-dom';
import Pagebtn from '../../components/Buttons/Pagebtn';
//  import module css file
import style from "../../styles/notFound.module.css";
const NotFound = () => {
  return (
    <> 
  <div className={style.notFoundContainer}>
    <h1>404 Not Found </h1>
   
   
  </div>
  <div className={style.paraNot}>
  <p>Ops.. look like you missed the path 
   
    please go to the <Pagebtn><Link to={"/home"}>   Home page  </Link> </Pagebtn>
  </p>
  </div>
  <div className={style.image}>
    <img src="https://drive.google.com/uc?export=view&id=1ddJAMpydpJXIVzmay2NCG0tmeikv0yLN" alt="img" />
    
  </div>
  </>
  )
}

export default NotFound
