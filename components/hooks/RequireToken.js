import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

//HOC setup for IsLogged in HOC -> Higher Order Component

const RequireToken = (WrappedComponent) => {
  const WithTokenCheck = (props) => {
    const router = useRouter();
    
    const token = Cookies.get('token')

    useEffect(() => {
     
      if(!token) {
        router.push("/")
      }
    },[]);

    return <WrappedComponent {...props}/>
  };

  return WithTokenCheck;
};

export default RequireToken;
