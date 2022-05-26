import { useState } from 'react';
import { Title, Text, Box, Paper, Grid, Tooltip } from '@mantine/core';
import { Calendar } from '@mantine/dates';
import copy from 'copy-to-clipboard';
import { Copy } from 'tabler-icons-react';

export const Component = () => {
  const [currentDate, setCurrentDate] = useState('26 / 05 / 2022');
  const [currentTime, setCurrentTime] = useState('13:50:01');
  const [currentWeekCount, setCurrentWeekCount] = useState('20');

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
            <Title order={5}>Current date</Title>
            <Tooltip
              style={{ width: '100%' }}
              openDelay={500}
              label="Click to copy"
            >
              <Box
                onClick={() => copy(currentDate)}
                sx={(theme) => ({
                  backgroundColor:
                    theme.colorScheme === 'dark'
                      ? theme.colors.dark[6]
                      : theme.colors.gray[2],
                  padding: theme.spacing.sm,
                  borderRadius: theme.radius.md,
                  display: 'flex',
                  justifyContent: 'space-between',

                  '&:hover': {
                    backgroundColor:
                      theme.colorScheme === 'dark'
                        ? theme.colors.dark[5]
                        : theme.colors.gray[1],
                  },
                })}
              >
                <div>{currentDate}</div>
                <Copy size={16} />
              </Box>
            </Tooltip>
          </Grid.Col>
          <Grid.Col span={3}>
            <Title order={5}>Current time</Title>
            <Tooltip
              style={{ width: '100%' }}
              openDelay={500}
              label="Click to copy"
            >
              <Box
                onClick={() => copy(currentTime)}
                sx={(theme) => ({
                  backgroundColor:
                    theme.colorScheme === 'dark'
                      ? theme.colors.dark[6]
                      : theme.colors.gray[2],
                  padding: theme.spacing.sm,
                  borderRadius: theme.radius.md,
                  display: 'flex',
                  justifyContent: 'space-between',

                  '&:hover': {
                    backgroundColor:
                      theme.colorScheme === 'dark'
                        ? theme.colors.dark[5]
                        : theme.colors.gray[1],
                  },
                })}
              >
                <div>{currentTime}</div>
                <Copy size={16} />
              </Box>
            </Tooltip>
          </Grid.Col>
          <Grid.Col span={3}>
            <Title order={5}>Current week count</Title>
            <Tooltip
              style={{ width: '100%' }}
              openDelay={500}
              label="Click to copy"
            >
              <Box
                onClick={() => copy(currentWeekCount)}
                sx={(theme) => ({
                  backgroundColor:
                    theme.colorScheme === 'dark'
                      ? theme.colors.dark[6]
                      : theme.colors.gray[2],
                  padding: theme.spacing.sm,
                  borderRadius: theme.radius.md,
                  display: 'flex',
                  justifyContent: 'space-between',

                  '&:hover': {
                    backgroundColor:
                      theme.colorScheme === 'dark'
                        ? theme.colors.dark[5]
                        : theme.colors.gray[1],
                  },
                })}
              >
                <div>{currentWeekCount}</div>
                <Copy size={16} />
              </Box>
            </Tooltip>
          </Grid.Col>
        </Grid>
        <Grid>
          <Grid.Col span={4}>
            Get timestamp from date
            <Calendar />
          </Grid.Col>
        </Grid>
      </Paper>
    </div>
  );
};
