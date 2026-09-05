export function throwErrorIfTrue(isError: boolean, message: string) {
  if (isError === true) {
    throw new Error(message);
  }
}
