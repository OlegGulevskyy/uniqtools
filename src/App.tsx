import { useState } from 'react';
import {
  AppShell,
  MantineProvider,
  ColorSchemeProvider,
  ColorScheme,
} from '@mantine/core';
import '@/App.css';
import { Navbar } from '@/containers/Navbar';
import { Header } from '@/containers/Header';
import { MainContainer } from '@/containers/Main';
import { NavigationProvider } from '@/contexts/navigation';
import { NotificationsProvider } from '@mantine/notifications';

function App() {
  const [colorScheme, setColorScheme] = useState<ColorScheme>('dark');
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

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
        <NotificationsProvider>
          <NavigationProvider>
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
                  height:
                    'calc(100vh - var(--mantine-header-height, 0px) - var(--mantine-footer-height, 0px))',
                  overflowY: 'auto',
                },
              })}
            >
              {/* Main app window where the main logic is rendered */}
              <MainContainer />
            </AppShell>
          </NavigationProvider>
        </NotificationsProvider>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}

export default App;
