import { BpmSelector } from "./BpmSelector";

import { describe, expect, test, it } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';

describe('bpm selector tests', () => {
   
    it('when bpm is set below min, it is 1', () => {
        render(<BpmSelector bpm={-10} setBpm={() => {}} id={0} note={0}/>);
        expect(screen.findByText(/1/i));
    });

    it('when bpm is above below max, it is 999', () => {
        render(<BpmSelector bpm={1000000} setBpm={() => {}} id={0} note={0}/>);
        expect(screen.findByText(/999/i));
    });
    // it('min bpm is 1', () => {
    //     render(<BpmSelector/>);
    //     expect(screen.getByText(/min=\"1\"/)).toBeDefined();
    // })
});

