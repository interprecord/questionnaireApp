import { exitCode } from "process";
import React, { ReactNode, useEffect, useState } from "react";
import classes from "../CssModules.module.scss";

import { addDoc, collection} from "firebase/firestore";
import {
  useAnswerContext,
  useEntryContext,
  usePurposeContext,
  useShopInfoContext,
  useUserInfoContext,
} from "../context/Context";
import db from "../firebase/firebaseConfig";
import Modal from "../component/Modal";

const NextPageForm = () => {
  const [show,setShow] =useState(false);

  const { answers, setAnswers } = useAnswerContext();
  const { shopInfo, setShopInfo } = useShopInfoContext();
  const { purpose, setPurpose } = usePurposeContext();

  const { userInfo, setUserInfo } = useUserInfoContext();
  const { review, setReview } = useEntryContext();

  //入ってきたイベントのidがuserNameならUserinfoのuserNameの値を変える。それ以外ならUserinfoのtellNumberを変える。
  const getShopInfo = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputID = e.currentTarget.id;
    const selectedValue = e.currentTarget.value;

    setShopInfo((prevShopInfo) => ({
      ...prevShopInfo,
      //キーの中で条件分け。
      //inputID ===
      [inputID.includes("A")
        ? inputID.includes("B")
          ? "accountManeger"
          : "shopCode"
        : "shopName"]: selectedValue,
    }));
  };

  //送信ボタンを押すとデータが送信される。
  const sendDeta = async () => {
    const userCollectionRef = collection(db, "Users");
    try {
      const userDocumentRef = await addDoc(userCollectionRef, {
        userName: userInfo.userName,
        tellNumber: userInfo.tellNumber,
        answers: answers,
        serviceItem: purpose,
        review: review,
        shopCode: shopInfo.shopCode,
        accountManeger: shopInfo.accountManeger,
        shopName: shopInfo.shopName,
      });
      console.log("fireStoreにuserデータを追加しました。");
    } catch (error) {
      console.error("Firestoreへのデータ追加中にエラーが発生しました。", error);
    }
    setShow(!show);
  };

  return (
    <div className={classes.nextbody}>
      <div className={classes.nextForm}>
        <div className={classes.nextPageTitle}>弊社記入欄</div>

        <div className={classes.shopCode}>店舗コード:</div>
        <input id="A" onChange={(e) => getShopInfo(e)} />

        <div className={classes.shopName}>店舗名:</div>
        <input id="B" onChange={(e) => getShopInfo(e)} />

        <div className={classes.customorAssistant}>担当者名:</div>
        <input id="AB" onChange={(e) => getShopInfo(e)} />
        <div>
          <Modal show={show} setShow={setShow}/>
        </div>

        <div className={classes.sendDateButton}>
          <button onClick={() => sendDeta()}>送信</button>
        </div>
      </div>
    </div>
  );
};

export default NextPageForm;
