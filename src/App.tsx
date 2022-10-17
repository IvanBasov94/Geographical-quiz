import React from 'react';
import { useState } from 'react';
import './index.scss';

import Game from './components/Game';
import Result from './components/Result';

import questions from "./assets/questions.json";

const App: React.FC = () => {
   const [step, setStep] = useState<number>(0);
   const [correct, setCorrect] = useState<number>(0);
   const question = questions[step];

   const onClickVariant = (index: number) => {
      setStep(step + 1);

      if (index === question.correct) {
         setCorrect(correct + 1);
      };
   };

   return (
      <div className="App">
         {
            (step !== questions.length) ? (
               <Game
                  step={step}
                  question={question}
                  onClickVariant={onClickVariant}
               />
            ) : (
               <Result
                  correct={correct}
               />
            )
         }
      </div>
   );
};

export default App;