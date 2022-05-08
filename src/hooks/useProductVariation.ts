import {useGetRequest} from "./useGetRequest";
import {
  ProductVariationParams,
  ProductVariationResponse
} from "../types/api/productVariation";
import {DependencyList, useContext, useEffect} from "react";
import MarketContext from "../contexts/MarketContext";

const useProductVariation = (
  params: ProductVariationParams,
  deps: DependencyList = [],
) => {
  const {setData} = useContext(MarketContext);
  const response = useGetRequest<ProductVariationResponse, ProductVariationParams>(
    '/product-variation/index',
    params,
    deps,
  );

  useEffect(() => {
    setData(prevState => {
      const newState = {...prevState};
      newState.categories = response.data?.data.categories;
      newState.pagination = response.data?.data.meta.pagination;
      newState.categoryTitle = response.data?.data.meta.categoryTitle;
      newState.sort = response.data?.data.meta.sort;
      return newState;
    });
  }, [response.data])

  return response;
}

export default useProductVariation;
