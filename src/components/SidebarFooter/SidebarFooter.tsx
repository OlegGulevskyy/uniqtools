import {
  UnstyledButton,
  Group,
  Text,
  Box,
  useMantineTheme,
  Anchor,
} from '@mantine/core';

export function SidebarFooter() {
  const theme = useMantineTheme();

  return (
    <Box
      sx={{
        paddingTop: theme.spacing.sm,
        borderTop: `1px solid ${
          theme.colorScheme === 'dark'
            ? theme.colors.dark[4]
            : theme.colors.gray[2]
        }`,
      }}
    >
      <UnstyledButton
        sx={{
          display: 'block',
          width: '100%',
          padding: theme.spacing.xs,
          borderRadius: theme.radius.sm,
          color:
            theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,

          '&:hover': {
            backgroundColor:
              theme.colorScheme === 'dark'
                ? theme.colors.dark[6]
                : theme.colors.gray[0],
            cursor: 'default',
          },
        }}
      >
        <Group>
          <Box sx={{ flex: 1 }}>
            <Text size="sm" weight={500}>
              UniqTools v.1.0.0
            </Text>
            <Text color="dimmed" size="xs">
              powered by{' '}
              <Anchor href="https://mantine.dev/" target="_blank">
                Mantine
              </Anchor>{' '}
              &{' '}
              <Anchor href="https://tauri.studio/" target="_blank">
                Tauri
              </Anchor>
            </Text>
          </Box>
        </Group>
      </UnstyledButton>
    </Box>
  );
}
