import React, { useState } from 'react';
import { ALL_SCREENS } from '@/data/screens';
import { JSONValidationFormattingId } from '@/screens/JsonValidationFormatting';
import { TimestampsDatesId } from '@/screens/TimestampsDates';

const DEFAULT_SCREEN_INDEX = 0;

const index = (screenId: string) =>
  ALL_SCREENS.findIndex((i) => i.id === screenId);

const ScreenIndex = {
  [TimestampsDatesId]: index(TimestampsDatesId),
  [JSONValidationFormattingId]: index(JSONValidationFormattingId),
  // Base64String: index('base64-string'),
  // MarkdownPreview: index('markdown-editor'),
};
type NavigationContextType = {
  currentScreenIndex: number;
  changeScreen: (index: ChangeScreenPropType) => void;
};
export const NavigationContext = React.createContext<NavigationContextType>(
  {} as NavigationContextType
);

export type ChangeScreenPropType = keyof typeof ScreenIndex;

export const NavigationProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [currentScreenIndex, setCurrentScreenIndex] =
    useState(DEFAULT_SCREEN_INDEX);

  const changeScreen = (index: ChangeScreenPropType) => {
    setCurrentScreenIndex(ScreenIndex[index]);
  };
  return (
    <NavigationContext.Provider value={{ currentScreenIndex, changeScreen }}>
      {children}
    </NavigationContext.Provider>
  );
};

export const useNavigation = () => React.useContext(NavigationContext);
