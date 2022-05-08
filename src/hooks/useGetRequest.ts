import {DependencyList, useEffect, useState} from "react";
import request from "../utils/request";

export const useGetRequest = <ResponseT, ParamsT = any>(
  url: string,
  params?: ParamsT,
  deps: DependencyList = [],
) => {
  const [data, setData] = useState<ResponseT>();
  const [error, setError] = useState(undefined);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoaded(false);
      try {
        const {data: response} = await request.get<ResponseT>(url, {
          params: params,
        });
        setData(response);
        setIsLoaded(true);
      } catch (e) {
        // setError(e.message)
      }
    };

    fetchData();
  }, deps);

  return {data, error, isLoaded};
}
