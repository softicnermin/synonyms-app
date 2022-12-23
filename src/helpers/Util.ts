const WORD_REGEX = new RegExp(/^[a-zA-Z ]+$/);
const MAX_WORD_LENGTH = 35;

export const sanitizeWord = (word: string) => word.trim().toLowerCase();

export const isWord = (word: string) => {
    return WORD_REGEX.test(word) && word.length < MAX_WORD_LENGTH;
}