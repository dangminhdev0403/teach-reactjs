import React, { createContext, useState } from "react";

const AppContext = createContext();

const FilterProvider = ({ children }) => {
  const [activeFilter, setActiveFilter] = useState("all");

  return (
    <AppContext.Provider value={{ activeFilter, setActiveFilter }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, FilterProvider as default };
