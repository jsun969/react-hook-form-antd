<div align="center">

# 📋🐜 React Hook Form Antd

Master your And Design form with React Hook Form!

[![version](https://img.shields.io/npm/v/react-hook-form-antd?style=for-the-badge)](https://www.npmjs.com/package/react-hook-form-antd)
[![license](https://img.shields.io/npm/l/react-hook-form-antd?style=for-the-badge)](https://github.com/jsun969/react-hook-form-antd/blob/main/LICENSE)
[![size](https://img.shields.io/bundlephobia/minzip/react-hook-form-antd?style=for-the-badge)](https://bundlephobia.com/result?p=react-hook-form-antd)
[![downloads](https://img.shields.io/npm/dw/react-hook-form-antd?style=for-the-badge)](https://www.npmjs.com/package/react-hook-form-antd)

English | [简体中文](./README_zh-CN.md)

</div>

## 📜 Requirement

- [react-hook-form](https://github.com/react-hook-form/react-hook-form) `^7`
- [antd](https://github.com/ant-design/ant-design) `^5`

## 🕶 Example

[EXAMPLE](https://codesandbox.io/s/react-hook-form-antd-example-6s0i3z?file=/src/App.tsx)

## 📦 Installation

```bash
npm install react-hook-form-antd
```

## 🎯 Quickstart

You may have an original antd form like below

<details>
<summary>Show code</summary>

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

Check the [EXAMPLE](https://codesandbox.io/s/react-hook-form-antd-example-6s0i3z?file=/src/App.tsx) for this form after using `react-hook-form-antd`!

All you need to do:

1. Use `useForm` from `react-hook-form` and get `control`
2. Use `FormItem` from `react-hook-form-antd` instead of `Form.Item`
   - Pass `control` to all `FormItem` (Field names can be inferred by `control` 😎)
   - Remove `rules` and use [react hook form resolver](https://github.com/react-hook-form/resolvers) instead (You can use schema from any validation libraries 🤩)
   - Use `handleSubmit` in `onFinish`
3. Enjoy! 🎉

## 🕹 API

### 🔗 `FormItem`

> Ant Design `Form.Item` [API](https://ant.design/components/form#formitem)

A component instead of `Form.Item` in antd. It has inherited all props from `Form.Item` except `rules` `validateStatus` (If you need rules, please use [react hook form resolver](https://github.com/react-hook-form/resolvers) instead)

Added and modified props:

| Prop      | Type    | Description                                                                       |
| --------- | ------- | --------------------------------------------------------------------------------- |
| `control` | Control | [control object](https://react-hook-form.com/api/useform/control/) from `useForm` |
| `name`    | string  | form field name                                                                   |
