import React, { createContext, useState, useContext } from 'react';
import { MedicalCentreData } from '@/data/medicalCentres';

interface Filter {
  area: string;
  department: string;
  state: string;
}

interface FilterContextType {
  filter: Filter;
  setFilter: React.Dispatch<React.SetStateAction<Filter>>;
}

export const filterContext = createContext<FilterContextType>({
  filter: { area: '', department: '', state: '' },
  setFilter: () => {''},
});

export interface FilterProviderProps {
  children: React.ReactNode;
}


export const FilterProvider: React.FC<FilterProviderProps> = ({ children }) => {
  const [filter, setFilter] = useState<Filter>({ area: '', department: '', state: '' });

  return (
    <filterContext.Provider value={{ filter, setFilter }}>
      {children}
    </filterContext.Provider>
  );
};

export default filterContext;