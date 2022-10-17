import React from "react";

import styles from "./Result.module.scss";
import greatResultPng from "../../assets/img/great-result.png";
import badResultPng from "../../assets/img/bad-result.png";

import questions from "../../assets/questions.json";

type ResultProps = {
   correct: number,
};

const Result: React.FC<ResultProps> = ({ correct }) => {

   let correctAnswer: string = '';
   let resultImage: string = '';

   resultImage = (correct === 0) ? badResultPng : greatResultPng;

   if (correct === 0 || (correct >= 5 && correct <= 20)) {
      correctAnswer = 'вопросов';
   } else if (correct === 1) {
      correctAnswer = 'вопрос';
   } else if (correct === 2 || 3 || 4) {
      correctAnswer = 'вопроса';
   };


   return (
      <div className={styles.result}>
         <h2>Поздравляем!</h2>
         <img src={resultImage} />
         <h2>Вы ответили на {correct} {correctAnswer} из {questions.length}</h2>
         <a href="/">
            <button>Попробовать снова</button>
         </a>
      </div>
   );
};

export default Result;