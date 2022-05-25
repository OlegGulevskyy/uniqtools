import { JsonValidationFormatting } from '@/screens/JsonValidationFormatting';
import { TimestampsDates } from '@/screens/Timestamps-And-Dates';

import { Lock, CalendarTime } from 'tabler-icons-react';

export const ALL_SCREENS = [
  {
    component: TimestampsDates,
    title: 'Timestamp and Dates parsing',
    navigation: {
      icon: CalendarTime,
      color: 'blue',
      label: 'Timestamps and Dates',
    },
  },
  {
    component: JsonValidationFormatting,
    title: 'JSON Validation and Formatting utility',
    navigation: {
      icon: Lock,
      color: 'gray',
      label: 'JSON Validation / Formatting',
      disabled: true,
    },
  },
  {
    component: JsonValidationFormatting,
    title: 'Base64 String Encoding / Decoding utility.. Coming soon!',
    navigation: {
      icon: Lock,
      color: 'gray',
      label: 'Base64 String Encoder / Decoder',
      disabled: true,
    },
  },
  {
    component: JsonValidationFormatting,
    title: 'Markdown preview live editor... Coming soon!',
    navigation: {
      icon: Lock,
      color: 'gray',
      label: 'Markdown preview',
      disabled: true,
    },
  },
];
