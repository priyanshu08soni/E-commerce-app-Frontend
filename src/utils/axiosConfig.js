const getTokenFromLocalStorage=localStorage.getItem("customer")?localStorage.getItem("customer"):null;
export const config={
    headers:{
        Authorization:`Bearer ${getTokenFromLocalStorage!==null?getTokenFromLocalStorage.token:""}`,
        Accept:"application/json",
        origin:"https://e-commerce-app-frontend-pink.vercel.app"
    }
}