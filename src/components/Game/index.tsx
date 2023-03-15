import { FC } from "react";

import styles from "./Game.module.scss";

import questions from "../../assets/questions.json";
import IQuestion from "../../@types/types";

interface IGameProps {
	step: number,
	question: IQuestion,
	onClickVariant: (index: number) => void,
};

const Game: FC<IGameProps> = ({ step, question, onClickVariant }) => {

	const percentage: number = Math.round(step / questions.length * 100);

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
					question.variants.map((text, index) => (
						<li
							key={text}
							onClick={() => onClickVariant(index)}
						>
							{text}
						</li>))
				}
			</ul>
		</>
	);
};

export default Game;