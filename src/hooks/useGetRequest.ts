import {useEffect, useState} from "react";
import request from "../utils/request";

export const useGetRequest = (url: string) => {
  const [data, setData] = useState({});
  const [error, setError] = useState(undefined);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoaded(false);
      try {
        const {data: response} = await request.get(url);
        setData(response);
        setIsLoaded(true);
      } catch (e) {
        // setError(e.message)
      }
    };

    fetchData();
  }, []);

  return {data, error, isLoaded};
}
