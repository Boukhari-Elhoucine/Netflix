import React, { useState, createContext } from "react";
export const ActiveContext = createContext();
export const ActiveProvider = ({ children }) => {
  const [active, setActive] = useState("");
  return (
    <ActiveContext.Provider value={[active, setActive]}>
      {children}
    </ActiveContext.Provider>
  );
};
