<div align="center">

# 📋 React Hook Form Antd 🐜

Master your Ant Design form with React Hook Form!

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

## 🚧 Known Issues

#### TypeError: elm.focus is not a function

When using an upload component, set `shouldFocusError: false` in your `useForm` configuration. This will prevent React Hook Form from trying to focus on the error, effectively resolving the issue.

## 👥 Contributors

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tbody>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="http://jsun.lol"><img src="https://avatars.githubusercontent.com/u/29330847?v=4?s=100" width="100px;" alt="Yeyang (Justin) Sun"/><br /><sub><b>Yeyang (Justin) Sun</b></sub></a><br /><a href="https://github.com/jsun969/react-hook-form-antd/commits?author=jsun969" title="Code">💻</a> <a href="#ideas-jsun969" title="Ideas, Planning, & Feedback">🤔</a> <a href="#maintenance-jsun969" title="Maintenance">🚧</a> <a href="https://github.com/jsun969/react-hook-form-antd/commits?author=jsun969" title="Documentation">📖</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/jakub-szewczyk"><img src="https://avatars.githubusercontent.com/u/134627903?v=4?s=100" width="100px;" alt="Jakub Szewczyk"/><br /><sub><b>Jakub Szewczyk</b></sub></a><br /><a href="https://github.com/jsun969/react-hook-form-antd/commits?author=jakub-szewczyk" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/dmuharemagic"><img src="https://avatars.githubusercontent.com/u/2150642?v=4?s=100" width="100px;" alt="Dino Muharemagić"/><br /><sub><b>Dino Muharemagić</b></sub></a><br /><a href="https://github.com/jsun969/react-hook-form-antd/commits?author=dmuharemagic" title="Code">💻</a> <a href="https://github.com/jsun969/react-hook-form-antd/issues?q=author%3Admuharemagic" title="Bug reports">🐛</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/avegatolber"><img src="https://avatars.githubusercontent.com/u/159487029?v=4?s=100" width="100px;" alt="avegatolber"/><br /><sub><b>avegatolber</b></sub></a><br /><a href="https://github.com/jsun969/react-hook-form-antd/commits?author=avegatolber" title="Code">💻</a> <a href="https://github.com/jsun969/react-hook-form-antd/issues?q=author%3Aavegatolber" title="Bug reports">🐛</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://dev.ahmedrowaihi.lol"><img src="https://avatars.githubusercontent.com/u/67356781?v=4?s=100" width="100px;" alt="Ahmed Rowaihi"/><br /><sub><b>Ahmed Rowaihi</b></sub></a><br /><a href="https://github.com/jsun969/react-hook-form-antd/commits?author=ahmedrowaihi" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/yorman2401"><img src="https://avatars.githubusercontent.com/u/66335054?v=4?s=100" width="100px;" alt="Yorman Rodriguez"/><br /><sub><b>Yorman Rodriguez</b></sub></a><br /><a href="https://github.com/jsun969/react-hook-form-antd/issues?q=author%3Ayorman2401" title="Bug reports">🐛</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://snndmnsz.com"><img src="https://avatars.githubusercontent.com/u/42818330?v=4?s=100" width="100px;" alt="Sinan"/><br /><sub><b>Sinan</b></sub></a><br /><a href="https://github.com/jsun969/react-hook-form-antd/commits?author=snndmnsz" title="Documentation">📖</a></td>
    </tr>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/nagamejun"><img src="https://avatars.githubusercontent.com/u/18486040?v=4?s=100" width="100px;" alt="nagamejun"/><br /><sub><b>nagamejun</b></sub></a><br /><a href="https://github.com/jsun969/react-hook-form-antd/issues?q=author%3Anagamejun" title="Bug reports">🐛</a> <a href="https://github.com/jsun969/react-hook-form-antd/commits?author=nagamejun" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/Anav11"><img src="https://avatars.githubusercontent.com/u/43610000?v=4?s=100" width="100px;" alt="Andrey"/><br /><sub><b>Andrey</b></sub></a><br /><a href="https://github.com/jsun969/react-hook-form-antd/issues?q=author%3AAnav11" title="Bug reports">🐛</a></td>
    </tr>
  </tbody>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
