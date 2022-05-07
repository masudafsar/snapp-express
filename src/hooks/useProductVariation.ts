import {useGetRequest} from "./useGetRequest";

const useProductVariation = () => {
  return useGetRequest('/product-variation/index');
}

export default useProductVariation;
