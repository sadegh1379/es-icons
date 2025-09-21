import type { Meta, StoryObj } from '@storybook/react-webpack5';

const meta: Meta = {
  title: 'Test/Empty',
  parameters: {
    layout: 'centered'
  }
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Empty: Story = {
  render: () => <div>Empty test story</div>
};
