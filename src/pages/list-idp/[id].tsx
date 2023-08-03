import {
  Title,
  Paper,
  Stack,
  Breadcrumbs,
  Button,
  ActionIcon,
} from '@mantine/core';
import {
  ListIDPHardskillTable,
  ListIDPSoftskillTable,
} from '@/components/pages/list-idp';
import DashboardLayout from '@/components/layout/DashboardLayout';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { IconHome } from '@tabler/icons-react';

export default function DetailsIDP() {
  const router = useRouter();
  const { id: idpId } = router.query;

  const items = [
    { title: 'Home', href: '/dashboard' },
    { title: 'List IDP', href: '/list-idp' },
    { title: idpId, href: `/list-idp/${idpId}` },
  ].map((item, index) => (
    <Link href={item.href} key={index}>
      {item.title === 'Home' ? (
        <ActionIcon>
          <IconHome size="1.125rem" />
        </ActionIcon>
      ) : (
        <Button compact variant="subtle">
          {item.title}
        </Button>
      )}
    </Link>
  ));

  return (
    <DashboardLayout>
      <Breadcrumbs>{items}</Breadcrumbs>
      <Stack spacing="lg" mt="xl">
        <Title
          order={3}
          sx={(theme) => ({
            color: theme.colors.gray[8],
          })}
        >
          List Individual Development Plan
        </Title>
        <Paper shadow="xs" withBorder>
          <ListIDPSoftskillTable />
        </Paper>
        <Paper shadow="xs" withBorder>
          <ListIDPHardskillTable />
        </Paper>
      </Stack>
    </DashboardLayout>
  );
}
