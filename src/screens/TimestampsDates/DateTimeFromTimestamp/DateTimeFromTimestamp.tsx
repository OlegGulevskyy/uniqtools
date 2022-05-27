import { CopyableBox } from '@/components/CopyableBox';
import { useError } from '@/hooks/useError';
import {
  Checkbox,
  CheckboxGroup,
  Grid,
  Group,
  Input,
  InputWrapper,
  SegmentedControl,
  Stack,
  Title,
  Text,
} from '@mantine/core';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import React from 'react';

dayjs.extend(utc);

const TIMESTAMP_MS_LENGTH = 13;
const TIMESTAMP_SECONDS_LENGTH = 10;
const DEFAULT_OUTPUT_FORMAT = 'DD/MM/YYYY HH:mm:ss';

export const DateTimeFromTimestamp = () => {
  const [dateTimezone, setDateTimezone] = React.useState('local');
  const keepLocal = React.useMemo(() => {
    return dateTimezone === 'local';
  }, [dateTimezone]);

  const [timestampInput, setTimestampInput] = React.useState(
    String(dayjs().utc(keepLocal).valueOf())
  );
  const [outputFormat, setOutputFormat] = React.useState('');

  const onTimestampChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    if (value.length > TIMESTAMP_MS_LENGTH) return;
    if (isNaN(Number(value))) return;

    setTimestampInput(e.target.value);
  };

  const onOutputFormatChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setOutputFormat(value);
  };

  const timestampFormat = React.useMemo(() => {
    if (timestampInput.length === TIMESTAMP_MS_LENGTH) {
      return 'Milliseconds';
    }
    if (timestampInput.length === TIMESTAMP_SECONDS_LENGTH) {
      return 'Seconds';
    }
    return 'Unknown';
  }, [timestampInput]);

  const outputResult = React.useMemo(() => {
    if (Number(timestampInput) === 0) return 'Nothing to parse';
    try {
      const result = dayjs(Number(timestampInput))
        .utc(keepLocal)
        .format(outputFormat || DEFAULT_OUTPUT_FORMAT);
      return result;
    } catch (err) {
      useError(err);
    }
  }, [outputFormat, timestampInput, dateTimezone]);
  return (
    <>
      <Title order={5}>Get timestamp from date and time</Title>
      <Grid>
        <Grid.Col span={4}>
          <InputWrapper
            label="Unix timestamp"
            description="Enter any format of unix timestamp (ms or seconds) from epoch"
          >
            <Input
              value={Number(timestampInput)}
              placeholder="Unix timestamp"
              onChange={onTimestampChange}
            />
          </InputWrapper>
          <Group>
            <Text size="xs" color="dimmed">
              Input length: {timestampInput.length}
            </Text>
            <Text size="xs" color="dimmed">
              Timestamp format: {timestampFormat}
            </Text>
          </Group>
          <CopyableBox
            enableTooltip
            displayValue={outputResult || 'Failed to parse'}
          />
        </Grid.Col>
        <Grid.Col span={8}>
          <Title order={5}>Settings</Title>
          <Group grow>
            <InputWrapper label="Output formatting">
              <Input
                value={outputFormat}
                onChange={onOutputFormatChange}
                placeholder="MM/DD/YYYY || HH:mm:ss"
              />
            </InputWrapper>

            <Stack style={{ height: '50%' }} spacing={6}>
              <Title order={6}>Timezone</Title>
              <SegmentedControl
                value={dateTimezone}
                onChange={setDateTimezone}
                data={[
                  { label: 'Local', value: 'local' },
                  { label: 'UTC', value: 'utc' },
                ]}
              />
            </Stack>
          </Group>

          <CheckboxGroup
            defaultValue={['daysCount']}
            label="Show counts of"
            description="Show / hide count of day, months etc."
          >
            <Checkbox value="daysCount" label="Days" />
            <Checkbox value="weekCount" label="Weeks" />
            <Checkbox value="monthCount" label="Months" />
          </CheckboxGroup>
        </Grid.Col>
      </Grid>
    </>
  );
};
