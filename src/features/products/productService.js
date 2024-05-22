import axios from "axios";
import {base_url} from "../../utils/base_url"
const config = {
    headers: {
      "Access-Control-Allow-Origin": "https://e-commerce-app-frontend-pink.vercel.app",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
    }
};
const getProducts =async(data)=>{
    const response=await axios.get(`${base_url}product?${data?.brand?`brand=${data?.brand}&&`:""}${data?.tag?`tags=${data?.tag}&&`:""}${data?.category?`category=${data?.category}&&`:""}${data?.minPrice?`price[gte]=${data?.minPrice}&&`:""}${data?.maxPrice?`price[lte]=${data?.maxPrice}&&`:""}${data?.sort?`sort=${data?.sort}&&`:""}`,config);
    return response.data;
}
const getAProduct=async(id)=>{
    const response=await axios.get(`${base_url}product/${id}`,config);
    return response.data;
}
const rateProduct=async(data)=>{
    const response=await axios.put(`${base_url}product/rating`,
    {
        prodId:data.prodId,
        comment:data.comment,
        star:data.star
    }
    ,data.config2);
    return response.data;
}
export const productService={
    getProducts,
    getAProduct,
    rateProduct,
}