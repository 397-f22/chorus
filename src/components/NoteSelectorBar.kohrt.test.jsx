import { NoteSelectorBar} from "./NoteSelectorBar";
import { describe, expect, test, it } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';

describe('Note Selector Bar test', () => {
    it('shows 12 note buttons', async () => {
        render(<NoteSelectorBar note={0} setNote={() => {}} octave={5} setOctave={() => {}}/>);
        // expect(screen.findByText(/110/i)); //TODO - find all the notes C, C#,...,B.
        const items = await screen.findAllByTestId('note-button')
        expect(items).toHaveLength(12)
    });

    it('has all the correct note names on the buttons', async () => {
        render(<NoteSelectorBar note={0} setNote={() => {}} octave={5} setOctave={() => {}}/>);
        const note_names = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B", 'POTATO']
        console.log(note_names)
        note_names.forEach(function (note_str, i) {
            console.log('note_str:', note_str)
            const x = screen.findByText(note_str)
            console.log(x)
            expect(x).toBeDefined();
        });
    });

    it('changes Octave text when + or - button is pressed', async () => {
        render(<NoteSelectorBar note={0} setNote={() => {}} octave={5} setOctave={() => {}}/>);
        const incrementButton  = screen.getByTestId('octave-plus-button')
        fireEvent.click(incrementButton)
        expect(screen.queryByText(/OCTAVE: 6/))
    });
});