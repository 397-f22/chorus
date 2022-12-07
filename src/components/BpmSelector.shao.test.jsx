import { BpmSelector } from "./BpmSelector";

import { describe, expect, test, it } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';

describe('bpm selector test', () => {
    it('when bpm is set to 110, it show 110 in input', () => {
        render(<BpmSelector bpm={110} setBpm={() => {}} id={0} note={0}/>);
        expect(screen.findByText(/110/i));
    });
});