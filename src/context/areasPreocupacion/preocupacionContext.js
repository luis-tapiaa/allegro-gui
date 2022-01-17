import { createContext, useContext } from 'react';

const preocupacionContext = createContext();

export default preocupacionContext;

export const usePreocupacionContext = () => useContext(preocupacionContext);
