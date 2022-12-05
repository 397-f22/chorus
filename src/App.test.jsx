import { describe, expect, test, it } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import { printBeats } from './utilities/printBeats';
import App from './App';
import { convertLoop } from './utilities/loops';
import Homepage from './components/Homepage';

describe('function tests', () => {
  it('printBeats works', async () => {
    const beats = [[[], []], [[1], []], [[], [[1, [1], 1]]], [[1], [[1, [1], 1]]], [[1, 2], [[1, [1], 1], [2, [2], 2]]]];
    // console.log(printBeats(beats))
    expect(printBeats(beats) === "[[[],[]],[[1],[]],[[],[[1,[1],1]]],[[1],[[1,[1],1]]],[[1,2],[[1,[1],1],[2,[2],2]]]]").toBeTruthy();
  });

  describe("loop test", () => {
    it('loops', async () => {
      const beats = [[[], []], [[1], []], [[], [[1, [1], 1]]], [[1], [[1, [1], 1]]], [[1, 2], [[1, [1], 1], [2, [2], 2]]]];
      // console.log(convertLoop(beats))
      // console.log(([["",""],[[1],""],["",[[1,[1],1]]],[[1],[[1,[1],1]]],[[1,2],[[1,[1],1],[2,[2],2]]]]));
      expect(JSON.stringify(convertLoop(beats)) === JSON.stringify([["", ""], [[1], ""], ["", [[1, [1], 1]]], [[1], [[1, [1], 1]]], [[1, 2], [[1, [1], 1], [2, [2], 2]]]])).toBeTruthy();
    })
    it('reverts', async () => {
      const news = [["", ""], [[1], ""], ["", [[1, [1], 1]]], [[1], [[1, [1], 1]]], [[1, 2], [[1, [1], 1], [2, [2], 2]]]];
      //TODO:finish test case revert loop
    })

  })



});