import { useEffect, useState } from 'react'
import BookCard from '../components/BookCard';
import axios from "axios";


const OtherBook = () => {

    const [books, setBooks] = useState([]);


    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const response = await axios.get('http://localhost:3000/api/v1/book/all-books');
                if (response.data && response.data.result && Array.isArray(response.data.result)) {
                    // Extract the array of books from the response data
                    const bookArray = response.data.result;
                    setBooks(bookArray.slice(4,12));
                } else {
                    console.error('Invalid response format:', response.data);
                }
            } catch (error) {
                console.error('Error fetching books:', error);
            }
        };

        fetchBooks();
    }, []);

  return (
    <div>
        <BookCard books={books} headline={"Other Books"} />
    </div>
  )
}

export default OtherBook