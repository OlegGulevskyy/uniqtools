import { Lock, CalendarTime } from 'tabler-icons-react';

export const navData = [
  {
    icon: <CalendarTime size={16} />,
    color: 'blue',
    label: 'Timestamps and dates',
  },
  {
    icon: <Lock size={16} />,
    color: 'gray',
    label: 'JSON Validation / Formatting',
    disabled: true,
  },
  {
    icon: <Lock size={16} />,
    color: 'gray',
    label: 'Base64 String Encoder / Decoder',
    disabled: true,
  },
  {
    icon: <Lock size={16} />,
    color: 'gray',
    label: 'Markdown preview',
    disabled: true,
  },
];
