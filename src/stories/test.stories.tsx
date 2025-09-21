import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { PlusFill } from '../index';

const meta: Meta = {
  title: 'Test/Empty',
  parameters: {
    layout: 'centered'
  }
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Empty: Story = {
  render: () => (<div>
    <h1>icons</h1>
    <PlusFill/>
  </div>)
};
