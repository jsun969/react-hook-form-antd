import { zodResolver } from '@hookform/resolvers/zod';
import { Button, Checkbox, Form, Input } from 'antd';
import { useForm } from 'react-hook-form';
import z from 'zod';

import { FormItem } from '../src';

const schema = z.object({
  username: z
    .string()
    .min(1, { message: 'Username is required' })
    .max(15, { message: 'Username should be less than 15 characters' }),
  password: z.string().min(1, { message: 'Password is required' }),
  remember: z.boolean(),
});
export type TestFormData = z.infer<typeof schema>;

const TestForm = ({ submitFn }: { submitFn: (data: TestFormData) => void }) => {
  const { control, watch, handleSubmit, reset } = useForm<TestFormData>({
    defaultValues: { username: 'jsun969', password: '', remember: true },
    resolver: zodResolver(schema),
  });

  return (
    <Form
      style={{ maxWidth: 600 }}
      onFinish={handleSubmit((data) => {
        submitFn?.(data);
      })}
    >
      <FormItem
        control={control}
        name="username"
        label="Username"
        help="default help message"
        data-testid="username-field"
      >
        <Input />
      </FormItem>
      <FormItem
        control={control}
        name="password"
        label="Password"
        disabled={!watch('username')}
        data-testid="password-field"
      >
        <Input.Password />
      </FormItem>
      <FormItem control={control} name="remember" valuePropName="checked">
        <Checkbox>Remember me</Checkbox>
      </FormItem>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
        <Button type="primary" onClick={() => reset()}>
          Reset
        </Button>
      </Form.Item>
    </Form>
  );
};
export default TestForm;
