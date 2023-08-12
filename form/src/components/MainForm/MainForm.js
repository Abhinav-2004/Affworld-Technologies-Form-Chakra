import React from 'react'
import "../CSS/MainForm.css";
import SideImg from "../../Assets/Images/middleImg.jpg";
import UpperSection from './UpperSection';
import MiddleSection1 from './MiddleSection1';
import MiddleSection2 from './MiddleSection2';
import LowerSection from './lowerSection';
const MainForm = () => {
  return (<>
    <div className= "flex flex-col gap-10">
        <div>
            <UpperSection/>
        </div>
        <div>
            <MiddleSection1/>
        </div>
        <div>
            <MiddleSection2/>
        </div>
        <div>
             <LowerSection/>
        </div>
    </div>
    </>)
}

export default MainForm
