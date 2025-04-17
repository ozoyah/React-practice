import React from "react";
import { useQuery } from "@tanstack/react-query";
import Axios from "axios";

const Homes = () => {
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["cat"],
    queryFn: async () => {
      return Axios.get("https://catfact.ninja/fact").then((res) => res.data);
    },
  });

  if (isLoading) {
    return <h1>Loading.... </h1>;
  }

  return (
    <>
      <h1>Welcome to Home.</h1>
      <p>{data?.fact}</p>
      <button onClick={refetch}>Update fact</button>
    </>
  );
};

export default Homes;
