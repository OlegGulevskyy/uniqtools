import React from 'react';
import { Logo } from '@/components/Logo';
import { ActionIcon, ColorScheme, Group, Header, Tooltip } from '@mantine/core';
import { IconMoonStars, IconSun } from '@tabler/icons';
import { Discord } from '@/assets/icons/Discord';
import { GitHub } from '@/assets/icons/GitHub';
import { open } from '@tauri-apps/api/shell';

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
        <Group>
          <Tooltip
            position="bottom"
            label="Your help is needed"
            openDelay={500}
          >
            <ActionIcon
              onClick={() => open('https://github.com/OlegGulevskyy/uniqtools')}
              radius={'md'}
              variant="default"
              size={30}
            >
              <GitHub />
            </ActionIcon>
          </Tooltip>
          <Tooltip position="bottom" label="Follow on Discord" openDelay={500}>
            <ActionIcon
              onClick={() => open('https://discord.gg/V9mSTv7yuD')}
              radius={'md'}
              variant="default"
              size={30}
            >
              <Discord size={30} />
            </ActionIcon>
          </Tooltip>
          <ActionIcon
            variant="default"
            radius={'md'}
            onClick={() => toggleColorScheme()}
            size={30}
          >
            {colorScheme === 'dark' ? (
              <IconSun size={16} />
            ) : (
              <IconMoonStars size={16} />
            )}
          </ActionIcon>
        </Group>
      </Group>
    </Header>
  );
};
