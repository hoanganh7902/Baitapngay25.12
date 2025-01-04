import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function MovieItem({id, title, year, rating }) {

  const navigate = useNavigate(); 

  const handleEdit = (e) => {
    e.preventDefault();
    navigate('/movie_form/'+ id)
  }

  return (
    <div>
      <h2>Movie Items</h2>
      <h3>{title}</h3>
      <p>Year: {year}</p>
      <p>Rating: {rating}</p>
      <button onClick={(e) => handleEdit(e)}>EDIT</button>
    </div>
  )
}
