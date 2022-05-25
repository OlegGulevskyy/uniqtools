import { JsonValidationFormatting } from '@/screens/JsonValidationFormatting';
import { TimestampsDates } from '@/screens/TimestampsDates';

import { Lock, CalendarTime } from 'tabler-icons-react';

export const ALL_SCREENS = [
  {
    component: TimestampsDates,
    title: 'Timestamp and Dates parsing',
    id: 'timestamps-dates',
    navigation: {
      icon: CalendarTime,
      color: 'blue',
      label: 'Timestamps and Dates',
    },
  },
  {
    component: JsonValidationFormatting,
    title: 'JSON Validation and Formatting utility',
    id: 'json-validate-format',
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
    id: 'base64-string',
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
    id: 'markdown-editor',
    navigation: {
      icon: Lock,
      color: 'gray',
      label: 'Markdown preview',
      disabled: true,
    },
  },
];
