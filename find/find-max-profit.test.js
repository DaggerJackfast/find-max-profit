import {describe, expect, test} from "@jest/globals";
import findMaxProfit from "./find-max-profit.js";


describe('Find missing number in sequence of numbers', () => {
  test("Check find profit", () => {
      const sequence = [13, 6, 3, 4, 10, 2, 3];
      const numbers = findMaxProfit(sequence);
      expect(numbers).toEqual([2, 4]);
  });
  test("Check find profit", () => {
    const sequence = [4, 2, 3, 2, 4, 6, 3, 4];
    const numbers = findMaxProfit(sequence);
    expect(numbers).toEqual([3, 5]);
  });
  test("Check find profit when the array does not profit diff", () => {
    const sequence = [13, 6, 3, 4, 10, 2, 3];
    const numbers = findMaxProfit(sequence);
    expect(numbers).toEqual([2, 4]);
  });
  test("Check find profit when price always is growing", () => {
    const sequence = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const numbers = findMaxProfit(sequence);
    expect(numbers).toEqual([0, 9]);
  });
  test("Check find profit when price always is falling", () => {
    const sequence = [10, 9, 8 ,7 ,6 , 5, 4, 3, 2, 1];
    const numbers = findMaxProfit(sequence);
    expect(numbers).toEqual([]);
  });
  test("Check find profit when the array is empty", () => {
    const sequence = [];
    const numbers = findMaxProfit(sequence);
    expect(numbers).toEqual([]);
  });
});
