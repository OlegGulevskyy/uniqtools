import { Title, Text, Paper, Grid, Divider } from '@mantine/core';
import { DatePicker, TimeInput } from '@mantine/dates';
import { CopyableBox } from '@/components/CopyableBox';
import { useLogic } from './logic';

export const Component = () => {
  const { currentDate, currentTime, weekCounter } = useLogic();

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
            <CopyableBox
              label="Current date"
              displayValue={currentDate}
              enableTooltip
            />
          </Grid.Col>
          <Grid.Col span={3}>
            <CopyableBox
              label="Current time"
              displayValue={currentTime}
              enableTooltip
            />
          </Grid.Col>
          <Grid.Col span={3}>
            <CopyableBox
              label="Current week count"
              displayValue={String(weekCounter)}
              enableTooltip
            />
          </Grid.Col>
        </Grid>
        <Divider style={{ margin: '20px 0' }} />
        <Title order={5}>Get timestamp from date and time</Title>
        <Grid>
          <Grid.Col span={6}>
            <Text>Select date</Text>
            <DatePicker />
          </Grid.Col>
          <Grid.Col span={6}>
            <Text>Select time</Text>
            <TimeInput clearable />
          </Grid.Col>
        </Grid>
        <CopyableBox label="Result" enableTooltip displayValue="1818181718" />
      </Paper>
    </div>
  );
};
