import { useError } from '@/hooks/useError';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import dayOfYear from 'dayjs/plugin/dayOfYear';
import weekOfYear from 'dayjs/plugin/weekOfYear';
import locale from 'dayjs/locale/en-gb';
import React from 'react';
import { DateTimezone } from './types';
import { useTimestampsDates } from '../context';

dayjs.extend(utc).locale(locale);
dayjs.extend(dayOfYear);
dayjs.extend(weekOfYear);

const TIMESTAMP_MS_LENGTH = 13;
const TIMESTAMP_SECONDS_LENGTH = 10;
const DEFAULT_OUTPUT_FORMAT = 'DD/MM/YYYY HH:mm:ss';

type ShowCountsOfType = 'daysCount' | 'weekCount' | 'monthCount';

export const useLogic = () => {
  const { setShowCountsOf, dateTimezone, setDateTimezone, showCountsOf } =
    useTimestampsDates();

  const onDateTimezoneChange = (value: DateTimezone) => setDateTimezone(value);

  const onShowCountsOfChange = (changeData: ShowCountsOfType[]) => {
    setShowCountsOf(changeData);
  };
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

  const dayOfYear = React.useMemo(() => {
    if (!timestampInput) return 0;
    return dayjs(Number(timestampInput)).dayOfYear();
  }, [timestampInput]);

  const weekOfYear = React.useMemo(() => {
    if (!timestampInput) return 0;
    return dayjs(Number(timestampInput)).week();
  }, [timestampInput]);

  const monthOfYear = React.useMemo(() => {
    if (!timestampInput) return 0;
    // months retrieved are 0 index based
    return dayjs(Number(timestampInput)).month() + 1;
  }, [timestampInput]);

  return {
    outputResult,
    timestampInput,
    onTimestampChange,
    timestampFormat,
    outputFormat,
    onOutputFormatChange,
    dateTimezone,
    setDateTimezone: onDateTimezoneChange,
    showCountsOf,
    onShowCountsOfChange,
    dayOfYear,
    weekOfYear,
    monthOfYear,
  };
};
