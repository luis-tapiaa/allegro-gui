import { createContext, useContext } from 'react';

const cuestionarioContext = createContext();

export default cuestionarioContext;

export const useCuestionarioContext = () => useContext(cuestionarioContext);
