import AddGift from '../components/AddGift';

export default {
  title: 'AddGift',
  component: AddGift,
};

const Template = (args) => {
  <AddGift {...args} />;
};

export const AddGiftBtn = Template.bind({});
