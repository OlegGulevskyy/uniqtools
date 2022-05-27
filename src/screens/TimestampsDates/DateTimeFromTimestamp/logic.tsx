import { useError } from '@/hooks/useError';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import React from 'react';

dayjs.extend(utc);

const TIMESTAMP_MS_LENGTH = 13;
const TIMESTAMP_SECONDS_LENGTH = 10;
const DEFAULT_OUTPUT_FORMAT = 'DD/MM/YYYY HH:mm:ss';

export const useLogic = () => {
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
  return {
    outputResult,
    timestampInput,
    onTimestampChange,
    timestampFormat,
    outputFormat,
    onOutputFormatChange,
    dateTimezone,
    setDateTimezone,
  };
};
