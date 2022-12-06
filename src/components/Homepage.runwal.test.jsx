import { NoteSelectorBar } from "./NoteSelectorBar";
import Homepage from "./Homepage";

import { describe, expect, test, it } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';

describe('homepage tests', () => {
    it('homepage displays join with code text', () => {
        render(<Homepage/>);
        expect(screen.getByText(/Join With Code/)).toBeDefined();
    })
});