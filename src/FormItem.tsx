import { Form as AntdForm } from 'antd';
import type React from 'react';
import { Children, cloneElement, isValidElement } from 'react';
import type { Control, FieldPath, FieldValues } from 'react-hook-form';
import { Controller, useController } from 'react-hook-form';

type AntdFormItemProps = React.ComponentProps<typeof AntdForm.Item>;

export type FormItemProps<TFieldValues extends FieldValues = FieldValues> = {
  children: React.ReactNode;
  control: Control<TFieldValues>;
  name: FieldPath<TFieldValues>;
} & Omit<AntdFormItemProps, 'name' | 'rules' | 'validateStatus'>;

// TODO: Support `onBlur` `ref`
// FIXME: `Touched` does not change in devtool
export const FormItem = <TFieldValues extends FieldValues = FieldValues>({
  children,
  control,
  name,
  help,
  valuePropName,
  ...props
}: FormItemProps<TFieldValues>) => {
  const { fieldState } = useController({ name, control });

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <AntdForm.Item
          {...props}
          validateStatus={fieldState.invalid ? 'error' : undefined}
          help={fieldState.error?.message ?? help}
        >
          {Children.map(
            children,
            (child) =>
              isValidElement(child) &&
              cloneElement(child, {
                ...field,
                ...(valuePropName && {
                  [valuePropName]: field.value,
                }),
              }),
          )}
        </AntdForm.Item>
      )}
    />
  );
};
