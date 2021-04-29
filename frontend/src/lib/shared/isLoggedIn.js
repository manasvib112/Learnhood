
const isLoggedIn=()=>{
    return Boolean(localStorage.token);
}
export default isLoggedIn;