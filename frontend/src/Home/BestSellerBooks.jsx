import { useEffect, useState } from "react";
import axios from 'axios';
import BookCard from "../components/BookCard";

const BestSellerBooks = () => {
  const [books, setBooks] = useState([]);


  useEffect(() => {
    const fetchBooks = async () => {
        try {
            const response = await axios.get('http://localhost:3000/api/v1/book/all-books');
            if (response.data && response.data.result && Array.isArray(response.data.result)) {
                // Extract the array of books from the response data
                const bookArray = response.data.result;
                setBooks(bookArray.slice(0,5));
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
            
            <div>
                <BookCard books={books} headline={"Best Seller Books Of 2023"} />
            </div>
        </div>
        
    );
};

export default BestSellerBooks;
