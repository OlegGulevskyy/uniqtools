import type { TimestampDatesSettings } from '@/screens/TimestampsDates';
import { TimestampsDatesId } from '@/screens/TimestampsDates';
import { Store } from 'tauri-plugin-store-api';
const SETTINGS_FILE_NAME = '.settings.dat';

interface Settings {
  [TimestampsDatesId]: TimestampDatesSettings;
}

export function useAppSettings<K extends keyof Settings>(screenKey: K) {
  const store = new Store(SETTINGS_FILE_NAME);

  const listAll = async () => {
    return await store.entries();
  };

  const getAll = async () => {
    return await store.get<Settings[K]>(screenKey);
  };

  const getByKey = async (key: keyof Settings[K]) => {
    const all = await getAll();
    if (all) {
      return all[key];
    }
  };

  const updateByKey = async <U extends keyof Settings[K]>(
    key: U,
    value: Settings[K][U]
  ) => {
    store.set(String(key), value);
  };

  const updateAll = async (value: Settings[K]) => {
    await store.set(screenKey, value);
  };

  const resetAll = async () => {
    await store.set(screenKey, null);
  };

  return {
    getAll,
    getByKey,
    updateByKey,
    updateAll,
    resetAll,
    listAll,
  };
}
