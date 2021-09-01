// const loadBooks = () => {
//     fetch('http://openlibrary.org/search.json?q=docs')
//         .then(res => res.json())
//         .then(data => displayResult(data.docs))
// }
// loadBooks()
// const displayResult = docs => {
//     console.log(docs);
//     // docs.forEach(doc => {
//     //     console.log(doc);
//     // })
// }




const loadSearchResult = () => {

    const searchInput = document.getElementById('input-feild')
    const searchText = searchInput.value;
    // console.log(searchText);
    searchInput.value = '';
    const url = `http://openlibrary.org/search.json?q=docs${searchText}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayResult(data.docs))
}
loadSearchResult()
const displayResult = docs => {
    // console.log(docs);
    docs.forEach(doc => {
        console.log(doc);
    })
}