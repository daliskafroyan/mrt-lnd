import { Title, Paper, Stack } from '@mantine/core';
import DashboardLayout from '@/components/layout/DashboardLayout';
import MonitoringTable from '@/components/pages/monitoring/MonitortingTable';

export default function Monitoring() {
  return (
    <DashboardLayout>
      <Stack spacing="lg">
        <Title
          order={3}
          fw="bold"
          sx={(theme) => ({
            color: theme.colors.gray[8],
          })}
        >
          Monitoring
        </Title>
        <Paper shadow="xs" withBorder>
          <MonitoringTable />
        </Paper>
      </Stack>
    </DashboardLayout>
  );
}
