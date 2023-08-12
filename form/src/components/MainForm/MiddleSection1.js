import React from "react";
import MiddleImg1 from "../../Assets/Images/middleImg1.jpg";
import { Input } from "@chakra-ui/react";
const MiddleSection1 = () => {
  return (
    <>
      <div className="flex flex-row justify-evenly gap-52 items-center ml-11">
      <div>
          <img src={MiddleImg1} className="h-[35vw] w-[35vw]" />
        </div>
        <div className="flex flex-col justify-center items-center gap-20 pr-40">
        <span className="text-2xl border-b-2 border-slate-600 font-ubuntu p-3">Address</span>
        <div className="flex flex-col justify-start items-center gap-7">
            <div className="text-xl font-ubuntu">Address Line 1: </div>
            <div>
              <Input sx={{width:"500px",
            boxShadow:"10px 10px lightblue",
            }} placeholder="" />
            </div>
            <div className="text-xl font-ubuntu">Address Line 2 : </div>
            <div>
              <Input sx={{width:"500px",
            boxShadow:"10px 10px lightblue",
            }} placeholder="" />
            </div>

          </div>
          <div className="flex flex-row justify-start items-center gap-7">
            <div className="text-xl font-ubuntu">Pincode : </div>
            <div>
              <Input type="number" sx={{width:"100px",
            boxShadow:"10px 10px lightblue"}} placeholder="" />
            </div>
            <div className="text-xl font-ubuntu">City : </div>
            <div>
              <Input sx={{width:"200px",
            boxShadow:"10px 10px lightblue"}} placeholder="" />
            </div>
          </div>
          <div className="flex flex-row justify-start items-center gap-7">
            <div className="text-xl font-ubuntu">State : </div>
            <div>
              <Input sx={{width:"150px",
            boxShadow:"10px 10px lightblue"}} placeholder="" />
            </div>
            <div className="text-xl font-ubuntu">Country : </div>
            <div>
              <Input sx={{width:"150px",
            boxShadow:"10px 10px lightblue"}} placeholder="" />
            </div>
          </div>
          
        </div>
        
      </div>
    </>
  );
};

export default MiddleSection1;
