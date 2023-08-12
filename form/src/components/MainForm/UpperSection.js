import React, { useContext } from "react";
import upperImg from "../../Assets/Images/upperImg.png";
import { Input } from "@chakra-ui/react";
import { UserContext } from "../../UserContext";
import "../CSS/UpperSection.css";
const UpperSection = () => {
  const {upperData,setUpperData}=useContext(UserContext);
  return (
    <>  
      <div className="main-div flex flex-row justify-center gap-40 items-center ml-11">
        <div className="flex flex-col justify-between items-center gap-20">
          <span className="text-2xl border-b-2 border-slate-600 font-ubuntu p-3">Personal Details</span>
        <div className="flex flex-row justify-start items-center gap-7">
            <div className="text-xl font-ubuntu">Name : </div>
            <div>
              <Input className="inputName" sx={{width:"300px",
            boxShadow:"10px 10px lightblue",
            }} placeholder="" />
            </div>
          </div>
          <div className="flex flex-row justify-start items-center gap-7">
            <div className="text-xl font-ubuntu">Password : </div>
            <div>
              <Input className="inputPassword"sx={{width:"280px",
            boxShadow:"10px 10px lightblue"}} placeholder="" />
            </div>
          </div>
          <div className="flex flex-row justify-start items-center gap-7">
            <div className="text-xl font-ubuntu">Mobile : </div>
            <div>
              <Input className="inputMobile" type="number"sx={{width:"300px",
            boxShadow:"10px 10px lightblue"}} placeholder="" />
            </div>
          </div>
          <div className="flex flex-row justify-start items-center gap-7">
            <div className="text-xl font-ubuntu">Email : </div>
            <div>
              <Input className="inputEmail" type="email" sx={{width:"300px",
                boxShadow:"10px 10px lightblue"
            }} placeholder="" />
            </div>
          </div>
        </div>
        <div>
          <img src={upperImg} className="imageUpper h-[35vw] w-[35vw]" />
        </div>
      </div>
    </>
  );
};

export default UpperSection;
