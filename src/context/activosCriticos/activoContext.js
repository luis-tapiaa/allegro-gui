import { createContext, useContext } from 'react';

const activoContext = createContext();

export default activoContext;

export const useActivoContext = () => useContext(activoContext);
