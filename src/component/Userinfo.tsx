import React, { useEffect } from "react";
import { useUserInfoContext } from "../context/Context";
import classes from "../CssModules.module.scss";

//ユーザ名と電話番号をオブジェクトとしてデータ格納したい。

//nullならデフォルト、trueならUserInfoを返す？タイプ

const Userinfos = () => {
  const { userInfo, setUserInfo } = useUserInfoContext();

  //入ってきたイベントのidがuserNameならUserinfoのuserNameの値を変える。それ以外ならUserinfoのtellNumberを変える。
  const handleChangeInfo = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputID = e.currentTarget.id;
    const selectedValue = e.currentTarget.value;

    setUserInfo((prevUserInfo) => ({
      ...prevUserInfo,
      //キーの中で条件分け。

      [inputID === "userName" ? "userName" : "tellNumber"]: selectedValue,
    }));
  };

  return (
    <>
      <div>お名前:</div>
      <input
        type="text"
        id="userName"
        value={userInfo.userName}
        onChange={(e) => handleChangeInfo(e)}
      />

      <div className={classes.userTellNumber}>電話番号:</div>
      <input
        type="text"
        id="tellNumber"
        value={userInfo.tellNumber}
        onChange={(e) => handleChangeInfo(e)}
      />
    </>
  );
};

export default Userinfos;
