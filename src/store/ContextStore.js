import React from 'react';
import {createContext, useState} from 'react';

export const ContextStoreProvider = createContext({
  Ids: [],
  addFaviouriteMeal: id => {},
  removeFaviouriteMeal: id => {},
});

const ContextProvider = ({children}) => {
  const [Ids, setIds] = useState([]);
  const addFaviouriteMeal = id => {
    setIds(prev => [...prev, id]);
  };

  const removeFaviouriteMeal = id => {
    setIds(prev => prev.filter(item => item !== id));
  };

  const initValue = {
    Ids,
    addFaviouriteMeal,
    removeFaviouriteMeal,
  };

  return (
    <ContextStoreProvider.Provider value={initValue}>{children}</ContextStoreProvider.Provider>
  );
};

export default ContextProvider;
