import { NativeSelect, rem, TextInput } from '@mantine/core';

const data = [
  { value: 'idr', label: 'IDR' },
  { value: 'usd', label: 'USD' },
];

export function CurrencyInput({ label }: { label: string }) {
  const select = (
    <NativeSelect
      data={data}
      styles={{
        input: {
          fontWeight: 500,
          borderTopLeftRadius: 0,
          borderBottomLeftRadius: 0,
          width: rem(92),
        },
      }}
    />
  );

  return (
    <TextInput
      type="number"
      label={label}
      placeholder="1000"
      rightSection={select}
      rightSectionWidth={92}
    />
  );
}
