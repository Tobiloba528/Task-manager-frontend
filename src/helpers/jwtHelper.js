import jwtDecode from 'jwt-decode'


export const getUser = (jwtKey= localStorage.getItem("ACCESS_TOKEN")) => {
    try {
        const jwtArr = jwtKey.split(" ") || [];
        const jwt = jwtArr[1]
        const user = jwtDecode(jwt);

        return user;
    }
    catch (ex){
        return null;
    }
};