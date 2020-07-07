

const JWT_TOKEN = localStorage.getItem('JWT');

const JWT = 'JWT'

const Auth =  {
    isAuthenticated : JWT_TOKEN === null ? false : JWT_TOKEN === JWT_TOKEN ? true : false
}

console.log("AUTH RESULTS", Auth.isAuthenticated);

export default Auth;




