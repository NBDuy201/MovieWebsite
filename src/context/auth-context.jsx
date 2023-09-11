import { onAuthStateChanged } from "firebase/auth";
import React from "react";
import { auth } from "../firebase/firebase-config";
import { getUserInfo } from "~/utils/api-call/user-api";

const AuthContext = React.createContext();

function AuthProvider(props) {
  const [authInfo, setAuthInfo] = React.useState();
  const [userInfo, setUserInfo] = React.useState();
  const [isLoading, setIsLoading] = React.useState(false);
  const value = {
    userInfo,
    setUserInfo,
    authInfo,
    setAuthInfo,
    isLoading,
    setIsLoading,
    getUserData,
  };

  React.useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setAuthInfo(user);
    });
  }, []);

  async function getUserData() {
    setIsLoading(true);
    if (authInfo?.uid) {
      const data = await getUserInfo(authInfo?.uid);
      console.log("run", userInfo?.uid);
      setUserInfo(data);
    }
    setIsLoading(false);
  }

  React.useEffect(() => {
    getUserData(userInfo?.uid);
  }, [authInfo]);

  return <AuthContext.Provider value={value} {...props}></AuthContext.Provider>;
}

function useAuth() {
  const context = React.useContext(AuthContext);

  if (typeof context === "undefined")
    throw new Error("useAuth must be used within AuthProvider");

  return context;
}

export { AuthProvider, useAuth };
