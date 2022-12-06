import { NoteSelectorBar } from "./NoteSelectorBar";

import { describe, expect, test, it } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';

describe('', () => {
    it('when c is the selected note, c# is unselected', () => {
        render(<NoteSelectorBar note={0} setNote={() => {}} octave={5} setOctave={() => {}}/>);
        expect(screen.getByRole('1-unselected')).toBeTruthy();
    });

    it('when c# is the selected note, c# is selected', () => {
        render(<NoteSelectorBar note={1} setNote={() => {}} octave={5} setOctave={() => {}}/>);
        expect(screen.getByRole('1-selected')).toBeTruthy();
    });
});