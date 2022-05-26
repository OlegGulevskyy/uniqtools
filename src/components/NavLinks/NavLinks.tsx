import { ALL_SCREENS } from '@/data/screens';
import { ChangeScreenPropType, useNavigation } from '@/contexts/navigation';
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
  isActive: boolean;
  onClick: () => void;
  shortDescription?: string;
}

function NavLink({
  icon,
  color,
  label,
  disabled,
  onClick,
  isActive,
  shortDescription,
}: NavLinkProps) {
  const linkColorStyle = (theme: MantineTheme) => {
    if (disabled) {
      return theme.colorScheme === 'dark' ? theme.colors.gray[6] : theme.black;
    }
    return theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black;
  };
  return (
    <UnstyledButton
      disabled={disabled}
      onClick={onClick}
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
        <ThemeIcon color={isActive ? color : 'gray'} variant="light">
          {icon}
        </ThemeIcon>
        <div>
          <Text size="sm">{label}</Text>
          <Text size="xs" color={'dimmed'}>
            {shortDescription}
          </Text>
        </div>
      </Group>
    </UnstyledButton>
  );
}

export function NavLinks() {
  const { changeScreen, currentScreenIndex } = useNavigation();

  const links = ALL_SCREENS.map((screen, index) => {
    const { navigation } = screen;
    const LinkIcon = navigation.icon;
    return (
      <NavLink
        {...navigation}
        isActive={index === currentScreenIndex}
        onClick={() => changeScreen(screen.id as ChangeScreenPropType)}
        key={navigation.label}
        icon={<LinkIcon size={16} />}
      />
    );
  });
  return <div>{links}</div>;
}
