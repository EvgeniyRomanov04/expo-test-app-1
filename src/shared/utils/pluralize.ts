type PluralVariants = {
  one: string; // 1, 21, 31...
  few: string; // 2, 3, 4, 22, 23, 24...
  many: string; // 5, 6, 7, 8, 9, 10, 11-20...
};

/**
 * Функция для склонения слов в зависимости от числа
 * @param number - число
 * @param variants - варианты склонения { one, few, many }
 * @param includeNumber - включать ли число в результат
 * @returns отформатированная строка
 *
 * @example
 * pluralize(5, { one: 'день', few: 'дня', many: 'дней' })
 * // => "5 дней"
 *
 * @example
 * pluralize(3, { one: 'товар', few: 'товара', many: 'товаров' }, false)
 * // => "товара"
 */
export function pluralize(
  number: number,
  variants: PluralVariants,
  includeNumber: boolean = true
): string {
  const absNumber = Math.abs(number);
  const lastDigit = absNumber % 10;
  const lastTwoDigits = absNumber % 100;

  let pluralForm = "";

  // Правила для русского языка
  if (lastTwoDigits >= 11 && lastTwoDigits <= 19) {
    pluralForm = variants.many;
  } else if (lastDigit === 1) {
    pluralForm = variants.one;
  } else if (lastDigit >= 2 && lastDigit <= 4) {
    pluralForm = variants.few;
  } else {
    pluralForm = variants.many;
  }

  return includeNumber ? `${number} ${pluralForm}` : pluralForm;
}

/**
 * Альтернативная версия с массивом (как в React Intl)
 */
export function pluralizeWithArray(
  number: number,
  variants: [string, string, string], // [one, few, many]
  includeNumber: boolean = true
): string {
  const absNumber = Math.abs(number);
  const lastDigit = absNumber % 10;
  const lastTwoDigits = absNumber % 100;

  let pluralForm = "";

  if (lastTwoDigits >= 11 && lastTwoDigits <= 19) {
    pluralForm = variants[2];
  } else if (lastDigit === 1) {
    pluralForm = variants[0];
  } else if (lastDigit >= 2 && lastDigit <= 4) {
    pluralForm = variants[1];
  } else {
    pluralForm = variants[2];
  }

  return includeNumber ? `${number} ${pluralForm}` : pluralForm;
}
