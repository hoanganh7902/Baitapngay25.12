import React from 'react'
import { Link } from 'react-router'

export default function Header() {
  return (
    <div style={{height: "46px", backgroundColor: "black"}}>
       <nav >
        <Link style={{textDecoration: "none", margin: "10px", color: "#fff", lineHeight: "46px"}} to="/">Home</Link>
        <Link style={{textDecoration: "none", margin: "10px", color: "#fff", lineHeight: "46px"}} to="/count">Counter</Link>
        <Link style={{textDecoration: "none" , margin: "10px", color: "#fff", lineHeight: "46px"}}  to="/dataFetcher">Data Fetcher</Link>
        <Link style={{textDecoration: "none" , margin: "10px", color: "#fff", lineHeight: "46px"}}  to="/about">About</Link>
        <Link style={{textDecoration: "none" , margin: "10px", color: "#fff", lineHeight: "46px"}}  to="/movie_list">Movie List</Link>
        <Link style={{textDecoration: "none" , margin: "10px", color: "#fff", lineHeight: "46px"}}  to="/movie_item">Movie Item</Link>
      </nav>
    </div>
  )
}
