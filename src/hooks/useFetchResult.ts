import {useState, useEffect} from "react";
import { TResult } from "../types";
import axios from "axios";

export const useFetchResult = (url: string, correctAnswersCounter: number) => {
  const [data, setData] = useState<TResult>();
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<TResult>(url, {
          params: {
            correctAnswersCounter
          }
        });
        setData(response.data);
      } catch (err) {
        setError(String(err));
      }

    };

    fetchData();

    setIsLoading(false);
  }, [correctAnswersCounter]);

  return {data, error, isLoading};
};
