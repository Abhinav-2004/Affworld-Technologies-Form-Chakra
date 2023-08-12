import React, { useContext } from "react";
import { Checkbox, CheckboxGroup,Button } from "@chakra-ui/react";
import { useToast } from '@chakra-ui/react'
import { UserContext } from "../../UserContext";
const LowerSection = () => {
    const toast = useToast()
    const {lowerData,setLowerData}=useContext(UserContext);
  return (
    <>
      <div className="flex flex-col justify-center gap-10 items-center m-11">
        <div className="flex flex-col justify-between items-center gap-20">
          <div className="flex flex-row justify-start items-center gap-7">
            <div>
              <Checkbox colorScheme="green">
                <div className="flex text-xl font-ubuntu">
                  Agree to T&C 
                </div>
              </Checkbox>
            </div>
          </div>
        </div>
        <Button onClick={() =>
        toast({
          title: 'Thank You',
          description: "We've Recorder Your Response",
          status: 'success',
          duration: 4000,
          isClosable: true,
        }) }colorScheme='red' sx={{boxShadow:"5px 5px black"}}>Submit</Button>
      </div>
    </>
  );
};

export default LowerSection;
