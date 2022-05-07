import {useGetRequest} from "./useGetRequest";
import {
  ProductVariationParams,
  ProductVariationResponse
} from "../types/api/productVariation";

const useProductVariation = (params: ProductVariationParams) => {
  return useGetRequest<ProductVariationResponse, ProductVariationParams>(
    '/product-variation/index',
    params,
  );
}

export default useProductVariation;
