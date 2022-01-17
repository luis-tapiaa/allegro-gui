import { createContext, useContext } from 'react';

const contenedorContext = createContext();

export default contenedorContext;

export const useContenedorContext = () => useContext(contenedorContext);
