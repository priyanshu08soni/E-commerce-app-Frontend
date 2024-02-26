import axios from "axios";
import {base_url} from "../../utils/axiosConfig"

const postQuery =async(contactData)=>{
    const response=await axios.post(`${base_url}enquiry`,contactData);
    return response.data;
}
export const contactService={
   postQuery,
}