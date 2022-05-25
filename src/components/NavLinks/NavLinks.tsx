import { ALL_SCREENS } from '@/data/screens';
import {
  ThemeIcon,
  UnstyledButton,
  Group,
  Text,
  MantineTheme,
} from '@mantine/core';

interface NavLinkProps {
  icon: React.ReactNode;
  color: string;
  label: string;
  disabled?: boolean;
}

function NavLink({ icon, color, label, disabled }: NavLinkProps) {
  const linkColorStyle = (theme: MantineTheme) => {
    if (disabled) {
      return theme.colorScheme === 'dark' ? theme.colors.gray[6] : theme.black;
    }
    return theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black;
  };
  return (
    <UnstyledButton
      disabled
      sx={(theme) => ({
        display: 'block',
        width: '100%',
        padding: theme.spacing.xs,
        borderRadius: theme.radius.sm,
        color: linkColorStyle(theme),

        '&:hover': {
          backgroundColor:
            theme.colorScheme === 'dark'
              ? theme.colors.dark[6]
              : theme.colors.gray[0],
        },
        cursor: disabled ? 'not-allowed' : 'pointer',
      })}
    >
      <Group>
        <ThemeIcon color={color} variant="light">
          {icon}
        </ThemeIcon>

        <Text size="sm">{label}</Text>
      </Group>
    </UnstyledButton>
  );
}

export function NavLinks() {
  const links = ALL_SCREENS.map(({ navigation }) => {
    const LinkIcon = navigation.icon;
    return (
      <NavLink
        {...navigation}
        key={navigation.label}
        icon={<LinkIcon size={16} />}
      />
    );
  });
  return <div>{links}</div>;
}
