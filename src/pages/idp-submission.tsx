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
  Button,
  Badge,
} from '@mantine/core';
import { DatePickerInput } from '@mantine/dates';
import { IconPencil } from '@tabler/icons-react';
import { useState } from 'react';

export default function IDPSubmission() {
  const [value, setValue] = useState<[Date | null, Date | null]>([null, null]);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  return (
    <DashboardLayout>
      <Box p="xl">
        <Group position="apart">
          <Group>
            <Title order={4}>Form Pengajuan IDP</Title>
            {isSubmitted ? (
              <Badge size="lg" radius="xs" variant="light">
                diajukan
              </Badge>
            ) : null}
          </Group>
          {isSubmitted ? null : (
            <Button
              variant="default"
              leftIcon={<IconPencil />}
              onClick={() => setIsSubmitted(!isSubmitted)}
            >
              Edit
            </Button>
          )}
        </Group>
        <Group spacing="xl" mt={40}>
          <Stack style={{ flex: 7 }} spacing="xl">
            <Stack>
              <Stack spacing={0}>
                <Text>Tentang Program</Text>
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
          <Stack style={{ flex: 3 }} justify="space-between" mb="auto">
            <Stack spacing={0}>
              <Title order={3}>Catatan IDP</Title>
              <Text c="dimmed">Catatan approval/reject dari atasan</Text>
            </Stack>
          </Stack>
        </Group>
        <Group position="right" mt="xl">
          <Button variant="default" disabled={!isSubmitted}>
            Batal
          </Button>
          <Button
            onClick={() => setIsSubmitted(!isSubmitted)}
            disabled={!isSubmitted}
          >
            Simpan
          </Button>
        </Group>
      </Box>
    </DashboardLayout>
  );
}
