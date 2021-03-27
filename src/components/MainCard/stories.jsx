import MainCard from "./index";
import IlustrationTraining from 'assets/images/ilustration_training.svg'
import Background from 'assets/images/bg-green.svg'
import IlustrationHome from 'assets/images/ilustration_homework.svg'

import BackgroundBlue from 'assets/images/bg.svg'

export default {
  title: "MainCard",
  component: MainCard,
};

export const Green = (args) => <MainCard {...args} />

Green.args = {
  title: "Meus treinos",
  colors: "green",
  image: IlustrationTraining,
  background: Background
}

export const Blue = (args) => <MainCard {...args} />

Blue.args = {
  title: "Tarefas e materiais",
  colors: "blue",
  image: IlustrationHome,
  background: BackgroundBlue
}