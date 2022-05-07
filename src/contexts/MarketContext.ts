import React from "react";
import {marketContextType} from "../types/marketContextType";

const MarketContext = React.createContext<{
  data: marketContextType,
  setData: React.Dispatch<React.SetStateAction<marketContextType>>,
}>({
  data: {},
  setData: value => {
  },
});

export default MarketContext;
