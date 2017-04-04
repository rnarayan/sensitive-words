//https://egghead.io/lessons/javascript-set-up-compilation-of-source-code-using-babel-with-npm-scripts

export const sensitiveWords = (content,words) => (
    content.replace(
        new RegExp(words.join('|'),'ig'),
        '*****'
    )
)