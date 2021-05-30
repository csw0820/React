import React, { createContext, useState } from 'react';

const Context = createContext(); //1.저장소 만듬

const ContextProvider = ({ children }) => {
  const [name, setName] = useState('최승우');
  return (
    <Context.Provider
      value={{
        name,
        setName,
      }}>
      {children}
    </Context.Provider>
  );
};

export { ContextProvider, Context };
