import {describe, expect, test} from 'vitest';
import {fireEvent, render, screen} from '@testing-library/react';
import App from './App';

describe('counter tests', () => {
  test("App Starts", () => {
    render(<App />);
    expect(screen.getByText('chorus')).toBeDefined();
  });
});