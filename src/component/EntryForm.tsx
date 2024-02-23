import React, { useState } from "react";
import { useEntryContext } from "../context/Context";
import classes from "../CssModules.module.scss";



const EntryForm = () => {
  const { review, setReview } = useEntryContext();
  //hanleChangeで入ってきたものをreviewとして持っておきたい
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setReview(e.target.value);
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <div >
      <form onSubmit={(e) => handleSubmit(e)} className={classes.form}>
        <h3 className={classes.inputForm}>
          ・当店の対応やオクルマなどについて、お気づきの点がありましたら、ご記入ください。
        </h3>
        <input
          placeholder="ご自由にどうぞ"
          type="text"
          className={classes.freeForm}
          onChange={(e) => handleChange(e)}
        />
      </form>
    </div>
  );
};

export default EntryForm;
