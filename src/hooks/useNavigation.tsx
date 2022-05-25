import { useState } from 'react';

const DEFAULT_SCREEN_INDEX = 0;

export const useNavigation = () => {
  const [currentScreenIndex, setCurrentScreenIndex] =
    useState(DEFAULT_SCREEN_INDEX);

  return {
    currentScreenIndex,
  };
};
