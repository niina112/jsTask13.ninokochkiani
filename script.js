class LibraryItem {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }
    getDetails() {
        console.log(`Title of the book is ${this.title}, author is ${this.author} and the year of publish is ${this.year}`);
    }
}

const bookExample = new LibraryItem("1984", "George Orwell", 1949)
bookExample.getDetails()

class Book extends LibraryItem {
    constructor(title, author, year, genre) {
        super(title, author, year);
        this.genre = genre;
    }
    getDetails() {
        super.getDetails()
        console.log(`The genre is ${this.genre}`)
    }
}

const bookExample2 = new Book("Kafka on the Shore", "Haruki Murakami", 2002, "Fantasy Fiction")
bookExample2.getDetails()

class Magazine extends LibraryItem {
    constructor(title, author, year, issueNumber) {
        super(title, author, year);
        this.issueNumber = issueNumber;
    }

    getDetails() {
        super.getDetails()
        console.log(`Issue number - ${this.issueNumber}`)
    }
}

const issueNum = new Magazine("Kafka on the Shore", "Haruki Murakami", 2002, 21)
issueNum.getDetails()