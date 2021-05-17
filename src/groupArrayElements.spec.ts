import groupArrayElements from "./groupArrayElements";

const testArray = [1, 2, 3, 4, 5];

describe("groupArrayElements", () => {
  test("should throw error for 0", () => {
    expect(() => groupArrayElements(testArray, 0)).toThrow(RangeError);
  });

  test("should handle count of 1", () => {
    expect(groupArrayElements(testArray, 1).length).toBe(1);
  });

  test("should handle count of 2", () => {
    expect(groupArrayElements(testArray, 2)).toEqual([
      [1, 2, 3],
      [4, 5],
    ]);
  });

  test("should handle count of 3", () => {
    expect(groupArrayElements(testArray, 3)).toEqual([
      [1, 2],
      [3, 4],
      [5],
    ]);
  });

  test("should handle count of array.length", () => {
    expect(groupArrayElements(testArray, testArray.length).length).toEqual(testArray.length);
  });

  test("should throw error for count of array.length + 1", () => {
    expect(() => groupArrayElements(testArray, testArray.length + 1)).toThrow(
      RangeError
    );
  });
});
