import { DevTool } from '@hookform/devtools';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button, Checkbox, Form, Input } from 'antd';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

import { FormItem } from '../../src';

const schema = z.object({
  username: z
    .string()
    .min(1, { message: 'Required' })
    .max(15, { message: 'Username should be less than 15 characters' }),
  password: z.string().min(1, { message: 'Required' }),
  remember: z.boolean(),
});

const App = () => {
  const { control, handleSubmit, reset } = useForm({
    defaultValues: { username: 'jsun969', password: '', remember: true },
    resolver: zodResolver(schema),
  });

  return (
    <>
      <Form
        style={{ maxWidth: 600 }}
        onFinish={handleSubmit((data) => {
          console.log(data);
        })}
      >
        <FormItem
          control={control}
          name="username"
          label="Username"
          help="default help message"
        >
          <Input />
        </FormItem>
        <FormItem control={control} name="password" label="Password">
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
      <DevTool control={control} />
    </>
  );
};

export default App;
