import React from 'react';
import { PhotoStory, VideoStory } from './stories';

const components = {
  photo: PhotoStory,
  video: VideoStory
};

function Story(props) {
  // Правильно! JSX-тип может являться переменной, названной с заглавной буквы
  const SpecificStory = components[props.storyType];
  return <SpecificStory story={props.story} />;
}
