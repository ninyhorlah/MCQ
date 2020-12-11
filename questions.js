
export function fetchQuestion () {
    let url = `https://opentdb.com/api.php?amount=10&category=27&difficulty=easy&type=multiple`
    fetch(url)
    .then(data => {
        return data.json()
    })
    .then(result => {
        console.log(result.results);
       let data = result.results
    })
}