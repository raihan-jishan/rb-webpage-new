/* eslint-disable jsx-a11y/anchor-is-valid */
// import icons 🍏
import { AiOutlineHome,AiOutlineInfoCircle } from "react-icons/ai";
import {BiBookmarkAlt} from 'react-icons/bi';
import {IoMdPricetag} from 'react-icons/io';
import {MdPriceCheck  } from 'react-icons/md';
import Button from './Button';
export default function Uils() {
  return (
    <>
      <a className="mr-5 navitems">Home<AiOutlineHome /></a>
      <a className="mr-5 navitems">About <AiOutlineInfoCircle /> 
      </a>
      <a className="mr-5 navitems">Product<BiBookmarkAlt /></a>
      <a className="mr-5 navitems">Pricing<IoMdPricetag /></a>
      <a className="mr-5 navitems">Order<MdPriceCheck /> </a>
      <a className="mr-6 navitems">Faqs </a>
       <Button /> 
    </>
  );
}
