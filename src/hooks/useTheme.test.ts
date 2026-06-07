import { act, renderHook } from '@testing-library/react';

import { useTheme } from './useTheme';

beforeEach(() => {
  localStorage.clear();
  document.documentElement.className = '';
});

test('toggle switches between light and dark', () => {
  const { result } = renderHook(() => useTheme());

  const initial = result.current.theme;

  act(() => {
    result.current.toggle();
  });

  const toggled = initial === 'light' ? 'dark' : 'light';
  expect(result.current.theme).toBe(toggled);
  expect(localStorage.getItem('theme')).toBe(toggled);
  expect(document.documentElement.classList.contains('dark')).toBe(
    toggled === 'dark',
  );
});
