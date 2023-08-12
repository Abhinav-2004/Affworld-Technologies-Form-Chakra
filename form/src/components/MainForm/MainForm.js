import React, { useEffect } from 'react'
import "../CSS/MainForm.css";
import upperImg from "../../Assets/Images/upperImg.png";
import { Input } from "@chakra-ui/react";
import "../CSS/UpperSection.css";
import MiddleImg1 from "../../Assets/Images/middleImg1.jpg";
import "../CSS/MiddleSection1.css";
import MiddleImg2 from "../../Assets/Images/middleImg.jpg";
import { Select } from "@chakra-ui/react";
import "../CSS/MiddleSection2.css";
import { useState } from "react";
import { Checkbox, CheckboxGroup, Button,Spinner} from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";
import {
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
  } from '@chakra-ui/react'
import PasswordCheck from './PasswordCheck';
const MainForm = () => {
    const[name,setName]=useState("");
    const[password,setPassword]=useState("");
    const[phone,setPhone]=useState("");
    const[email,setEmail]=useState("");
    const[address1,setAddress1]=useState("");
    const[address2,setAddress2]=useState("");
    const[pincode,setPincode]=useState("");
    const[city,setCity]=useState("");
    const[state,setState]=useState("");
    const[country,setCountry]=useState("");
    const[qualification,setQualification]=useState("");
    const[college,setCollege]=useState("");
    const[cityCollege,setCityCollege]=useState("");
    const[stateCollege,setStateCollege]=useState("");
    const[gpa,setGpa]=useState("");
    const[university,setUniversity]=useState("");
      const toast = useToast();
      const [buffer, setBuffer] = useState(false);
      const[check,setCheck]=useState(false);
      function handleBuffer() {
        setTimeout(() => {
          setBuffer(false);
          handleSubmit();
        }, 2000);

      }

    function isEmail(eemail) {
        for (var i = 0; i < eemail.length; i++)
          if (eemail.charAt(i) === "@") return true;
        return false;
      }
  
    function isTextField(nname){
        if(nname!==""){
            return true;
        }
        return false;
    }

    function isMobile(mobile){
        if(mobile!==""){
            if(mobile.length===10){
                return true;
            }
        }
    }
    useEffect(()=>{
        //for password
    })
    function isPincode(pincode){
        if(pincode!==""){
            if(pincode.length===6){
            return true;}
        }
    }
    function isGpa(gpa){
        if(gpa!==""){
            if(gpa>=0 && gpa<=10){
                return true
            }
        }
    }
    
    function handleSubmit(){
        if(isEmail(email) && isTextField(name) && isMobile(phone) && isTextField(address1) && isTextField(address2) && isTextField(city) && isTextField(state) && isTextField(country) && isPincode(pincode) && isTextField(qualification) && isTextField(university) && isGpa(gpa) && isTextField(cityCollege) && isTextField(college) && isTextField(stateCollege)){
            toast({
                title: "Thank You",
                description: "We've Recorder Your Response",
                status: "success",
                duration: 4000,
                isClosable: true,
              });
        }
        
            if(!isEmail(email)){
                toast({
                    title: "Invalid Email",
                    description: "Please Check Your Mail",
                    status: "error",
                    duration: 2000,
                    isClosable: true,
                  });
            }
            if(!isTextField(name)){
                toast({
                    title: "Name Empty",
                    description: "Please Check Your Name",
                    status: "error",
                    duration: 2000,
                    isClosable: true,
                  });
            }
            if(!isMobile(phone)){
                toast({
                    title: "Invalid Phone Number",
                    description: "It must be 10 Digits",
                    status: "error",
                    duration: 2000,
                    isClosable: true,
                  });
            }
            if(!isTextField(address1)){
                toast({
                    title: "Address Empty",
                    description: "Please Check Your Address Line 1",
                    status: "error",
                    duration: 2000,
                    isClosable: true,
                  });
            }
            if(!isTextField(address2)){
                toast({
                    title: "Address Empty",
                    description: "Please Check Your Address Line 2",
                    status: "error",
                    duration: 2000,
                    isClosable: true,
                  });
            }
            if(!isTextField(city)){
                toast({
                    title: "City Empty",
                    description: "Please Check Your City in Address",
                    status: "error",
                    duration: 2000,
                    isClosable: true,
                  });
            }
            if(!isTextField(state)){
                toast({
                    title: "State Empty",
                    description: "Please Check Your State in Address",
                    status: "error",
                    duration: 2000,
                    isClosable: true,
                  });
            }
            if(!isTextField(country)){
                toast({
                    title: "Country Empty",
                    description: "Please Check Your Country in Address",
                    status: "error",
                    duration: 2000,
                    isClosable: true,
                  });
            }
            if(!isTextField(qualification)){
                toast({
                    title: "Qualifcation Empty",
                    description: "Please Check Your Qualifcation",
                    status: "error",
                    duration: 2000,
                    isClosable: true,
                  });
            }
            if(!isGpa(gpa)){
                toast({
                    title: "Invalid GPA",
                    description: "Please Enter between 1-10",
                    status: "error",
                    duration: 2000,
                    isClosable: true,
                  });
            }
            if(!isPincode(pincode)){
                toast({
                    title: "Invalid Pincode",
                    description: "Pincode must be a 6-digit number",
                    status: "error",
                    duration: 2000,
                    isClosable: true,
                  });
            }
            if(!isTextField(college)){
                toast({
                    title: "College Empty",
                    description: "Please Check Your College Name",
                    status: "error",
                    duration: 2000,
                    isClosable: true,
                  });
            }
            if(!isTextField(university)){
                toast({
                    title: "University Empty",
                    description: "Please Check Your University",
                    status: "error",
                    duration: 2000,
                    isClosable: true,
                  });
            }
            if(!isTextField(cityCollege)){
                toast({
                    title: "City of College Empty",
                    description: "Please Check Your City in Education details",
                    status: "error",
                    duration: 2000,
                    isClosable: true,
                  });
            }
            if(!isTextField(stateCollege)){
                toast({
                    title: "State of College Empty",
                    description: "Please Check Your State in Education details",
                    status: "error",
                    duration: 2000,
                    isClosable: true,
                  });
            }
        }
        
    
  return (
  <>
    
    <div className= "flex flex-col gap-24">
        <div>
        <div className="main-div flex flex-row justify-center gap-40 items-center ml-11">
        <div className="flex flex-col justify-between items-center gap-20">
          <span className="text-2xl border-b-2 border-slate-600 font-ubuntu p-3">Personal Details</span>
        <div className="flex flex-row justify-start items-center gap-7">
            <div className="text-xl font-ubuntu">Name </div>
            <div>
              <Input onChange={(e)=>setName(e.target.value)} className="inputName" type="name" autoComplete="off" name="name" id="name" sx={{width:"300px",
            boxShadow:"10px 10px lightblue",
            }} placeholder=""/>

            </div>
          </div>
          <div className="flex flex-row justify-start items-center gap-7">
            <div className="text-xl font-ubuntu">Password </div>
            <div className='flex flex-col gap-8 justify-center items-center'>
              <div><Input onChange={(e)=>setPassword(e.target.value)} className="inputPassword" type="password" autoComplete="off" id="password" name="password"sx={{width:"280px",
            boxShadow:"10px 10px lightblue"}} placeholder="" /></div>
            <div className=''>
                <PasswordCheck password={password}/>
            </div>
            </div>
          </div>

          <div className="flex flex-row justify-start items-center gap-7">
            <div className="text-xl font-ubuntu">Mobile </div>
            <div>
              <Input onChange={(e)=>setPhone(e.target.value)}  className="inputMobile" autoComplete="off" name="mobile" id="mobile" type="number" sx={{width:"300px",
            boxShadow:"10px 10px lightblue"}} placeholder=""/>
            </div>
          </div>
          <div className="flex flex-row justify-start items-center gap-7">
            <div className="text-xl font-ubuntu">Email </div>
            <div>
              <Input onChange={(e)=>setEmail(e.target.value)}  className="inputEmail" autoComplete="off" name="email" id="email" type="email" sx={{width:"300px",
                boxShadow:"10px 10px lightblue"
            }} placeholder=""/>
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
              <Input onChange={(e)=>setAddress1(e.target.value)} className="inputAddress1" type="text" autoComplete="off" name="address1" id="address1" sx={{width:"500px",
            boxShadow:"10px 10px lightblue",
            }} placeholder="" />
            </div>
            <div className="text-xl font-ubuntu">Address Line 2 </div>
            <div>
              <Input onChange={(e)=>setAddress2(e.target.value)} className="inputAddress2" type="text" autoComplete="off" name="address2" id="address2" sx={{width:"500px",
            boxShadow:"10px 10px lightblue",
            }} placeholder="" />
            </div>

          </div>
          <div className="column-div flex flex-row justify-start items-center gap-7">
            <div className="text-xl font-ubuntu">Pincode </div>
            <div>
              <Input onChange={(e)=>setPincode(e.target.value)} className="inputPincode" type="number" autoComplete="off" name="pincode" id="pincode" sx={{width:"100px",
            boxShadow:"10px 10px lightblue"}} placeholder="" />
            </div>
            <div className="text-xl font-ubuntu">City </div>
            <div>
              <Input onChange={(e)=>setCity(e.target.value)} className="inputCity" type="text" autoComplete="off" name="city" id="city" sx={{width:"200px",
            boxShadow:"10px 10px lightblue"}} placeholder="" />
            </div>
          </div>
          <div className="column-div flex flex-row justify-start items-center gap-7">
            <div className="text-xl font-ubuntu">State </div>
            <div>
              <Input className="inputState" onChange={(e)=>setState(e.target.value)}  type="text" autoComplete="off" name="state" id="state" sx={{width:"150px",
            boxShadow:"10px 10px lightblue"}} placeholder="" />
            </div>
            <div className="text-xl font-ubuntu">Country </div>
            <div>
              <Input onChange={(e)=>setCountry(e.target.value)} className="inputCountry" type="text" autoComplete="off" name="country" id="country" sx={{width:"150px",
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
              <Select onChange={(e)=>setQualification(e.target.value)}  name="qualification" id="qualification"sx={{width:"300px" , boxShadow: "10px 10px lightblue" }} placeholder='select'>
                <option value="Intermidiate" className="p-10 text-xl font-ubuntu text-red-500">Intermidiate</option>
                <option value="Bachelors" className="p-10 text-xl font-ubuntu text-red-600">Bachelors</option>
                <option value="Masters" className="p-10 text-xl font-ubuntu text-red-700">Masters</option>
              </Select>
            </div>
            <div className="text-xl font-ubuntu">Percentage/Gpa </div>
            <div>
              <Input onChange={(e)=>setGpa(e.target.value)} type="number"
                sx={{ width: "100px", boxShadow: "10px 10px lightblue" }}
                placeholder=""
              />
            </div>
          </div>
          <div className="column-div-1 flex flex-row justify-start items-center gap-7">
            <div className="text-xl font-ubuntu">University </div>
            <div>
              <Input onChange={(e)=>setUniversity(e.target.value)}  type="text" autoComplete="off" name="university" id="university"
                sx={{ width: "200px", boxShadow: "10px 10px lightblue" }}
                placeholder=""
              />
            </div>
            <div className="text-xl font-ubuntu">College </div>
            <div>
              <Input onChange={(e)=>setCollege(e.target.value)}  type="text" autoComplete="off" name="college" id="college"
                sx={{ width: "200px", boxShadow: "10px 10px lightblue" }}
                placeholder=""
              />
            </div>
          </div>
          <div className="column-div-1 flex flex-row justify-start items-center gap-7">
            <div className="text-xl font-ubuntu">City </div>
            <div>
              <Input onChange={(e)=>setCityCollege(e.target.value)}  type="text" autoComplete="off" name="cityCollege" id="cityCollege"
                sx={{ width: "150px", boxShadow: "10px 10px lightblue" }}
                placeholder=""
              />
            </div>
            <div className="text-xl font-ubuntu">State </div>
            <div>
              <Input onChange={(e)=>setStateCollege(e.target.value)}  type="text" autoComplete="off" name="stateCollege" id="stateCollege"
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
            </Button>
          </>
        )}
      </div>
        </div>
    </div>
    </>)
}

export default MainForm
