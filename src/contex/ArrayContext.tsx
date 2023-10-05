import { createContext, ReactNode, useState } from "react";
import { arrayData, Items } from "./arrayData"; // notre tableau e paramètre

type ArrayContextProviderProps = {
  children: ReactNode;
};
// type of ArrayContext value
type ArrayContextType = {
  array: Items;
  setArray: React.Dispatch<React.SetStateAction<Items>>;
};

// in param of this function we have our contex from arrayData.ts file
export const ArrayContext = createContext<ArrayContextType | undefined>(
  undefined
);

// create function to export provider
export const ArrayContextProvider = ({
  children,
}: ArrayContextProviderProps) => {
  const [array, setArray] = useState<Items>(arrayData);
  return (
    <ArrayContext.Provider value={{ array, setArray }}>
      {children}
    </ArrayContext.Provider>
  );
};
