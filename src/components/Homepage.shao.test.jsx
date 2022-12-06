import {describe, expect, it} from 'vitest';
import Homepage from "./Homepage";
import userEvent from '@testing-library/user-event'
import {render, screen} from '@testing-library/react';

describe('homepage test', () => {
    it('typing code', async () => {
        render(<Homepage />);

        await userEvent.type(document.getElementById('code'), '6699')


        expect(document.getElementById('code').value).toBe('6699');
    });
});