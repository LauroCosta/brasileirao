import { createContext, ReactNode, useContext, useState} from "react";
import { Position } from '../types'

export type ClassificationContextData = {
  positions: Position[];
  setPositions: (positions: Position[]) => void;
}

export const ClassificationContext = createContext({} as ClassificationContextData)

type ClassificationProviderProps = {
  children: ReactNode;
}

export function ClassificationContextProvider({ children }: ClassificationProviderProps) {
  const [positions, setPositions] = useState([]);
  return (
    <ClassificationContext.Provider 
      value={{
        positions,
        setPositions,
      }}
    >
      {children}
    </ClassificationContext.Provider>
  )
}

export const useClassification = () => {
  return useContext(ClassificationContext);
}