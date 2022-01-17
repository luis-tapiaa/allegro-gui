import { createContext, useContext } from 'react';

const areaContext = createContext();

export default areaContext;

export const useAreaContext = () => useContext(areaContext);
