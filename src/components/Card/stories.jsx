import Card from './index'

export default {
  title: 'Card',
  component: Card
}

export const Default = (args) => <Card {...args} />

Default.args = {
  date: "02/06",
  hour: "8h30",
  title: "Lista 03 - Fisica Moderna - Modulo 1 - Modulo 2 - Aula 4",
  subject: "Matemática",
  teacher: "Ricardo",
  questionsCompleted: "0",
  questions: "100",
  type: 1
}
