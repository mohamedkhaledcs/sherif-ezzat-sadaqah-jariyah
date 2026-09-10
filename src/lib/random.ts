export function getRandomItem<T>(items: readonly T[]): T {
  if (items.length === 0) {
    throw new Error("Cannot pick from an empty array");
  }
  const index = Math.floor(Math.random() * items.length);
  return items[index]!;
}

export function getRandomItemExcept<T>(
  items: readonly T[],
  current: T | null | undefined,
  isSame: (a: T, b: T) => boolean = (a, b) => a === b,
): T {
  if (items.length === 0) {
    throw new Error("Cannot pick from an empty array");
  }

  if (items.length === 1) {
    return items[0]!;
  }

  let next = getRandomItem(items);
  let attempts = 0;

  while (current != null && isSame(next, current) && attempts < 12) {
    next = getRandomItem(items);
    attempts += 1;
  }

  return next;
}
