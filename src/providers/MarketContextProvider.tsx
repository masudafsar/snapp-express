import React, {useState} from "react";
import {marketContextType} from "../types/marketContextType";
import MarketContext from '../contexts/MarketContext'

interface Props {
  children: React.ReactNode;
}

const MarketContextProvider: React.FC<Props> = ({children}) => {
  const [marketContext, setMarketContext] = useState<marketContextType>({});

  return (
    <MarketContext.Provider
      value={{
        data: marketContext,
        setData: setMarketContext,
      }}
    >
      {children}
    </MarketContext.Provider>
  );
}

export default MarketContextProvider;
