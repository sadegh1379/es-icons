import type { Preview } from '@storybook/react-webpack5'

const preview: Preview = {
  // tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'dark',
      values: [{ name: 'dark', value: '#000000' }]
    },
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