const getTokenFromLocalStorage=localStorage.getItem("customer")?localStorage.getItem("customer"):null;
export const config={
    headers:{
        Authorization:`Bearer ${getTokenFromLocalStorage!==null?getTokenFromLocalStorage.token:""}`,
        Accept:"application/json",
        "Access-Control-Allow-Origin": "https://e-commerce-app-frontend-pink.vercel.app",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    }
}