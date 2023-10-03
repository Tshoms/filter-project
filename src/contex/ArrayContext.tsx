import { createContext, ReactNode } from "react";
import { arrayData } from "./arrayData"; // notre tableau e paramètre

type ArrayContextProviderProps = {
  children: ReactNode;
};

// in param of this function we have our contex from arrayData.ts file
export const ArrayContext = createContext(arrayData);

// create function to export provider
export const ArrayContextProvider = ({
  children,
}: ArrayContextProviderProps) => {
  return (
    <ArrayContext.Provider value={arrayData}>{children}</ArrayContext.Provider>
  );
};
