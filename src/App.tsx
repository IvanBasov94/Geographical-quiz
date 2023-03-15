import { FC, useState } from 'react';

import Game from './components/Game';
import Result from './components/Result';

import './index.scss';

import questions from "./assets/questions.json";


const App: FC = () => {

	const [step, setStep] = useState<number>(0);
	const [correct, setCorrect] = useState<number>(0);
	const question = questions[step];

	const onClickVariant = (index: number) => {
		setStep(prev => prev + 1);

		if (index === question.correct) {
			setCorrect(prev => prev + 1);
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