import { CopyableBox } from '@/components/CopyableBox';
import { Grid, Title, Button, Chips, Chip, Group, Stack } from '@mantine/core';
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
    resetDate,
    resetTime,
    timestampFormat,
    setTimestampFormat,
  } = useLogic();

  return (
    <>
      <Grid>
        <Grid.Col span={4} sm={6} md={4} xs={12}>
          <Stack>
            <Title style={{ margin: '5px 0' }} order={6}>
              Select date
            </Title>
            <DatePicker
              icon={<Calendar size={16} />}
              value={currentDate}
              onChange={onDatePickerChange}
              style={{ marginBottom: '10px' }}
            />
            <Button onClick={resetDate} variant="outline" compact>
              Today
            </Button>
          </Stack>
        </Grid.Col>
        <Grid.Col span={4} sm={6} md={4} xs={12}>
          <Stack>
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
            <Button onClick={resetTime} variant="outline" compact>
              Now
            </Button>
          </Stack>
        </Grid.Col>
        <Grid.Col
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'end',
          }}
          span={4}
          sm={6}
          md={4}
          xs={12}
        >
          <CopyableBox enableTooltip displayValue={String(timestampResult)} />
          <Chips
            multiple={false}
            value={timestampFormat}
            onChange={setTimestampFormat}
          >
            <Chip value={'ms'}>Milliseconds</Chip>
            <Chip value={'seconds'}>Seconds</Chip>
          </Chips>
        </Grid.Col>
      </Grid>
    </>
  );
};
