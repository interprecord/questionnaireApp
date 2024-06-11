import React from "react";
import QusetionForm from "./QusetionForm";
import EntryForm from "./EntryForm";
import Userinfo from "./Userinfo";
import Purpose from "./Purpose";
import { useNavigate } from "react-router-dom";
import classes from "../CssModules.module.scss";
import { Button } from "@mui/material";


const Home = () => {
  const navigate = useNavigate();

  return (
    <div className={classes.body}>
      <div>
        <header className={classes.greeting}>
          <h1 className={classes.title}>お客様満足度アンケート</h1>
          ご入庫ありがとうございました。今後の更なるサービス改善のため、お客様へのアンケートを実施しています。
        </header>
        
        <div className={classes.mainQuestion}>
          <QusetionForm />
        </div>

        <div className={classes.entryForm}>
          <EntryForm />
        </div>

        <div className={classes.userInfo}>
       
          <Userinfo />
          
        </div>

        <div className={classes.purpose}>
          <Purpose />
        </div>

        <div className={classes.nextButton}>
          <Button variant="contained"  onClick={() => navigate("/employespage") }>次へ</Button>
        </div>
        <div />
        
      </div>
    </div>
  );
};

export default Home;
