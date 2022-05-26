import { CopyableBox } from '@/components/CopyableBox';
import { Grid, Title } from '@mantine/core';
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
          />
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
          />
        </Grid.Col>
      </Grid>
      <CopyableBox
        label="Result"
        enableTooltip
        displayValue={String(timestampResult)}
      />
    </>
  );
};
