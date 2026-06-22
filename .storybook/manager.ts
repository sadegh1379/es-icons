import { addons } from 'storybook/manager-api';
import { SET_INDEX } from 'storybook/internal/core-events';
import { themes } from 'storybook/theming';

const DEFAULT_STORY_ID = 'icons--icon-gallery';

addons.setConfig({
  theme: themes.dark,
  options: {
    storySort: (a, b) => {
      if (a.name === 'Installation') return -1;
      if (b.name === 'Installation') return 1;
      return a.id.localeCompare(b.id, undefined, { numeric: true });
    }
  }
});

addons.register('es-icons/default-story', api => {
  let hasSetDefault = false;

  api.on(SET_INDEX, () => {
    if (hasSetDefault) return;

    const path = new URLSearchParams(window.location.search).get('path');
    if (!path) {
      api.selectStory(DEFAULT_STORY_ID);
    }

    hasSetDefault = true;
  });
});
