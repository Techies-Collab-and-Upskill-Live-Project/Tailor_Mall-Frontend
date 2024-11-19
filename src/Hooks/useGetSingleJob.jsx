import axios from "axios";
import { useCallback, useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { UserContext } from "../Context/UserContext";

// const BASE_URL = "http://localhost:5500/api/v1/job?clientId=66f1a68e5e62e963a32f54bb";

const useGetProducts = () => {
  let { id } = useParams();
  const [singleJob, setSingleJob] = useState(null);
  const { token } = useContext(UserContext);

  const BASE_URL = import.meta.env.VITE_API_ENDPOINT_URL;

  // useEffect(() => {
  const getSingleJob = async (id) => {
    try {
      const response = await axios.get(`${BASE_URL}/job?id=${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = response?.data?.data;
      setSingleJob(data);
      console.log(singleJob);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSingleJob();
}, [id, getSingleJob]);
  // }, []);

  return {
    BASE_URL,
    // getSingleJob,
    singleJob
    // products,
    // getTopProduct,
    // getSingleProduct,
    // singleProducts,
  };
};

export default useGetProducts;
