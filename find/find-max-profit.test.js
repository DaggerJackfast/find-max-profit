import {describe, expect, test} from "@jest/globals";
import findMaxProfit from "./find-max-profit.js";


describe('Find max profit sell and buy days', () => {
  test("Check find profit", () => {
      const prices = [13, 6, 3, 4, 10, 2, 3];
      const days = findMaxProfit(prices);
      expect(days).toEqual([2, 4]);
  });
  test("Check find profit", () => {
    const prices = [4, 2, 3, 2, 4, 6, 3, 4];
    const days = findMaxProfit(prices);
    expect(days).toEqual([3, 5]);
  });
  test("Check find profit when the prices does not give profit", () => {
    const prices = [13, 6, 3, 4, 10, 2, 3];
    const days = findMaxProfit(prices);
    expect(days).toEqual([2, 4]);
  });
  test("Check find profit when price always is growing", () => {
    const prices = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const days = findMaxProfit(prices);
    expect(days).toEqual([0, 9]);
  });
  test("Check find profit when price always is falling", () => {
    const prices = [10, 9, 8 ,7 ,6 , 5, 4, 3, 2, 1];
    const days = findMaxProfit(prices);
    expect(days).toEqual([]);
  });
  test("Check find profit when the days is empty", () => {
    const prices = [];
    const days = findMaxProfit(prices);
    expect(days).toEqual([]);
  });
});
