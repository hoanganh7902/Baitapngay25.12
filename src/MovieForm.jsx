import React, { useEffect, useState } from 'react'
import { Navigate, useParams } from 'react-router-dom'
import MovieList from './MovieList';

export default function MovieForm() {

    const [moviesForm, setMoviesForm] = useState([
        { id: 1, title: 'Inception', year: 2010, rating: 8.8 },
        { id: 2, title: 'The Dark Knight', year: 2008, rating: 9.0 },
        { id: 3, title: 'Interstellar', year: 2014, rating: 8.6 },
        { id: 4, title: 'The Matrix', year: 1999, rating: 8.7 },
        { id: 5, title: 'Forrest Gump', year: 1994, rating: 8.8 },
    ])

    const [movie, setMovie] = useState({ id: 0, title: '', year: 0, rating: 0 })

    const { id } = useParams();

    useEffect(() => {
        moviesForm.forEach((movie, index) => {
            if (movie.id === parseInt(id)) {
                setMovie(movie)
            }
        })
    }, [])

    const handleSetMovie = (e) => {
        setMovie({
            ...movie,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmitForm = (e) => {
        e.preventDefault();

        let id = movie.id;
        if(id === 0) {
            id = moviesForm.length + 1;
            const movieAdd = {
                id: id,
                title: movie.title,
                year: movie.year,
                rating: movie.rating
            }
            setMoviesForm([...moviesForm, movieAdd])
        } else {
            const index = moviesForm.findIndex((movie) => movie.id === id);
            moviesForm[index] = movie;
            setMoviesForm([...moviesForm])
        }

    }

    console.log(handleSubmitForm);
    console.log(moviesForm);
    
    
    return (
        <>
            <form onSubmit={(e) => handleSubmitForm(e)}>
                <h1>Edit film information</h1>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Movie Name:</th>
                            <th>Publish year:</th>
                            <th>Rating:</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <input type="number" name="id" value={movie.id}
                                    onChange={(e) => handleSetMovie(e)} readOnly />
                            </td>
                            <td>
                                <input type="text" name="title" value={movie.title}
                                    onChange={(e) => handleSetMovie(e)} />
                            </td>
                            <td>
                                <input type="number" name="year" value={movie.year}
                                    onChange={(e) => handleSetMovie(e)} />
                            </td>
                            <td>
                                <input type="number" name="rating" value={movie.rating}
                                    onChange={(e) => handleSetMovie(e)} />
                            </td>
                        </tr>
                    </tbody>
                </table>
                {/* <button type='submit'>Save</button> */}
                {movie.id === 0 ? <button type='submit'>Add new</button> : <button type='submit'>Update</button>}
                
            </form>
            <ul>
                {
                    moviesForm.map((movie, index) => {
                        return (
                            <li key={movie.id}>
                                <h2>{movie.title}</h2>
                                <h4>{movie.year}</h4>
                                <h4>{movie.rating}</h4>
                            </li>
                        )
                    })
                }
            </ul>
           
        </>
    )
}
