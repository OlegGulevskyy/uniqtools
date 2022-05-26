import { Title, Text, Box, Paper, Grid, Tooltip } from '@mantine/core';

export const Component = () => {
  return (
    <div>
      <Title order={3}>
        Parse and handle{' '}
        <Text color="blue" inherit component="span">
          timestamps and dates
        </Text>
      </Title>

      <Paper shadow="xs" p="md">
        <Grid>
          <Grid.Col span={3}>
            Current date
            <Tooltip
              style={{ width: '100%' }}
              openDelay={500}
              label="Click to copy"
            >
              <Box
                sx={(theme) => ({
                  backgroundColor:
                    theme.colorScheme === 'dark'
                      ? theme.colors.dark[6]
                      : theme.colors.gray[2],
                  padding: theme.spacing.sm,
                  borderRadius: theme.radius.md,

                  '&:hover': {
                    backgroundColor:
                      theme.colorScheme === 'dark'
                        ? theme.colors.dark[5]
                        : theme.colors.gray[1],
                  },
                })}
              >
                <div>26 / 05 / 2022</div>
              </Box>
            </Tooltip>
          </Grid.Col>
          <Grid.Col span={3}>
            Current time
            <Tooltip
              style={{ width: '100%' }}
              openDelay={500}
              label="Click to copy"
            >
              <Box
                sx={(theme) => ({
                  backgroundColor:
                    theme.colorScheme === 'dark'
                      ? theme.colors.dark[6]
                      : theme.colors.gray[2],
                  padding: theme.spacing.sm,
                  borderRadius: theme.radius.md,

                  '&:hover': {
                    backgroundColor:
                      theme.colorScheme === 'dark'
                        ? theme.colors.dark[5]
                        : theme.colors.gray[1],
                  },
                })}
              >
                <div>13:50:01</div>
              </Box>
            </Tooltip>
          </Grid.Col>
          <Grid.Col span={3}>
            Current week count
            <Tooltip
              style={{ width: '100%' }}
              openDelay={500}
              label="Click to copy"
            >
              <Box
                sx={(theme) => ({
                  backgroundColor:
                    theme.colorScheme === 'dark'
                      ? theme.colors.dark[6]
                      : theme.colors.gray[2],
                  padding: theme.spacing.sm,
                  borderRadius: theme.radius.md,

                  '&:hover': {
                    backgroundColor:
                      theme.colorScheme === 'dark'
                        ? theme.colors.dark[5]
                        : theme.colors.gray[1],
                  },
                })}
              >
                <div>20</div>
              </Box>
            </Tooltip>
          </Grid.Col>
        </Grid>
      </Paper>
    </div>
  );
};
