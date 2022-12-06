import { BpmSelector } from "./BpmSelector";

import { describe, expect, test, it } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';

describe('bpm selector test', () => {
    it('when bpm is set to 120, it show 120 in input', () => {
        render(<BpmSelector bpm={110} setBpm={() => {}} id={0} note={0}/>);
        expect(screen.findByText(/110/i));
    });

    // it('when c# is the selected note, c# is selected', () => {
    //     render(<NoteSelectorBar note={1} setNote={() => {}} octave={5} setOctave={() => {}}/>);
    //     expect(screen.getByRole('1-selected')).toBeTruthy();
    // });
});