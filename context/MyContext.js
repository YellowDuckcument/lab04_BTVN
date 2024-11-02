import React, { createContext, useState } from "react";

// Tạo Context
const MyContext = createContext();

export const MyContextProvider = ({ children }) => {
  const [category, setCategory] = useState("");

  return (
    <MyContext.Provider value={{ category, setCategory }}>
      {children}
    </MyContext.Provider>
  );
};

export default MyContext;
