import Books from "./books.mjs";
const printHighRatedBooks = () => {
    const highRatedBooks = Books.filter(book => book.rating > 4.5);
    highRatedBooks.forEach(book => console.log(book.title));
};
const printBookDetails = () => {
    Books.forEach(({ title, author, rating, genre }) => {
        console.log(`Title: ${title}, Author: ${author}, Rating: ${rating}, Genre: ${genre}`);
    });
};

const printFictionBooks = () => {
    const fictionBooks = Books.filter(book => book.genre === "Fiction");
    fictionBooks.forEach(book => console.log(book.title));
};
const displayBookAuthors = () => {
    const authors = Books.map(book => book.author);
    console.log(authors);
};
printHighRatedBooks();
printBookDetails();
printFictionBooks();
displayBookAuthors();