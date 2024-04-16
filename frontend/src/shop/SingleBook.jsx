import axios  from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"


const SingleBook = () => {
    const { id } = useParams();
    const [book, setBook] = useState(null);                                                        // Initialize book state as null
    
        

  useEffect(() => {
      const fetchBookData = async () => {
          try {
              const response = await axios.get(`http://localhost:3000/api/v1/book/${id}`);
              const { book }  = response.data;                                              // Extract book data from response
              // const book = response.data.book;                                           // without object destructuring
              setBook(book);                                                               // Set book state with extracted data
          } catch (error) {
              console.error('Error fetching book data:', error);
          }
      };

      fetchBookData();                                                                  // Call the function to fetch book data on component mount
  }, [id]);                                                                            // Include id in the dependency array to re-fetch data when id changes


  return (
      <div>
          {book && (
              <div>
                  
              </div>
          )}
      </div>
  );
};

export default SingleBook;
