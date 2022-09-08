// "key: value pair"

interface Book {
    title: string;
    ISBN: string;
    author: string;
    // publisher: string;
    // publicationYear: number;
    price: number;
    // isExpensive: boolean;
    // summary: string;
    // pageCount: number;
}


const book1: Book = {
    title: "Bess' journey",
    ISBN: "b4a593a4-e2e4-50a7",
    price: 12.99,
    author: "bob"
}

const book2: Book = {
    title: "Bess' journey 2",
    ISBN: "b4a593a4-e2e4-2",
    price: 5.99,
    author: "bob"
}

const book3: Book = {
    title: "how to code",
    ISBN: "123828732",
    price: 2.99,
    author: "chris"
}
const myBooks: Book[] = [book1, book2, book3]

let myString: string = "9187312982137"
let myNumber: number = 9187312982137
let myBoolean: boolean = true
let myUndefined: undefined = undefined
let myNull: null = null

// METHOD
// FUNCTION (thats inside something)
myBooks.forEach(function (book) {
    console.log(book.title)
})

// the book title
// AUTHOR NAME
// ISBN in gray

