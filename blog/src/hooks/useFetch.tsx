import { useState, useEffect } from "react";
import axios from "axios";

export const useFetch = (url: string, limit?: number) => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          limit ? `${url}?_limit=${limit}` : url
        );
        setData(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url, limit]);

  return { data, loading, error };
};

export default useFetch;
