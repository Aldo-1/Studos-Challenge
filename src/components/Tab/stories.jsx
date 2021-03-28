import Tab from './index'

export default {
  title: 'Tab',
  component: Tab
}

export const Default = (args) => <Tab {...args} />

Default.args = {
  active: false,
  label: "Novas"
}