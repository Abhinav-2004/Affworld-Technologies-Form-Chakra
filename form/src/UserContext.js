import { createContext, useEffect } from "react";
import { useState } from "react";
export const UserContext = createContext({});
export function UserContextProvider({ children }) {
  const [upperData, setUpperData] = useState(false);
  const [middleData1, setMiddleData1] = useState(false);
  const [middleData2, setMiddleData2] = useState(false);
  const [lowerData, setLowerData] = useState(false);

  return (
    <UserContext.Provider
      value={{
        upperData,
        setUpperData,
        middleData1,
        setMiddleData1,
        middleData2,
        setMiddleData2,
        setLowerData,
        lowerData,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
