import { CurrencyInput } from '@/components/CurrencyInput';
import DropzoneImage from '@/components/DropzoneImage';
import DashboardLayout from '@/components/layout/DashboardLayout';
import {
  Title,
  Group,
  Text,
  Box,
  Select,
  Stack,
  Textarea,
  TextInput,
} from '@mantine/core';
import { DatePickerInput } from '@mantine/dates';
import { useState } from 'react';

export default function IDPSubmission() {
  const [value, setValue] = useState<[Date | null, Date | null]>([null, null]);
  return (
    <DashboardLayout>
      <Title order={4}>Form Pengajuan IDP</Title>
      <Group spacing="xl" mt={40}>
        <Stack style={{ flex: 7 }} spacing="xl">
          <Stack>
            <Stack spacing={0}>
              <Text>Jenis Kompetensi Program</Text>
              <Text c="dimmed">Informasi Program yang akan diajukan</Text>
            </Stack>
            <Group spacing="lg" grow>
              <Stack>
                <Select
                  label="Jenis Kompetensi"
                  placeholder="Technical Skill Competency"
                  data={[
                    { value: 'react', label: 'React' },
                    { value: 'ng', label: 'Angular' },
                  ]}
                />
                <Select
                  label="Kategori Program"
                  placeholder="Acceleration Program"
                  data={[
                    { value: 'react', label: 'React' },
                    { value: 'ng', label: 'Angular' },
                  ]}
                />
                <Select
                  label="Jenis Program"
                  placeholder="Pelatihan"
                  data={[
                    { value: 'react', label: 'React' },
                    { value: 'ng', label: 'Angular' },
                  ]}
                />
              </Stack>
              <Textarea
                placeholder="contoh: Pelatihan ISO 3100"
                label="Judul Program"
                minRows={7}
                mb="auto"
              />
            </Group>
          </Stack>
          <Stack>
            <Stack spacing={0}>
              <Text>Jenis Kompetensi Program</Text>
              <Text c="dimmed">Informasi Program yang akan diajukan</Text>
            </Stack>
            <Group spacing="lg" grow>
              <Stack>
                <TextInput label="Penyelenggara" />
                <DatePickerInput
                  type="range"
                  label="Pick dates range"
                  placeholder="Pick dates range"
                  value={value}
                  onChange={setValue}
                  maw={400}
                />
                <CurrencyInput label="Estimasi Biaya" />
              </Stack>
              <Textarea
                placeholder="contoh: Pelatihan ISO 3100"
                label="Judul Program"
                minRows={7}
                mb="auto"
              />
            </Group>
          </Stack>
          <Stack>
            <Stack spacing={0}>
              <Text>Dokumen Pendukung</Text>
              <Text c="dimmed">Unggah bukti terkait</Text>
            </Stack>
            <DropzoneImage />
            <Text size="sm" c="dimmed">
              *Anda dapat mengupload brosur atau flyer yang akan diajukan
            </Text>
          </Stack>
        </Stack>
        <Box mb="auto" style={{ flex: 3 }}>
          <Title order={3}>Catatan IDP</Title>
          <Text c="dimmed">Catatan approval/reject dari atasan</Text>
        </Box>
      </Group>
    </DashboardLayout>
  );
}
