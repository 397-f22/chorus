export const emptyBeatArray = (measures, notesPerMeasure) => (new Array(measures * notesPerMeasure).fill(undefined).map(x => [[],[]]));

export const convertLoop = (loop) => (loop.map(beat => beat.map(
    x => 
    {
        return x.length == 0 ? "" : x}
)));

export const revertLoop = (loop) => (loop.map(beat => beat.map(
    x => 
    {
        return x === "" ? [] : x}
)));

export const neverGonnaGiveYouUp = [
    [[35, 27], [[4, [45], 1 / 16]]], [[], [[4, [47], 1 / 16]]], [[35], [[4, [50], 1 / 16]]], [[], [[4, [47], 1 / 16]]],
    [[35], [[4, [54], 1 / 16]]], [[], []], [[3, 35], [[4, [54], 1 / 16]]], [[], []],
    [[35], []], [[3], [[4, [52], 1 / 16]]], [[35], []], [[], []],
    [[35], []], [[], []], [[35, 27], [[4, [45], 1 / 16]]], [[], [[4, [47], 1 / 16]]],
    [[35], [[4, [50], 1 / 16]]], [[], [[4, [47], 1 / 16]]], [[35], [[4, [52], 1 / 16]]], [[], []],
    [[3, 35], [[4, [52], 1 / 16]]], [[], []], [[35], []], [[3], [[4, [50], 1 / 16]]],
    [[3, 35], [[4, [49], 1 / 16]]], [[3], [[4, [47], 1 / 16]]], [[35], []], [[], []],
    [[35, 27], [[4, [45], 1 / 16]]], [[], [[4, [47], 1 / 16]]], [[35], [[4, [50], 1 / 16]]], [[], [[4, [47], 1 / 16]]],
    [[35], [[4, [50], 1 / 16]]], [[], []], [[35], []], [[], []],
    [[3, 35], [[4, [52], 1 / 16]]], [[], []], [[3, 35], [[4, [49], 1 / 16]]], [[], []],
    [[35], []], [[], []], [[3, 35], [[4, [45], 1 / 16]]], [[], []],
    [[35], []], [[], []], [[3, 35], [[4, [45], 1 / 16]]], [[], []],
    [[3, 35], [[4, [52], 1 / 16]]], [[], []], [[35], []], [[], []],
    [[3, 35], [[4, [50], 1 / 16]]], [[], []], [[], []], [[], []],
    [[22, 11], []], [[22], []], [[22], []], [[], []],
    [[22, 11], []], [[22], []], [[22], []], [[], []]
];