import React, { useContext } from "react";
import MiddleImg1 from "../../Assets/Images/middleImg1.jpg";
import { Input } from "@chakra-ui/react";
import { UserContext } from "../../UserContext";
import "../CSS/MiddleSection1.css"
const MiddleSection1 = () => {
  const {middleData1,setMiddleData1}=useContext(UserContext);
  return (
    <>
      <div className="main-div flex flex-row justify-evenly gap-52 items-center ml-11">
      <div>
          <img src={MiddleImg1} className="imageMiddle1 h-[35vw] w-[35vw]" />
        </div>
        <div className="main-div2 flex flex-col justify-center items-center gap-20 pr-40">
        <span className="text-2xl border-b-2 border-slate-600 font-ubuntu p-3">Address</span>
        <div className="flex flex-col justify-start items-center gap-7">
            <div className="text-xl font-ubuntu">Address Line 1: </div>
            <div>
              <Input className="inputAddress1"sx={{width:"500px",
            boxShadow:"10px 10px lightblue",
            }} placeholder="" />
            </div>
            <div className="text-xl font-ubuntu">Address Line 2 : </div>
            <div>
              <Input className="inputAddress2"sx={{width:"500px",
            boxShadow:"10px 10px lightblue",
            }} placeholder="" />
            </div>

          </div>
          <div className="column-div flex flex-row justify-start items-center gap-7">
            <div className="text-xl font-ubuntu">Pincode : </div>
            <div>
              <Input className="inputPincode" type="number" sx={{width:"100px",
            boxShadow:"10px 10px lightblue"}} placeholder="" />
            </div>
            <div className="text-xl font-ubuntu">City : </div>
            <div>
              <Input className="inputCity"sx={{width:"200px",
            boxShadow:"10px 10px lightblue"}} placeholder="" />
            </div>
          </div>
          <div className="column-div flex flex-row justify-start items-center gap-7">
            <div className="text-xl font-ubuntu">State : </div>
            <div>
              <Input className="inputState" sx={{width:"150px",
            boxShadow:"10px 10px lightblue"}} placeholder="" />
            </div>
            <div className="text-xl font-ubuntu">Country : </div>
            <div>
              <Input className="inputCountry" sx={{width:"150px",
            boxShadow:"10px 10px lightblue"}} placeholder="" />
            </div>
          </div>
          
        </div>
        
      </div>
    </>
  );
};

export default MiddleSection1;
