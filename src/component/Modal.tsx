import React from "react";
import classes from "../CssModules.module.scss";


type Props={
  show:boolean;
  setShow:React.Dispatch<React.SetStateAction<boolean>>
}
const Modal = (props:Props) => {
  const handleClick=()=>{
props.setShow(!props.show)

  }
  if(props.show) {
  return (
    <div className={classes.overlay}>
    <div className={classes.content}>
      <p >送信しました。</p>
      <div>
        <button onClick={()=>handleClick()}>閉じる</button>
      </div>
    </div>
    </div>
  );
  } else { return null;
  }
};

export default Modal;
