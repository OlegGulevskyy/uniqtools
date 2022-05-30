import { Title, Text, Paper, Divider, Menu, Group } from '@mantine/core';
import { IconDeviceFloppy, IconX } from '@tabler/icons';
import { CurrentStats } from './CurrentStats';
import { DateTimeFromTimestamp } from './DateTimeFromTimestamp';
import { TimestampFromDateTime } from './TimestampFromDateTime';

export const Component = () => {
  return (
    <div>
      <Group style={{ marginBottom: '20px' }}>
        <Title order={3}>
          Parse and handle{' '}
          <Text color="blue" inherit component="span">
            timestamps and dates
          </Text>
        </Title>
        <Menu>
          <Menu.Label>Settings</Menu.Label>
          <Menu.Item
            icon={<IconDeviceFloppy size={14} />}
            rightSection={
              <Text size="xs" color="dimmed">
                ⌘S
              </Text>
            }
          >
            Save
          </Menu.Item>
          <Menu.Item icon={<IconX size={14} />}>Reset to default</Menu.Item>
        </Menu>
      </Group>
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
