import React from "react";
import { useQuery } from "@tanstack/react-query";
import { Axios } from "axios";

const useGetCat = () => {
  const [data, refetch] = useQuery({
    queryKey: ["cat"],
    queryFn: async () => {
      const res = await Axios.get("https://catfact.ninja/fact");
      return res.data;
    },
  });
  const refetchData = () => {
    refetch();
    console.log("data refetched");
  };
  return { data, refetchData };
};

export default useGetCat;

// doesn't work as a custom hook
