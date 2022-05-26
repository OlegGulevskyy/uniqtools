import { CopyableBox } from '@/components/CopyableBox';
import { Grid, Title, Button } from '@mantine/core';
import { DatePicker, TimeInput } from '@mantine/dates';
import { Calendar, Clock } from 'tabler-icons-react';
import { useLogic } from './logic';

export const TimestampFromDateTime = () => {
  const {
    currentDate,
    onDatePickerChange,
    timestampResult,
    currentTime,
    setCurrentTime,
  } = useLogic();

  return (
    <>
      <Grid>
        <Grid.Col span={6}>
          <Title style={{ margin: '5px 0' }} order={6}>
            Select date
          </Title>
          <DatePicker
            icon={<Calendar size={16} />}
            value={currentDate}
            onChange={onDatePickerChange}
            style={{ marginBottom: '10px' }}
          />
          <Button variant="outline" compact>
            Today
          </Button>
        </Grid.Col>
        <Grid.Col span={6}>
          <Title style={{ margin: '5px 0' }} order={6}>
            Select time
          </Title>
          <TimeInput
            clearable
            icon={<Clock size={16} />}
            value={currentTime}
            onChange={setCurrentTime}
            style={{ marginBottom: '10px' }}
          />
          <Button variant="outline" compact>
            Now
          </Button>
        </Grid.Col>
      </Grid>
      <CopyableBox enableTooltip displayValue={String(timestampResult)} />
    </>
  );
};
