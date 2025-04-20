import React from "react";
import { useQuery } from "@tanstack/react-query";
import Axios from "axios";
import useGetCat from "../useGetCat";

const Homes = () => {
  const { data, refetch, isLoading } = useQuery({
    queryKey: ["cat"],
    queryFn: async () => {
      const res = await Axios.get("https://catfact.ninja/fact");
      return res.data;
    },
  });

  if (isLoading) return <h1>Loading...</h1>;
  const refetchData = () => {
    refetch();
    console.log("data refetched");
  };

  return (
    <>
      <h1>Welcome to Home.</h1>
      <p>{data?.fact}</p>
      <button onClick={refetchData}>Update fact</button>
    </>
  );
};

export default Homes;
