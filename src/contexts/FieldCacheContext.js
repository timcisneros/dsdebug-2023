import { createContext, useContext, useState } from 'react';

const CacheContext = createContext();

export const useCache = () => {
    return useContext(CacheContext);
};

export const FieldCacheProvider = ({ children }) => {
    const [cache, setCache] = useState({});

    return (
        <CacheContext.Provider value={{ cache, setCache }}>
            {children}
        </CacheContext.Provider>
    );
};
