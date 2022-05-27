export const useError = (error: unknown) => {
  if (error instanceof Error) {
    throw error;
  } else {
    throw new Error(`${error}`);
  }
};
