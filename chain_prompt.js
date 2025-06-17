function toKebabCase(inputString) {
    // Step 1: Split the input string into words, handling different casing styles
    const words = inputString
        .replace(/([A-Z])/g, ' $1') // Handle camelCase and PascalCase
        .replace(/_/g, ' ') // Handle snake_case
        .split(/\s+/) // Split by spaces
        .filter(word => word !== ''); // Remove empty strings

    // Step 2: Convert all words to lowercase
    const lowerCaseWords = words.map(word => word.toLowerCase());

    // Step 3: Join the lowercase words with hyphens to create kebab-case
    const kebabCaseString = lowerCaseWords.join('-');

    return kebabCaseString;
}