import { CopyableBox } from '@/components/CopyableBox';
import { Grid, Text } from '@mantine/core';
import { DatePicker, TimeInput } from '@mantine/dates';
import { Calendar, Clock } from 'tabler-icons-react';
import { useLogic } from './logic';

export const TimestampFromDateTime = () => {
  const {
    currentDateTime,
    setCurrentDateTime,
    onDatePickerChange,
    timestampResult,
  } = useLogic();

  return (
    <>
      <Grid>
        <Grid.Col span={6}>
          <Text>Select date</Text>
          <DatePicker
            icon={<Calendar size={16} />}
            value={currentDateTime}
            onChange={onDatePickerChange}
          />
        </Grid.Col>
        <Grid.Col span={6}>
          <Text>Select time</Text>
          <TimeInput
            clearable
            icon={<Clock size={16} />}
            value={currentDateTime}
            onChange={setCurrentDateTime}
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
