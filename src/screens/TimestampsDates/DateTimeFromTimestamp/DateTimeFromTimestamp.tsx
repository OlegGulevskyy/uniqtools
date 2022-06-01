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
import { useLogic } from './logic';

export const DateTimeFromTimestamp = () => {
  const {
    timestampInput,
    onTimestampChange,
    timestampFormat,
    outputResult,
    outputFormat,
    onOutputFormatChange,
    dateTimezone,
    setDateTimezone,
    showCountsOf,
    onShowCountsOfChange,
    weekOfYear,
    dayOfYear,
    monthOfYear,
  } = useLogic();

  return (
    <>
      <Title order={5}>Get date & time from timestamp</Title>
      <Grid>
        <Grid.Col xs={12} sm={12} md={4} lg={4}>
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
        <Grid.Col xs={12} sm={12} md={8} lg={8}>
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

          <Group>
            <CheckboxGroup
              defaultValue={['daysCount']}
              label="Show counts of"
              description="Show / hide count of day, months etc."
              value={showCountsOf}
              onChange={onShowCountsOfChange}
            >
              <Checkbox value="daysCount" label="Days" />
              <Checkbox value="weekCount" label="Weeks" />
              <Checkbox value="monthCount" label="Months" />
            </CheckboxGroup>
            {showCountsOf.includes('daysCount') && (
              <CopyableBox
                displayValue={String(dayOfYear)}
                enableTooltip
                label="Days"
              />
            )}
            {showCountsOf.includes('weekCount') && (
              <CopyableBox
                displayValue={String(weekOfYear)}
                enableTooltip
                label="Weeks"
              />
            )}
            {showCountsOf.includes('monthCount') && (
              <CopyableBox
                displayValue={String(monthOfYear)}
                enableTooltip
                label="Months"
              />
            )}
          </Group>
        </Grid.Col>
      </Grid>
    </>
  );
};
