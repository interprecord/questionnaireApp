import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  User,
} from "firebase/auth";
import { Navigate } from "react-router-dom";
export const auth = getAuth();

type SignUpType = {
  nowUser: User | null | undefined;
  setNowUser: React.Dispatch<React.SetStateAction<User | null | undefined>>;
};
const SignUp: React.FC<SignUpType> = ({ nowUser, setNowUser }) => {
  const provider = new GoogleAuthProvider();

  //サインアップの記述
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken;
        setNowUser(result.user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
      });
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        height: "400px",
      }}
    >
      <div>Welcome to ,Question App</div>
      <Button
        sx={{ mt: "20px" }}
        variant="contained"
        color="success"
        onClick={signInWithGoogle}
      >
        サインイン
      </Button>
      {nowUser && <Navigate to="/myPage" />}
    </div>
  );
};

export default SignUp;
