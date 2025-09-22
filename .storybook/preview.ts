import type { Preview } from '@storybook/react-webpack5'

const preview: Preview = {
  // tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    options: {
      bottomPanelHeight: 0
    },
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
  },
};

export default preview;