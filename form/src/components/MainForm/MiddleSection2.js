import React, { useContext } from "react";
import MiddleImg2 from "../../Assets/Images/middleImg.jpg";
import { Input } from "@chakra-ui/react";
import { Select } from "@chakra-ui/react";
import { UserContext } from "../../UserContext";
import "../CSS/MiddleSection2.css";
const MiddleSection2 = () => {
    const {middleData2, setMiddleData2}=useContext(UserContext);
  return (
    <>
      <div className="middlesection2-div flex flex-row justify-evenly gap-52 items-center ml-11">
        <div className="middlesection2-div2 flex flex-col justify-center items-center gap-20 ">
          <span className="text-2xl font-ubuntu border-b-2 border-slate-700 p-3">Educational Details</span>
          <div className="column-div-1 flex flex-row justify-start items-center gap-7">
            <div className="text-xl font-ubuntu">Highest Qualification </div>
            <div>
              <Select sx={{width:"300px" , boxShadow: "10px 10px lightblue" }}>
                <option value="option1" className="p-10 text-xl font-ubuntu text-green-500">Intermidiate</option>
                <option value="option2" className="p-10 text-xl font-ubuntu text-green-600">Bachelors</option>
                <option value="option3" className="p-10 text-xl font-ubuntu text-green-700">Masters</option>
              </Select>
            </div>
            <div className="text-xl font-ubuntu">Percentage/Gpa </div>
            <div>
              <Input type="number"
                sx={{ width: "100px", boxShadow: "10px 10px lightblue" }}
                placeholder=""
              />
            </div>
          </div>
          <div className="column-div-1 flex flex-row justify-start items-center gap-7">
            <div className="text-xl font-ubuntu">University </div>
            <div>
              <Input
                sx={{ width: "200px", boxShadow: "10px 10px lightblue" }}
                placeholder=""
              />
            </div>
            <div className="text-xl font-ubuntu">College </div>
            <div>
              <Input
                sx={{ width: "200px", boxShadow: "10px 10px lightblue" }}
                placeholder=""
              />
            </div>
          </div>
          <div className="column-div-1 flex flex-row justify-start items-center gap-7">
            <div className="text-xl font-ubuntu">City </div>
            <div>
              <Input
                sx={{ width: "150px", boxShadow: "10px 10px lightblue" }}
                placeholder=""
              />
            </div>
            <div className="text-xl font-ubuntu">State </div>
            <div>
              <Input
                sx={{ width: "150px", boxShadow: "10px 10px lightblue" }}
                placeholder=""
              />
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <img src={MiddleImg2} className="education-image h-[500px] w-[300px]" />
        </div>
      </div>
    </>
  );
};

export default MiddleSection2;
