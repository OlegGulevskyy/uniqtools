import { Title, Text, Paper, Divider } from '@mantine/core';
import { CurrentStats } from './CurrentStats';
import { DateTimeFromTimestamp } from './DateTimeFromTimestamp';
import { TimestampFromDateTime } from './TimestampFromDateTime';

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
        <Title order={5}>Current things</Title>
        <CurrentStats />

        <Divider style={{ margin: '20px 0' }} />

        <Title order={5}>Get timestamp from date and time</Title>
        <TimestampFromDateTime />

        <Divider style={{ margin: '20px 0' }} />
        <DateTimeFromTimestamp />
      </Paper>
    </div>
  );
};
