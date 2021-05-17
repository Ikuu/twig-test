export default function groupArrayElements(
  arr: number[],
  count = 1,
): number[][] {
  const invalidRange = count <= 0 || count > arr.length;

  if (invalidRange)
    throw new RangeError(
      "Count must be greater than 0 and no greater than the length of the array."
    );
  if (count === 1) return [arr];

  const iterations = Math.ceil(arr.length / count);
  const result = [];

  for (let i = 0; i < arr.length; i += iterations) {
    result.push(arr.slice(i, i + iterations));
  }

  return result;
}
