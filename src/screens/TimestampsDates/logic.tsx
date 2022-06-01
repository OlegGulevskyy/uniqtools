import React from 'react';
import { useAppSettings } from '@/hooks/useAppSettings';
import { defaultTimestampDatesSettings } from '.';
import { TimestampDatesSettings } from './types';

export const useLogic = () => {
  const { updateAll, getByKey, getAll } = useAppSettings('timestamps-dates');
  const [screenSettings, setScreenSettings] =
    React.useState<TimestampDatesSettings>(defaultTimestampDatesSettings);

  React.useEffect(() => {
    const loadScreenSettings = async () => {
      const settings = await getAll();
      if (!settings) {
        updateAll(screenSettings);
      } else {
        setScreenSettings(settings);
      }
    };
    loadScreenSettings();
  }, []);

  const saveSettings = () => {};
  return {
    saveSettings,
    getByKey,
  };
};
