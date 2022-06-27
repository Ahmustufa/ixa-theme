import { useState } from "react";

export const useFetch = (query) => {
  const [loading, toggleLoading] = useState(false);

  const mutate = async (body) => {
    try {
      toggleLoading(true);
      const res = await query(body);
      return res;
    } catch (err) {
      throw err;
    } finally {
      toggleLoading(false);
    }
  };

  return [mutate, loading];
};
