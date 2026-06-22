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
      bottomPanelHeight: 0,
      storySort: (a, b) => {
        if (a.name === 'Installation') return -1;
        if (b.name === 'Installation') return 1;
        return a.id.localeCompare(b.id, undefined, { numeric: true });
      }
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