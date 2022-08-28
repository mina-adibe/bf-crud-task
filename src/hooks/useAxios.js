import { useEffect, useState } from "react";
//import axios from "axios";
import { axiosInstance } from "../network/apis";

const useAxios = (id) => {
  const [data, setData] = useState({});
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    const getPostDeatils = async (id) => {
      return await axiosInstance
        .get(`/posts/${id}`, { signal: controller.signal })
        .then((res) => {
          if (res.status === 200) {
            setData(res.data);
          }
        })
        .catch((error) => {
          setError(error.message);
        });
    };
    getPostDeatils(id);

    return () => controller.abort();
  }, [id]);

  return { data, error };
};

export default useAxios;
