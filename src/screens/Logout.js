import React, { useEffect } from "react";
import { useHistory} from 'react-router-dom'

const Logout = (props) => {
    const history = useHistory();
  useEffect(() => {
    localStorage.removeItem("ACCESS_TOKEN");
    history.push('/home')
    // window.location.href = '/home'
  }, []);
  return null;
};

export default Logout;
