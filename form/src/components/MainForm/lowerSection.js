import React from "react";
import { Checkbox, CheckboxGroup,Button } from "@chakra-ui/react";
const lowerSection = () => {
  return (
    <>
      <div className="flex flex-col justify-center gap-10 items-center m-11">
        <div className="flex flex-col justify-between items-center gap-20">
          <div className="flex flex-row justify-start items-center gap-7">
            <div>
              <Checkbox colorScheme="green">
                <div className="flex text-xl font-ubuntu">
                  Agree to Terms and Conditions 
                </div>
              </Checkbox>
            </div>
          </div>
        </div>
        <Button colorScheme='red' sx={{boxShadow:"5px 5px black"}}>Submit</Button>
      </div>
    </>
  );
};

export default lowerSection;
