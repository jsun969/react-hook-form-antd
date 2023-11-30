<div align="center">

# 📋🐜 React Hook Form Antd

用 React Hook Form 拿捏你的 Ant Design 表单！

[![version](https://img.shields.io/npm/v/react-hook-form-antd?style=for-the-badge)](https://www.npmjs.com/package/react-hook-form-antd)
[![license](https://img.shields.io/npm/l/react-hook-form-antd?style=for-the-badge)](https://github.com/jsun969/react-hook-form-antd/blob/main/LICENSE)
[![size](https://img.shields.io/bundlephobia/minzip/react-hook-form-antd?style=for-the-badge)](https://bundlephobia.com/result?p=react-hook-form-antd)
[![downloads](https://img.shields.io/npm/dw/react-hook-form-antd?style=for-the-badge)](https://www.npmjs.com/package/react-hook-form-antd)

[English](./README.md) | 简体中文

</div>

## 📜 依赖

- [react-hook-form](https://github.com/react-hook-form/react-hook-form) `^7`
- [antd](https://github.com/ant-design/ant-design) `^5`

## 🕶 示例

[示例](https://codesandbox.io/s/react-hook-form-antd-example-6s0i3z?file=/src/App.tsx)

## 📦 安装

```bash
npm install react-hook-form-antd
```

## 🎯 快速上手

你可能原本有一个如下的 antd 表单

<details>
<summary>显示代码</summary>

```tsx
<Form onFinish={onFinish}>
  <Form.Item
    label="Username"
    name="username"
    rules={[
      { required: true, message: 'Required' },
      { max: 15, message: 'Username should be less than 15 characters' },
    ]}
  >
    <Input />
  </Form.Item>
  <Form.Item
    label="Password"
    name="password"
    rules={[{ required: true, message: 'Required' }]}
  >
    <Input.Password />
  </Form.Item>
  <Form.Item name="remember" valuePropName="checked">
    <Checkbox>Remember me</Checkbox>
  </Form.Item>
  <Form.Item>
    <Button type="primary" htmlType="submit">
      Submit
    </Button>
  </Form.Item>
</Form>
```

</details>

查看这个表单在使用 `react-hook-form-antd` 后的[示例](https://codesandbox.io/s/react-hook-form-antd-example-6s0i3z?file=/src/App.tsx)

你只需要：

1. 从 `react-hook-form` 中使用 `useForm` 并获取 `control`
2. 从 `react-hook-form-antd` 中使用 `FormItem` 代替 `Form.Item`
   - 将 `control` 传递给所有的 `FormItem` （字段名能从 `control` 中推断 😎）
   - 移除 `rules` 并使用 [react hook form resolver](https://github.com/react-hook-form/resolvers) 替代 （你可以使用任何验证库的 schema 以验证表单 🤩）
   - 在 `onFinish` 中使用 `handleSubmit`
3. 搞定！ 🎉

## 🕹 API

### 🔗 `FormItem`

> Ant Design `Form.Item` [API](https://ant.design/components/form#formitem)

一个用于替代 antd 中的 `Form.Item` 的组件。它已经继承了 `Form.Item` 中除了 `rules` `validateStatus` 之外的所有参数（如果你需要 rules，请使用 [react hook form resolver](https://github.com/react-hook-form/resolvers) 替代）

新增和修改的参数:

| 参数      | 类型    | 描述                                                                               |
| --------- | ------- | ---------------------------------------------------------------------------------- |
| `control` | Control | 来自 `useForm` 的 [control 对象](https://react-hook-form.com/api/useform/control/) |
| `name`    | string  | 表单字段名                                                                         |
