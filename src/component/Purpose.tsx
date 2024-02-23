import React, { useState } from 'react'
import { usePurposeContext } from '../context/Context';
import classes from "../CssModules.module.scss";

//"":string→purposeにデータ格納
const Purpose = () => {
  const{purpose,setPurpose}= usePurposeContext()
  
  const handleCheck=(e: React.MouseEvent<HTMLInputElement, MouseEvent>)=>{
const value=e.currentTarget.value;
setPurpose(value)

  }
  return (
    <div>
      <h3 className={classes.mentenanceTitle}>・整備内容をお選びください。
      </h3>
          <label>
            <input
              type="radio"
              value="新車点検"
              name="回答"
              onClick={(e) => handleCheck(e)}
            />
            新車点検
            <input
              type="radio"
              value="定期点検"
              name="回答"
              onClick={(e) => handleCheck(e)}
            />
            定期点検
            <input
              type="radio"
              value="６ヶ月点検"
              name="回答"
              onClick={(e) => handleCheck(e)}
            />
            ６ヶ月点検
            <input
              type="radio"
              value="車検"
              name="回答"
              onClick={(e) => handleCheck(e)}
            />
            車検
            <input
              type="radio"
              value="その他"
              name="回答"
              onClick={(e) => handleCheck(e)}
            />
            その他
          </label>
       
    </div>
  )
}

export default Purpose