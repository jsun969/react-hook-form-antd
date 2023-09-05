import { Form as AntdForm } from 'antd';
import type React from 'react';
import { useEffect } from 'react';
import type { Control, FieldPath, FieldValues } from 'react-hook-form';
import { useController, useFormContext } from 'react-hook-form';

type AntdFormItemProps = React.ComponentProps<typeof AntdForm.Item>;

export type FormItemProps<TFieldValues extends FieldValues = FieldValues> = {
  children: React.ReactNode;
  name: FieldPath<TFieldValues>;
  control?: Control<TFieldValues>;
} & Omit<AntdFormItemProps, 'name' | 'normalize' | 'rules' | 'validateStatus'>;

// TODO: Support `onBlur` `ref`
// FIXME: `Touched` does not change in devtool
export const FormItem = <TFieldValues extends FieldValues = FieldValues>({
  children,
  control,
  name,
  help,
  ...props
}: FormItemProps<TFieldValues>) => {
  const form = AntdForm.useFormInstance();
  const { field, fieldState } = useController(
    control ? { name } : { name, control },
  );

  const handleNormalize: AntdFormItemProps['normalize'] = (value) => {
    field.onChange(value);
    return value;
  };

  useEffect(() => {
    if (!form) return;

    const prevFieldValue = form.getFieldValue(name);
    const latestFieldValue = field.value;

    if (prevFieldValue !== latestFieldValue)
      form.setFieldValue(name, field.value);
  }, [form, name, field.value]);

  return (
    <AntdForm.Item
      {...props}
      name={name}
      initialValue={field.value}
      normalize={handleNormalize}
      validateStatus={fieldState.invalid ? 'error' : undefined}
      help={fieldState.error?.message ?? help}
    >
      {children}
    </AntdForm.Item>
  );
};
