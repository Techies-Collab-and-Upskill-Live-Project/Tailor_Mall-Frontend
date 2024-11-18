import axios from "axios";
import { useCallback, useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { UserContext } from "../Context/UserContext";

// const BASE_URL = "http://localhost:5500/api/v1/job?clientId=66f1a68e5e62e963a32f54bb";

const useGetProducts = () => {
  let { id } = useParams();
  const [products, setProducts] = useState([]);
  const [singleProducts, setSingleProducts] = useState([]);
  const baseUrl = import.meta.env.VITE_API_ENDPOINT_URL;
  const { token } = useContext(UserContext);

  // const BASE_URL = `http://localhost:5500/api/v1/job?${id}`;
  const BASE_URL = import.meta.env.VITE_API_ENDPOINT_URL;
  // https://tailors-mall-backend.onrender.com/api/v1/
  // job?clientId=66f1a68e5e62e963a32f54bb
  //   http://localhost:5500/api/v1/job?id=66f5d0dbee99e692dc27d136

  const getSingleJob = async (id) => {
    try {
      // const response = axios.get(`${baseUrl}/job?id=${id}`, {
      const response = axios.get(`${baseUrl}/job?id=673aa7f3d4bde4043787e561`, {
        headers: {
          Authorization: `Bearer ${ token }`,
        },
      });

      console.log(id);

      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  // const getJob = async () => {
  //   try {
  //     const response = await axios.get(`${baseUrl}/job`, {
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //       },
  //     });

  //     const data = response?.data?.data;

  //     setJob(data);
  //   } catch (error) {
  //     const message = error?.response?.data?.message;
  //     if (message) {
  //       navigate("/")
  //     }
  //     console.log(error?.response?.data?.message);
  //   }
  // };

  //   const getSingleProduct = useCallback(() => {
  //     axios.get(`${BASE_URL}/${id}.json`).then((response) => {
  //       setSingleProducts(response.data);
  //       // console.log("Getting single products");
  //       // getRecomendedProducts(response.data);
  //     });
  //   });

  return {
    BASE_URL,
    getSingleJob,
    // products,
    // getTopProduct,
    // getSingleProduct,
    // singleProducts,
  };
};

export default useGetProducts;
