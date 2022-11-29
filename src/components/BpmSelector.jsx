import { react, useState } from 'react';
import { TextField } from '@mui/material';

export const BpmSelector = ({bpm, setBpm}) => {
    const max = 999;
    const min = 1;

    const onBpmChange = (event) => {
        if (Number(event.target.value) > max) {
            setBpm(max);
        }
        else if (Number(event.target.value) < min) {
            setBpm(min);
        }
        else {
            setBpm(event.target.value);
        }
    }

    return <TextField
            id="outlined-number"
            data-cy="bpm-input"
            label="BPM"
            type="number"
            InputProps={{ inputProps: { min: min, max: max, step: "1" } }}
            variant="outlined"
            onChange={onBpmChange}
            value={bpm}
        />;
}

export default BpmSelector