import { Logo } from '@/components/Logo';
import { ActionIcon, ColorScheme, Group, Header } from '@mantine/core';
import React from 'react';
import { MoonStars, Sun } from 'tabler-icons-react';

type HeaderContainerProps = {
  colorScheme: ColorScheme;
  toggleColorScheme: (value?: ColorScheme | undefined) => void;
};
export const HeaderContainer: React.FC<HeaderContainerProps> = ({
  colorScheme,
  toggleColorScheme,
}) => {
  return (
    <Header height={60}>
      <Group sx={{ height: '100%' }} px={20} position="apart">
        <Logo colorScheme={colorScheme} />
        <ActionIcon
          variant="default"
          onClick={() => toggleColorScheme()}
          size={30}
        >
          {colorScheme === 'dark' ? <Sun size={16} /> : <MoonStars size={16} />}
        </ActionIcon>
      </Group>
    </Header>
  );
};
