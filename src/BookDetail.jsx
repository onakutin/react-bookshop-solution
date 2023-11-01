import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

export default function BookDetail() {
    // get the value of :id parameter from the URL
    const { id } = useParams();

    const [book, setBook] = useState(null);

    const loadBook = async () => {
        const url = 'https://classes.codingbootcamp.cz/assets/classes/books-api/book.php?id=' + id;
        const response = await fetch(url);
        const data = await response.json();

        setBook(data);
    }

    // when this component renders (or should id change somehow)
    // load information about a book
    useEffect(() => {
        loadBook();
    }, [id])

    return (
        <div className="book-detail">
            <h2>Detail of a book</h2>

            {
                book
                    ? (
                        <>
                            <h2>{ book.title }</h2>
                            <p>{ book.price } EUR</p>
                        </>
                    )
                    : 'Loading...'
            }
        </div>
    )
}