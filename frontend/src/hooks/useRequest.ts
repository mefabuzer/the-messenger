import axios from "axios";
import { useEffect, useState } from "react";

export function useRequest<T>(
  str: string,
  obj: T,
): [T | null, boolean, Error | null] {
  const [data, setData] = useState<T>(null as T);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    try {
      setIsLoading(true);

      (async () => {
        const response = await axios.post<T>(str, obj);

        setData(response.data);
      })();
    } catch (error) {
      if (error instanceof Error) {
        setError(error);
      }
    } finally {
      setIsLoading(false);
    }
  }, []);

  return [data, isLoading, error];
}
