import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import type { Mock } from 'vitest';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import type { TestFormData } from './TestForm';
import TestForm from './TestForm';

const clickSubmit = async () => {
  await userEvent.click(screen.getByText('Submit'));
};
let submitFn: Mock<[data: TestFormData], TestFormData>;

describe('Form', () => {
  beforeEach(() => {
    // Restore mock function manually
    submitFn = vi.fn((data: TestFormData) => data);
    render(<TestForm submitFn={submitFn} />);
  });
  afterEach(() => {
    // FIXME: Restore all mocks will make mock function undefined
    // vi.restoreAllMocks();
    cleanup();
  });
  it('should show error message when password is empty', async () => {
    await clickSubmit();
    expect(screen.getByTestId('password-field')).toHaveTextContent(
      'Password is required',
    );
    expect(submitFn).not.toBeCalled();
  });
  it('should show error message when username is too long', async () => {
    await userEvent.type(
      screen.getByLabelText('Username'),
      'looooooooooooooooong',
    );
    await clickSubmit();
    expect(screen.getByTestId('username-field')).toHaveTextContent(
      'Username should be less than 15 characters',
    );
    expect(submitFn).not.toBeCalled();
  });
  it('should submit when validation passed', async () => {
    await userEvent.type(screen.getByLabelText('Password'), 'password');
    await clickSubmit();
    expect(submitFn).toBeCalledWith({
      username: 'jsun969',
      password: 'password',
      remember: true,
    });
  });
  it('should reset when click reset button', async () => {
    await userEvent.type(screen.getByLabelText('Password'), 'password');
    const passwordInputBeforeReset = screen.getByLabelText(
      'Password',
    ) as HTMLInputElement;
    expect(passwordInputBeforeReset.value).toBe('password');
    await userEvent.click(screen.getByText('Reset'));
    const passwordInput = screen.getByLabelText('Password') as HTMLInputElement;
    expect(passwordInput.value).toBe('');
  });
});
