/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect, useState } from 'react';
import {
  createStyles,
  Navbar,
  Group,
  getStylesRef,
  rem,
  Image,
} from '@mantine/core';
import {
  IconSwitchHorizontal,
  IconLogout,
  IconClipboard,
  IconTimeline,
  IconPencilMinus,
  IconHome,
  IconListSearch,
} from '@tabler/icons-react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const useStyles = createStyles((theme) => ({
  header: {
    paddingBottom: theme.spacing.md,
    marginBottom: `calc(${theme.spacing.md} * 1.5)`,
  },

  footer: {
    paddingTop: theme.spacing.md,
    borderTop: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2]
    }`,
  },

  link: {
    ...theme.fn.focusStyles(),
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
    fontSize: theme.fontSizes.sm,
    color:
      theme.colorScheme === 'dark'
        ? theme.colors.dark[1]
        : theme.colors.gray[7],
    padding: `${theme.spacing.xs} ${theme.spacing.sm}`,
    borderRadius: theme.radius.sm,
    fontWeight: 500,

    '&:hover': {
      backgroundColor:
        theme.colorScheme === 'dark'
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
      color: theme.colorScheme === 'dark' ? theme.white : theme.black,

      [`& .${getStylesRef('icon')}`]: {
        color: theme.colorScheme === 'dark' ? theme.white : theme.black,
      },
    },
  },

  linkIcon: {
    ref: getStylesRef('icon'),
    color:
      theme.colorScheme === 'dark'
        ? theme.colors.dark[2]
        : theme.colors.gray[6],
    marginRight: theme.spacing.sm,
  },

  linkActive: {
    '&, &:hover': {
      backgroundColor: theme.fn.variant({
        variant: 'light',
        color: theme.primaryColor,
      }).background,
      color: theme.fn.variant({ variant: 'light', color: theme.primaryColor })
        .color,
      [`& .${getStylesRef('icon')}`]: {
        color: theme.fn.variant({ variant: 'light', color: theme.primaryColor })
          .color,
      },
    },
  },
}));

const data = [
  { link: '/dashboard', label: 'Dashboard', icon: IconHome },
  { link: '/list-idp', label: 'List IDP', icon: IconListSearch },
  { link: '/planning', label: 'Planning', icon: IconPencilMinus },
  { link: '/monitoring', label: 'Monitoring', icon: IconTimeline },
  { link: '/evaluasi', label: 'Evaluasi', icon: IconClipboard },
];

export default function SideNavbar() {
  const { classes, cx } = useStyles();
  const [active, setActive] = useState('/dashboard');

  const { asPath: pathname } = useRouter();

  useEffect(() => {
    setActive(pathname);
  }, [pathname]);

  const links = data.map((item) => (
    <Link
      className={cx(classes.link, {
        [classes.linkActive]: item.link === active,
      })}
      href={item.link}
      key={item.label}
    >
      <item.icon className={classes.linkIcon} stroke={1.5} />
      <span>{item.label}</span>
    </Link>
  ));

  return (
    <Navbar height={700} width={{ sm: 300 }} p="md" h="100vh">
      <Navbar.Section grow>
        <Group className={classes.header} position="apart">
          <Image alt="mrt logo" src="/mrt-logo.png" width="130" height="36" />
        </Group>
        {links}
      </Navbar.Section>

      <Navbar.Section className={classes.footer}>
        <Link href="#" className={classes.link}>
          <IconSwitchHorizontal className={classes.linkIcon} stroke={1.5} />
          <span>Change account</span>
        </Link>

        <Link href="#" className={classes.link}>
          <IconLogout className={classes.linkIcon} stroke={1.5} />
          <span>Logout</span>
        </Link>
      </Navbar.Section>
    </Navbar>
  );
}
