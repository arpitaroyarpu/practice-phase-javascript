//find the largest string in an array and show it's index number

function longestString(names) {
    let longestWord = '';

    for(news of names) {
        if(news.length > longestWord.length) {
            longestWord = news;
        }
    }
    
    return [longestWord, names.indexOf(longestWord)];
}

console.log(longestString(['arpu', 'arpita roy', 'tonny']));