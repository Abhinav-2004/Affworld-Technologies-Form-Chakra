import React from "react";
import { AiOutlineUser } from "react-icons/ai";
import { ReactComponent as Logo } from "../Assets/RawSvg/logo.svg";
import { Avatar, AvatarGroup, Button } from "@chakra-ui/react";
import {HiOutlineMail} from "react-icons/hi";
const Navbar = () => {
  return (
    <div className="flex flex-row justify-between h-[15vh] items-center ml-[2%] mr-[3%]">
      <div className="flex-row flex">
        <div>
          <Logo className="w-[5vw] h-[10vw]" />
        </div>
        <div className="flex flex-row items-center justify-center text-2xl font-ubuntu">
          AffWorld Technologies
        </div>
      </div>
      <div className="flex flex-row justify-between items-center gap-4">
        <div>
          <Button leftIcon={<HiOutlineMail />} colorScheme="red" variant="solid">
            Email Us
          </Button>
        </div>
        <div>
          <Button colorScheme="red">Sign In</Button>
        </div>
        <div>
          <AvatarGroup spacing="1rem">
            <Avatar bg="red.500" icon={<AiOutlineUser fontSize="1.5rem" />} />
          </AvatarGroup>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
