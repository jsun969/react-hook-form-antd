import { Form as AntdForm } from 'antd';
import type React from 'react';
import { Children, cloneElement, isValidElement } from 'react';
import type { Control, FieldPath, FieldValues } from 'react-hook-form';
import { useController } from 'react-hook-form';

type AntdFormItemProps = React.ComponentProps<typeof AntdForm.Item>;

export type FormItemProps<TFieldValues extends FieldValues = FieldValues> = {
  children: React.ReactNode;
  control: Control<TFieldValues>;
  name: FieldPath<TFieldValues>;
  disabled?: boolean;
} & Omit<AntdFormItemProps, 'name' | 'rules' | 'validateStatus'>;

// TODO: Support `onBlur` `ref`
export const FormItem = <TFieldValues extends FieldValues = FieldValues>({
  children,
  control,
  name,
  disabled,
  help,
  valuePropName,
  ...props
}: FormItemProps<TFieldValues>) => {
  const { field, fieldState } = useController({ name, control, disabled });

  return (
    <AntdForm.Item
      {...props}
      //@ts-expect-error Ant Design form item name type safe is not necessary here
      name={name}
      initialValue={field.value}
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
  );
};
