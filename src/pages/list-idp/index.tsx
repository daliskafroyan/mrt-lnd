import { Title, Paper, Stack } from '@mantine/core';
import {
  ListIDPHardskillTable,
  ListIDPSoftskillTable,
} from '@/components/pages/list-idp';
import DashboardLayout from '@/components/layout/DashboardLayout';

export default function ListIDP() {
  return (
    <DashboardLayout>
      <Stack spacing="lg">
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
