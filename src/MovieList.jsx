import React, { useEffect, useState } from 'react'
import MovieItem from './MovieItem';
import { Link } from 'react-router-dom';

export default function MovieList() {
    const [movies, setMovies] = useState([
        { id: 1, title: 'Inception', year: 2010, rating: 8.8 },
        { id: 2, title: 'The Dark Knight', year: 2008, rating: 9.0 },
        { id: 3, title: 'Interstellar', year: 2014, rating: 8.6 },
        { id: 4, title: 'The Matrix', year: 1999, rating: 8.7 },
        { id: 5, title: 'Forrest Gump', year: 1994, rating: 8.8 },
      ]);


      useEffect(() => {
        
      }, [movies])
  return (
    <div>
      <h1>Movie List</h1>
      <Link to="/movie_add">Add New</Link>
      {/* <table style={{margin: "auto"}}>
        <thead>
            <tr>
                <th style={{border: "1px solid #ccc"}}>STT</th>
                <th style={{border: "1px solid #ccc"}}>Name</th>
                <th style={{border: "1px solid #ccc"}}>Publish Year</th>
                <th style={{border: "1px solid #ccc"}}>Rating</th>
            </tr>
        </thead>
        <tbody>
            {movies.map(movie => (
                <tr key={movie.id}>
                    <td style={{border: "1px solid #ccc"}}>{movie.id}</td>
                    <td style={{border: "1px solid #ccc"}}>{movie.title}</td>
                    <td style={{border: "1px solid #ccc"}}>{movie.year}</td>
                    <td style={{border: "1px solid #ccc"}}>{movie.rating}</td>
                </tr>
            ))}
        </tbody>
      </table> */}
      {movies.map(movie => (
        <MovieItem key={movie.id} id={movie.id} title={movie.title} year={movie.year} rating={movie.rating}/>
      ))}
      
    </div>
  )
}
