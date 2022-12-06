import { describe, expect, test, it } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';

import { noteColor } from './noteColor';

describe ('noteColor tests', () => {
    it ('a C of octave 0 is black', () => {
        const r = 0;
        const g = 0;
        const b = 0;
        expect(noteColor(1, [[], [[1, [0], 1]]]) === "rgba(" + [r, g, b, '100'].join(",") + ")").toBeTruthy();
    });

    it ('a G of octave 9 (the highest note) is near white', () => {
        const color = noteColor(1, [[], [[1, [127], 1]]]);
        const r = color.substring(5, 8);
        const g = color.substring(9, 12);
        const b = color.substring(13, 16);
        // within 10 of 255 seems sufficient to be considered near white
        expect((r > 245) && (g > 245) && (b > 245)).toBeTruthy();
    });

    it ('a C of octave 5 (our starting note) is blue', () => {
        const color = noteColor(1, [[], [[1, [60], 1]]]);
        const r = color.substring(5, 6);
        const g = color.substring(7, 8);
        const b = color.substring(9, 12);
        expect((r === "0") && (g === "0") && (b !== "0")).toBeTruthy();
    });
}); 