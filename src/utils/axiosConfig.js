export const base_url="http://localhost:5000/api/"
const getTokenFromLocalStorage=localStorage.getItem("customer")?JSON.parse(localStorage.getItem("customer")):null;
const customertoken=localStorage.getItem("token");
export const config={
    headers:{
        Authorization:`Bearer ${getTokenFromLocalStorage!==null?customertoken:""}`,
        Accept:"application/json"
    }
}