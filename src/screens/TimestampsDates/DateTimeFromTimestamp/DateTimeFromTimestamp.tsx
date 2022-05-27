import { CopyableBox } from '@/components/CopyableBox';
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
import React from 'react';

const TIMESTAMP_MS_LENGTH = 13;
const TIMESTAMP_SECONDS_LENGTH = 10;

export const DateTimeFromTimestamp = () => {
  const [timestampInput, setTimestampInput] = React.useState('');
  const onTimestampChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    if (value.length > TIMESTAMP_MS_LENGTH) return;

    setTimestampInput(e.target.value);
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
          <CopyableBox displayValue="25/12/2020" />
        </Grid.Col>
        <Grid.Col span={8}>
          <Title order={5}>Settings</Title>
          <Group grow>
            <InputWrapper label="Output formatting">
              <Input placeholder="MM/DD/YYYY || HH:mm:ss" />
            </InputWrapper>

            <Stack style={{ height: '50%' }} spacing={6}>
              <Title order={6}>Timezone</Title>
              <SegmentedControl
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
