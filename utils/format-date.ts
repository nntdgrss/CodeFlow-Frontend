/**
 * Форматирует объект даты в соответствии с русской локалью.
 *
 * @param date - Объект даты для форматирования
 * @returns Строковое представление даты в формате "день месяц год" на русском языке
 * @example
 * // Вернёт "1 января 2023"
 * formatDate(new Date(2023, 0, 1))
 */
export const formatDate = (date: Date) => {
	const options: Intl.DateTimeFormatOptions = {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
	}
	return date.toLocaleDateString('ru-RU', options)
}
