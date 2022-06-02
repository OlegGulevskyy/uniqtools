export type ShowCountsOfType = 'daysCount' | 'weekCount' | 'monthCount';

export type DateTimezone = 'local' | 'utc';
export type DateTimeFromTimestampContextType = {
  dateTimezone: DateTimezone;
  setDateTimezone: React.Dispatch<React.SetStateAction<DateTimezone>>;
  showCountsOf: ShowCountsOfType[];
  setShowCountsOf: React.Dispatch<React.SetStateAction<ShowCountsOfType[]>>;
};
