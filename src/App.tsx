import { useState } from 'react';
import {
  AppShell,
  MantineProvider,
  ColorSchemeProvider,
  ColorScheme,
} from '@mantine/core';
import './App.css';
import { Navbar } from '@/containers/Navbar';
import { Header } from '@/containers/Header';
import { TimestampsDates } from './screens/Timestamps-And-Dates';
import { JsonValidationFormatting } from './screens/JsonValidationFormatting';
import { MainContainer } from './containers/Main';

const ALL_SCREENS = [
  {
    component: TimestampsDates,
    title: 'Timestamp and Dates parsing',
  },
  {
    component: JsonValidationFormatting,
    title: 'JSON Validation and Formatting utility',
  },
];

const DEFAULT_SCREEN_INDEX = 0;
const CurrentScreen = ({ screenIndex }: { screenIndex: number }) => {
  const foundScreen = ALL_SCREENS[screenIndex] ?? ALL_SCREENS[0];
  const Component = foundScreen.component;
  return <Component />;
};

function App() {
  const [colorScheme, setColorScheme] = useState<ColorScheme>('dark');
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

  const [currentScreenIndex, setCurrentScreenIndex] =
    useState(DEFAULT_SCREEN_INDEX);

  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider
        theme={{ colorScheme }}
        withGlobalStyles
        withNormalizeCSS
      >
        <AppShell
          padding="md"
          navbar={<Navbar />}
          header={
            <Header
              colorScheme={colorScheme}
              toggleColorScheme={toggleColorScheme}
            />
          }
          styles={(theme) => ({
            main: {
              backgroundColor:
                theme.colorScheme === 'dark'
                  ? theme.colors.dark[8]
                  : theme.colors.gray[0],
            },
          })}
        >
          <MainContainer>
            {<CurrentScreen screenIndex={currentScreenIndex} />}
          </MainContainer>
        </AppShell>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}

export default App;
