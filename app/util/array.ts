/**
 * Returns the unique value from the array passed as parameter.
 */
export const unique = <T>(arr: T[]) => [...new Set(arr)];

export const findById = <T extends { id: number | string }>(
  withIds: T[] | undefined,
  id: number | string
) => withIds?.find((x) => x.id === id);

export const findByName = <T extends { name: string }>(
  withNames: T[] | undefined,
  name: string
) => withNames?.find((x) => x.name === name);

export const asArray = <T extends {}>(value: T | T[]): T[] =>
  Array.isArray(value) ? value : [value];

export const isIn = <T>(values: readonly T[], x: T): x is T =>
  values.includes(x);
