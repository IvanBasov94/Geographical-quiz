import React from "react";

import styles from "./Game.module.scss";

import questions from "../../assets/questions.json";

type Question = {
   title: string,
   variants: string[],
   correct: number,
}

interface GameProps {
   step: number,
   question: Question,
   onClickVariant: any,
}

const Game: React.FC<GameProps> = ({ step, question, onClickVariant }) => {
   const percentage = Math.round(step / questions.length * 100);

   return (
      <>
         <div className={styles.progress}>
            <div
               style={{ width: `${percentage}%` }}
               className={styles.progress__inner}
            >
            </div>
         </div>
         <h1>{question.title}</h1>
         <ul>
            {
               question.variants.map((text: string, index: number) => (
                  <li key={text} onClick={() => onClickVariant(index)}>
                     {text}
                  </li>))
            }
         </ul>
      </>
   );
};

export default Game;