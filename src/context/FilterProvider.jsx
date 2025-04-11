import React, { createContext, useMemo, useState } from "react";

const AppContext = createContext();

const FilterProvider = ({ children }) => {
  const [activeFilter, setActiveFilter] = useState("all");

  const value = useMemo(
    () => ({ activeFilter, setActiveFilter }),
    [activeFilter, setActiveFilter]
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export { AppContext, FilterProvider as default };
