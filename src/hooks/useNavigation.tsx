import { ALL_SCREENS } from '@/data/screens';
import { useState } from 'react';

const DEFAULT_SCREEN_INDEX = 0;

const index = (screenId: string) =>
  ALL_SCREENS.findIndex((i) => i.id === screenId);

enum Screen {
  TimestampsData = index('timestamps-dates'),
  JsonValidationFormatting = index('json-validate-format'),
  Base64String = index('base64-string'),
  MarkdownPreview = index('markdown-editor'),
}

export const useNavigation = () => {
  const [currentScreenIndex, setCurrentScreenIndex] =
    useState(DEFAULT_SCREEN_INDEX);

  const changeScreen = (index: Screen) => {
    setCurrentScreenIndex(index);
  };

  console.log('SCREEN ENUM', Screen);

  return {
    currentScreenIndex,
    changeScreen,
  };
};
