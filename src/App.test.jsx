import {describe, expect, test, it} from 'vitest';
import {fireEvent, render, screen} from '@testing-library/react';
import { printBeats } from './utilities/printBeats';
import App from './App';

describe('function tests', () => {
  it('printBeats works', async () => {
    const beats = [[[],[]],[[1],[]],[[],[[1,[1],1]]],[[1],[[1,[1],1]]],[[1,2],[[1,[1],1],[2,[2],2]]]];
    console.log(printBeats(beats))
    expect(printBeats(beats)==="[[[],[]],[[1],[]],[[],[[1,[1],1]]],[[1],[[1,[1],1]]],[[1,2],[[1,[1],1],[2,[2],2]]]]").toBeTruthy();
  });

  it('load example loads correct loop') 
});