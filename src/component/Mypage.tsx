import React from "react";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { auth } from "./SignUp";
import { User, signOut } from "firebase/auth";
import classes from "../Mypage.module.scss";
type MyPageType = {
  nowUser: User | null | undefined;
  setNowUser: React.Dispatch<React.SetStateAction<User | null | undefined>>;
};

const Mypage: React.FC<MyPageType> = ({ nowUser, setNowUser }) => {
  const navigate = useNavigate();

  const logout = async () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        // エラーが発生した場合の処理
        console.error("ログアウトエラー:", error);
      });
  };

  const displayName = nowUser?.displayName;
  const email = nowUser?.email;
  const photoURL = nowUser?.photoURL;

  // console.log(email)
  // console.log(photoURL)

  return (
    <div className={classes.mypage}>
      <h1 className={classes.mypage__title}>My page</h1>
      <div className={classes.mypage__username}>
        {displayName}さんのマイページ
      </div>

      {photoURL && <img src={photoURL} alt={`${displayName}'s profile`} />}
      <h2 className={classes.mypage__section}>◾️アンケート</h2>

      <Button
        variant="contained"
        onClick={() => navigate("/Home")}
        className={classes.mypage__button}
      >
        アンケート回答
      </Button>
      <h2 className={classes.mypage__section}>◾️メールアドレス</h2>
      <div>{email}</div>
      <Button
        variant="contained"
        color="secondary"
        onClick={logout}
        className={`${classes.mypage__button} ${classes["mypage__button--logout"]}`}
      >
        ログアウト
      </Button>
    </div>
  );
};

export default Mypage;
