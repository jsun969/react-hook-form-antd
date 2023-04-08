import { Form as AntdForm } from 'antd';
import type React from 'react';
import type { Control, FieldPath, FieldValues } from 'react-hook-form';
import { useController } from 'react-hook-form';

type AntdFormItemProps = React.ComponentProps<typeof AntdForm.Item>;

export type FormItemProps<TFieldValues extends FieldValues = FieldValues> = {
  children: React.ReactNode;
  control: Control<TFieldValues>;
  name: FieldPath<TFieldValues>;
} & Omit<AntdFormItemProps, 'name' | 'shouldUpdate' | 'rules'>;

// TODO: Support `onBlur` `ref` in `useController`
export const FormItem = <TFieldValues extends FieldValues = FieldValues>({
  children,
  control,
  name,
  ...props
}: FormItemProps<TFieldValues>) => {
  const { field, fieldState } = useController({ name, control });

  const handleShouldUpdate: AntdFormItemProps['shouldUpdate'] = (
    _,
    nextValues,
  ) => {
    field.onChange(nextValues);
    return true;
  };
  const rules: AntdFormItemProps['rules'] = [
    {
      validator: () => {
        if (fieldState.invalid) {
          throw new Error(fieldState.error?.message);
        }
      },
    },
  ];

  return (
    <AntdForm.Item
      {...props}
      name={name}
      initialValue={field.value}
      shouldUpdate={handleShouldUpdate}
      rules={rules}
    >
      {children}
    </AntdForm.Item>
  );
};
