module.exports = {
    // function that will reformat dates 
    format_date: date => {
        return `${new Date(date).getMonth() + 1}/${new Date(date).getDate()}/${new Date(date).getFullYear()}`;
    },
    // function will pluralize any word if it has a count of > 1
    format_plural: (word, amount) => {
        if (amount > 1) {
            return `${word}s`;
        }

        return word;
    }
}