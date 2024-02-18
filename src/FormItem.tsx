import { Form as AntdForm } from 'antd';
import React from 'react';
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

// TODO: Support `onBlur` `ref` `reset`
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
  const form = AntdForm.useFormInstance();

  React.useEffect(() => {
    form.setFieldValue(name, field.value);
  }, [field.value]);

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
            //@ts-expect-error onChange type safe is not necessary here
            onChange: (...params) => {
              child.props.onChange && child.props.onChange(...params);
              field.onChange(...params);
            },
            onBlur: () => {
              child.props.onBlur && child.props.onBlur();
              field.onBlur();
            },
            ...(valuePropName && {
              [valuePropName]: field.value,
            }),
          }),
      )}
    </AntdForm.Item>
  );
};
