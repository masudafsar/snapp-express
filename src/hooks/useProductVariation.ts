import {useGetRequest} from "./useGetRequest";
import {
  ProductVariationParams,
  ProductVariationResponse
} from "../types/api/productVariation";
import {useContext, useEffect} from "react";
import MarketContext from "../contexts/MarketContext";

const useProductVariation = (params: ProductVariationParams) => {
  const {setData} = useContext(MarketContext);
  const response = useGetRequest<ProductVariationResponse, ProductVariationParams>(
    '/product-variation/index',
    params,
  );

  useEffect(() => {
    setData(prevState => {
      const newState = {...prevState};
      newState.categories = response.data?.data?.categories;
      newState.pagination = response.data?.data?.meta.pagination;
      return newState;
    });
  }, [response.data])

  return response;
}

export default useProductVariation;
