import { useState, useEffect } from "react";
import { Axios } from "axios";

const useFetch = ({ endpoint, query }) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const options = {
    method: "GET",
    url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    headers: {
      "X-RapidAPI-Key": "75ebcc717fmshe9f7994f64b3e66p158d2ajsnae49f55b3142",
      "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
    },
    params: {
      query: { ...query },
    },
  };

  const fetchData = async () => {
    isLoading = true;

    try {
      const response = await axios.request(options);

      setData(response.data.data);
      setIsLoading(false);
    } catch (error) {
      setError(error);
      alert("there is an error");
    } finally {
      isLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const refetch = () => {
    setIsLoading(true);
    fetchData();
  };

  return { data, isLoading, error, refetch };
};

export default useFetch;
