// get books api 
const loadSearchResult = () => {
    const searchInput = document.getElementById('input-feild');
    const searchText = searchInput.value;
    // clear input feild
    searchInput.value = '';
    if (searchText === '') {

    }
    // get books url 
    else {
        const url = `https://openlibrary.org/search.json?q=${searchText}`;
        fetch(url)
            .then(res => res.json())
            .then(data => displayBooksResult(data.docs))
    }
}
// display books result 
const displayBooksResult = (data) => {
    // console.log(data);
    const bookContainer = document.getElementById('books');
    // clear previous serach result 
    bookContainer.textContent = ''
    // total book calculations
    const totalBook = document.getElementById('total-book');
    const arrayBook = []
    if (!data) {

    }
    // forEach arrow function
    data?.forEach(book => {
        arrayBook.push(book)
        totalBook.innerText = arrayBook.length - 1;
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div class="card h-100">
            <img src="http://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg" class="card-img-top p-2 rounded" height="370" alt="...">
            <div class="card-body">
             <h5 class="card-title">Book-Name: ${book.title}</h5>
             <h5 class="card-title">Author-Name: ${book.author_name[0]}</h5>
             <h6 class="card-title">Publisher: ${book.publisher[0]}</h6>
             <h6 class="card-title">1st Publishe year: ${book.first_publish_year}</h6>
            </div>
        </div>
        `;
        bookContainer.appendChild(div);
    })
}