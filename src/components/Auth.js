const JWT_TOKEN = localStorage.getItem('JWT');

const Auth =  {
    isAuthenticated : JWT_TOKEN === null ? false : JWT_TOKEN === JWT_TOKEN ? true : false
}

// console.log("AUTH RESULTS",JWT_TOKEN, Auth.isAuthenticated);

export default Auth;




