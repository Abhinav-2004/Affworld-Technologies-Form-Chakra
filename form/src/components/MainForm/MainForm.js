import React from 'react'
import "../CSS/MainForm.css";
import upperImg from "../../Assets/Images/upperImg.png";
import { Input } from "@chakra-ui/react";
import "../CSS/UpperSection.css";
import {useFormik} from "formik";
import MiddleImg1 from "../../Assets/Images/middleImg1.jpg";
import "../CSS/MiddleSection1.css";
import MiddleImg2 from "../../Assets/Images/middleImg.jpg";
import { Select } from "@chakra-ui/react";
import "../CSS/MiddleSection2.css";
import { useState } from "react";
import { Checkbox, CheckboxGroup, Button,Spinner} from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";
const initialValues={
    name:"",
    password:"",
    email:"",
    phone:"",
  }


const MainForm = () => {
    const {values, errors, handleBlur, handleChange}=useFormik({
        initialValues:initialValues,
      })
      const toast = useToast();
      const [buffer, setBuffer] = useState(false);
      const[check,setCheck]=useState(false);
      function handleBuffer() {
        setTimeout(() => {
          setBuffer(false);
          toast({
            title: "Thank You",
            description: "We've Recorder Your Response",
            status: "success",
            duration: 4000,
            isClosable: true,
          });
        }, 2000);
      }
      function handleCheckbox() {
        setCheck(true);
    }
  return (<>
    <div className= "flex flex-col gap-24">
        <div>
        <div className="main-div flex flex-row justify-center gap-40 items-center ml-11">
        <div className="flex flex-col justify-between items-center gap-20">
          <span className="text-2xl border-b-2 border-slate-600 font-ubuntu p-3">Personal Details</span>
        <div className="flex flex-row justify-start items-center gap-7">
            <div className="text-xl font-ubuntu">Name </div>
            <div>
              <Input className="inputName" type="name" autoComplete="off" name="name" id="name" sx={{width:"300px",
            boxShadow:"10px 10px lightblue",
            }} placeholder="" value={values.name} onChange={handleChange}
            onBlur={handleBlur}/>
            </div>
          </div>
          <div className="flex flex-row justify-start items-center gap-7">
            <div className="text-xl font-ubuntu">Password </div>
            <div>
              <Input className="inputPassword" type="password" autoComplete="off" id="password" name="password"sx={{width:"280px",
            boxShadow:"10px 10px lightblue"}} placeholder="" value={values.password} onChange={handleChange}
            onBlur={handleBlur}/>
            </div>
          </div>
          <div className="flex flex-row justify-start items-center gap-7">
            <div className="text-xl font-ubuntu">Mobile </div>
            <div>
              <Input className="inputMobile" autoComplete="off" name="mobile" id="mobile" type="number" sx={{width:"300px",
            boxShadow:"10px 10px lightblue"}} placeholder="" value={values.mobile} onChange={handleChange}
            onBlur={handleBlur}/>
            </div>
          </div>
          <div className="flex flex-row justify-start items-center gap-7">
            <div className="text-xl font-ubuntu">Email </div>
            <div>
              <Input className="inputEmail" autoComplete="off" name="email" id="email" type="email" sx={{width:"300px",
                boxShadow:"10px 10px lightblue"
            }} placeholder="" value={values.email} onChange={handleChange}
            onBlur={handleBlur}/>
            </div>
          </div>
        </div>
        <div>
          <img src={upperImg} className="imageUpper h-[35vw] w-[35vw]" />
        </div>
      </div>
        </div>
        <div>
        <div className="main-div flex flex-row justify-evenly gap-52 items-center ml-11">
      <div>
          <img src={MiddleImg1} className="imageMiddle1 h-[35vw] w-[35vw]" />
        </div>
        <div className="main-div2 flex flex-col justify-center items-center gap-20 pr-40">
        <span className="text-2xl border-b-2 border-slate-600 font-ubuntu p-3">Address</span>
        <div className="flex flex-col justify-start items-center gap-7">
            <div className="text-xl font-ubuntu">Address Line 1 </div>
            <div>
              <Input className="inputAddress1" type="text" autoComplete="off" name="address1" id="address1" sx={{width:"500px",
            boxShadow:"10px 10px lightblue",
            }} placeholder="" />
            </div>
            <div className="text-xl font-ubuntu">Address Line 2 </div>
            <div>
              <Input className="inputAddress2" type="text" autoComplete="off" name="address2" id="address2" sx={{width:"500px",
            boxShadow:"10px 10px lightblue",
            }} placeholder="" />
            </div>

          </div>
          <div className="column-div flex flex-row justify-start items-center gap-7">
            <div className="text-xl font-ubuntu">Pincode </div>
            <div>
              <Input className="inputPincode" type="number" autoComplete="off" name="pincode" id="pincode" sx={{width:"100px",
            boxShadow:"10px 10px lightblue"}} placeholder="" />
            </div>
            <div className="text-xl font-ubuntu">City </div>
            <div>
              <Input className="inputCity" type="text" autoComplete="off" name="city" id="city" sx={{width:"200px",
            boxShadow:"10px 10px lightblue"}} placeholder="" />
            </div>
          </div>
          <div className="column-div flex flex-row justify-start items-center gap-7">
            <div className="text-xl font-ubuntu">State </div>
            <div>
              <Input className="inputState" type="text" autoComplete="off" name="state" id="state" sx={{width:"150px",
            boxShadow:"10px 10px lightblue"}} placeholder="" />
            </div>
            <div className="text-xl font-ubuntu">Country </div>
            <div>
              <Input className="inputCountry" type="text" autoComplete="off" name="country" id="country" sx={{width:"150px",
            boxShadow:"10px 10px lightblue"}} placeholder="" />
            </div>
          </div>
          
        </div>
        
      </div>
        </div>
        <div>
        <div className="middlesection2-div flex flex-row justify-evenly gap-52 items-center ml-11">
        <div className="middlesection2-div2 flex flex-col justify-center items-center gap-20 ">
          <span className="text-2xl font-ubuntu border-b-2 border-slate-700 p-3">Educational Details</span>
          <div className="column-div-1 flex flex-row justify-start items-center gap-7">
            <div className="text-xl font-ubuntu">Highest Qualification </div>
            <div>
              <Select autoComplete="off" name="qualification" id="qualification"sx={{width:"300px" , boxShadow: "10px 10px lightblue" }}>
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
              <Input type="text" autoComplete="off" name="university" id="university"
                sx={{ width: "200px", boxShadow: "10px 10px lightblue" }}
                placeholder=""
              />
            </div>
            <div className="text-xl font-ubuntu">College </div>
            <div>
              <Input type="text" autoComplete="off" name="college" id="college"
                sx={{ width: "200px", boxShadow: "10px 10px lightblue" }}
                placeholder=""
              />
            </div>
          </div>
          <div className="column-div-1 flex flex-row justify-start items-center gap-7">
            <div className="text-xl font-ubuntu">City </div>
            <div>
              <Input type="text" autoComplete="off" name="city" id="city"
                sx={{ width: "150px", boxShadow: "10px 10px lightblue" }}
                placeholder=""
              />
            </div>
            <div className="text-xl font-ubuntu">State </div>
            <div>
              <Input type="text" autoComplete="off" name="stateCollege" id="stateCollege"
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
        </div>
        <div>
        <div className="flex flex-col justify-center gap-10 items-center m-11">
        <div className="flex flex-col justify-between items-center gap-20">
          <div className="flex flex-row justify-start items-center gap-7">
            <div>
              <Checkbox colorScheme="green" id="checkbox" onClick={handleCheckbox}>
                <div className="flex text-xl font-ubuntu">Agree to T&C</div>
              </Checkbox>
            </div>
          </div>
        </div>
        {!buffer && (
          <>
            <Button
              onClick={() => {
                setBuffer(true);
                handleBuffer();
              }}
              colorScheme="red"
              sx={{ boxShadow: "5px 5px black" }}
            >
              Submit
            </Button>
          </>
        )}

        {buffer && (
          <>
            <Button
              isLoading
              colorScheme="red"
              spinner={<Spinner sx={{width:"20px"}} color="white" />}
            >
              Click me
            </Button>
          </>
        )}
      </div>
        </div>
    </div>
    </>)
}

export default MainForm
