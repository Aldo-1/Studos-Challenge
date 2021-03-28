import Toggle from './index'

export default {
  title: 'Toggle',
  component: Toggle,

}

export const Default = (args) => <Toggle {...args} />

Default.args = {
  isChecked: true,
  name: 'toggle',
  id: 'toggle',
}