import React from "react";

const AuthContext = React.createContext();

function AuthProvider(props) {
  const [userInfo, setUserInfo] = React.useState();
  const value = { userInfo, setUserInfo };

  return <AuthContext.Provider value={value} {...props}></AuthContext.Provider>;
}

function useAuth() {
  const context = React.useContext(AuthContext);

  if (typeof context === "undefined")
    throw new Error("useAuth must be used within AuthProvider");

  return context;
}

export { AuthProvider, useAuth };
