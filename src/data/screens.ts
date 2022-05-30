import {
  JsonValidationFormatting,
  JSONValidationFormattingId,
} from '@/screens/JsonValidationFormatting';
import { TimestampsDates, TimestampsDatesId } from '@/screens/TimestampsDates';

import { IconLock, IconCalendarTime } from '@tabler/icons';

export const ALL_SCREENS = [
  {
    component: TimestampsDates,
    title: 'Timestamp and Dates parsing',
    id: TimestampsDatesId,
    navigation: {
      icon: IconCalendarTime,
      color: 'blue',
      label: 'Timestamps and Dates',
      shortDescription: 'Parse timestamps and dates',
    },
  },
  {
    component: JsonValidationFormatting,
    title: 'JSON Validation and Formatting utility',
    id: JSONValidationFormattingId,
    navigation: {
      icon: IconLock,
      color: 'pink',
      label: 'JSON Validation / Formatting',
      disabled: true,
      shortDescription: 'Coming soon...',
    },
  },
  {
    component: JsonValidationFormatting,
    title: 'Base64 String Encoding / Decoding utility.. Coming soon!',
    id: 'base64-string',
    navigation: {
      icon: IconLock,
      color: 'gray',
      label: 'Base64 String Encoder / Decoder',
      disabled: true,
      shortDescription: 'Coming soon...',
    },
  },
  {
    component: JsonValidationFormatting,
    title: 'Markdown preview live editor... Coming soon!',
    id: 'markdown-editor',
    navigation: {
      icon: IconLock,
      color: 'gray',
      label: 'Markdown preview',
      disabled: true,
      shortDescription: 'Coming soon...',
    },
  },
];
