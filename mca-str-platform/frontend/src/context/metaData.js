import React, { createContext, useContext, useState } from "react";

const defaultTheme = localStorage.getItem("theme") || "light";

const contextDefaultValues = {
  theme: defaultTheme,
  setTheme: (data) => data,
};

const MetaDataContext = createContext(contextDefaultValues);

export const MetaDataProvider = ({ children }) => {
  const [theme, setTheme] = useState(contextDefaultValues.theme);

  return (
    <MetaDataContext.Provider
      value={{
        theme,
        setTheme,
      }}
    >
      {children}
    </MetaDataContext.Provider>
  );
};

export default () => useContext(MetaDataContext);
