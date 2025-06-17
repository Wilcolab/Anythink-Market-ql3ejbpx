/**
 * Converts a string to dot case.
 * Dot case is a string where words are separated by dots.
 *
 * @param {string} str The string to convert.
 * @returns {string} The dot case string.
 * @example
 * toDotCase('camelCase') // returns "camel.case"
 * toDotCase('Sentence case') // returns "sentence.case"
 * toDotCase('PascalCase') // returns "pascal.case"
 * toDotCase('kebab-case') // returns "kebab.case"
 * toDotCase('snake_case') // returns "snake.case"
 * toDotCase(null) // returns ""
 */
function toDotCase(str) {
    if (!str) {
        return '';
    }

    return str.replace(/([A-Z])/g, '.$1').toLowerCase().replace(/[\s-]+/g, '.').replace(/^[.]/, '');
}