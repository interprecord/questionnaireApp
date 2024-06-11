import React, { useEffect, useState } from "react";
import { useAnswerContext } from "../context/Context";

type Answer = {
  [key: string]: string;
};
// type Answers = Answer[];
// [{q1:"1"},{q2:"2"}]
const QuestionForm = () => {
  const { answers, setAnswers } = useAnswerContext();

  const handleCheck = (e: React.MouseEvent<HTMLInputElement>) => {
    const selectedValue = e.currentTarget.value;
    const qNumber = e.currentTarget.name;
    // 新しい Answer 型の配列を作って、それをset したい
    //1 answerオブジェクトのコピー作る
    const copyAnswers = [...answers];

    //2 値がすでに入っているかの確認
    //値がはいっていたら、値を更新して新しいオブジェクトを返す

    const isExistingValue = copyAnswers.find((answer) => {
      return answer[qNumber] !== undefined;
    });

    if (isExistingValue) {
      isExistingValue[qNumber] = selectedValue;
    }
    //2-3 値が入っていなかったら、新しい回答を作成して配列に追加
    else {
      const newAnswer: Answer = { [qNumber]: selectedValue };
      copyAnswers.push(newAnswer);
    }

    //3 できたcopyanswerを元に配列にセット
    setAnswers(copyAnswers);
  };

  return (
    <div>
      <div>
        <h3>Q1 お出迎え・お見送りの印象はいかがでしょうか</h3>
        <label>
          <input
            type="radio"
            name="q1"
            value="1"
            onClick={(e) => handleCheck(e)}
          />
          大変満足
          <input
            type="radio"
            name="q1"
            value="2"
            onClick={(e) => handleCheck(e)}
          />
          満足
          <input
            type="radio"
            name="q1"
            value="3"
            onClick={(e) => handleCheck(e)}
          />
          普通
          <input
            type="radio"
            name="q1"
            value="4"
            onClick={(e) => handleCheck(e)}
          />
          不満
        </label>

        <h3>Q2 どのスタッフも元気よく挨拶をしていましたか</h3>
        <label>
          <input
            type="radio"
            name="q2"
            value="1"
            onClick={(e) => handleCheck(e)}
          />
          全員がしていた
          <input
            type="radio"
            name="q2"
            value="2"
            onClick={(e) => handleCheck(e)}
          />
          一部の人がしていた
          <input
            type="radio"
            name="q2"
            value="3"
            onClick={(e) => handleCheck(e)}
          />
          あいさつがなかった
        </label>

        <h3>Q3 事前に説明を受けたとおりの料金でしたか</h3>
        <label>
          <input
            type="radio"
            name="q3"
            value="1"
            onClick={(e) => handleCheck(e)}
          />
          説明どおり
          <input
            type="radio"
            name="q3"
            value="2"
            onClick={(e) => handleCheck(e)}
          />
          説明より高かった
          <input
            type="radio"
            name="q3"
            value="3"
            onClick={(e) => handleCheck(e)}
          />
          説明がなかった
        </label>

        <h3>Q4 お待ちいただいている時間は快適にすごせたか</h3>
        <label>
          <input
            type="radio"
            name="q4"
            value="1"
            onClick={(e) => handleCheck(e)}
          />
          大変満足
          <input
            type="radio"
            name="q4"
            value="2"
            onClick={(e) => handleCheck(e)}
          />
          満足
          <input
            type="radio"
            name="q4"
            value="3"
            onClick={(e) => handleCheck(e)}
          />
          普通
          <input
            type="radio"
            name="q4"
            value="4"
            onClick={(e) => handleCheck(e)}
          />
          不満
        </label>

        <h3>Q5 お約束した時間に出来上がりましたか</h3>
        <label>
          <input
            type="radio"
            name="q5"
            value="1"
            onClick={(e) => handleCheck(e)}
          />
          約束通り
          <input
            type="radio"
            name="q5"
            value="2"
            onClick={(e) => handleCheck(e)}
          />
          遅かった
          <input
            type="radio"
            name="q5"
            value="3"
            onClick={(e) => handleCheck(e)}
          />
          時間の説明がなかった
        </label>

        <h3>Q6 整備結果の説明はわかりやすかったですか</h3>
        <label>
          <input
            type="radio"
            name="q6"
            value="1"
            onClick={(e) => handleCheck(e)}
          />
          大変わかりやすかった
          <input
            type="radio"
            name="q6"
            value="2"
            onClick={(e) => handleCheck(e)}
          />
          わかりやすかった
          <input
            type="radio"
            name="q6"
            value="3"
            onClick={(e) => handleCheck(e)}
          />
          わからなかった
        </label>

        <h3>Q7 誰から説明されましたか</h3>
        <label>
          <input
            type="radio"
            name="q7"
            value="1"
            onClick={(e) => handleCheck(e)}
          />
          整備担当者
          <input
            type="radio"
            name="q7"
            value="2"
            onClick={(e) => handleCheck(e)}
          />
          サービスフロント
          <input
            type="radio"
            name="q7"
            value="3"
            onClick={(e) => handleCheck(e)}
          />
          担当営業
          <input
            type="radio"
            name="q7"
            value="4"
            onClick={(e) => handleCheck(e)}
          />
          受けていない
        </label>

        <h3>Q8 またこのお店に来店したいと思いますか</h3>
        <label>
          <input
            type="radio"
            name="q8"
            value="1"
            onClick={(e) => handleCheck(e)}
          />
          思う
          <input
            type="radio"
            name="q8"
            value="2"
            onClick={(e) => handleCheck(e)}
          />
          どちらでもない
          <input
            type="radio"
            name="q8"
            value="3"
            onClick={(e) => handleCheck(e)}
          />
          思わない
        </label>
      </div>
    </div>
  );
};

export default QuestionForm;
