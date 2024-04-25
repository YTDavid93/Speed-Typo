
export const formatPercentage = (percentage: number) => {
    return percentage.toFixed(0) + "%"
};

export const countErrors = (actual: string, expected: string) => {
  const expectedCharacters = expected.split("");

  return expectedCharacters.reduce((errors, expectedchars, i) => {
    const acutalChars = actual[i];
    if (acutalChars !== expectedchars) {
        errors++;
    }
    return errors;
  }, 0);
};


export const calculateAccuracyPercentage = (errors: number, total: number) => {
    if (total > 0) {
        const correct = total - errors;
        return (correct / total) * 100;
    }

    return 0;
}
