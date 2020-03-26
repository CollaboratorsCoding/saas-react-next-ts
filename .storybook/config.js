
import { configure, addDecorator, addParameters } from "@storybook/react";
import  { withKnobs } from "@storybook/addon-knobs"

addParameters({
  options: {
    panelPosition: 'bottom',
  }
});
addDecorator(withKnobs);

function requireAll(requireContext) {
  return requireContext.keys().map(requireContext);
}

function loadStories() {
  const req = require.context('../src/stories', true, /\.stories\.tsx?$/)
  req.keys().forEach(req);
}

// automatically import all files ending in *.stories.tsx
configure(loadStories, module);