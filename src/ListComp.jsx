import React from 'react'

export default function ListComp({ listData }) {



  return (
    <div>
      <h1>Question 4</h1>
      <table>
        <thead>
          <tr>
            <th>Artist ID</th>
            <th>Artist Name</th>
            <th>Genres</th>
            <th>Number of Tracks</th>
            <th>Title</th>
          </tr>
        </thead>
        <tbody>
            {listData && listData.map((list, index) => (
              <tr key={index}>
                <td>{list.id}</td>
                <td>{list.name}</td>
                <td>{list.genres}</td>
                <td>{list.number}</td>
                <td>{list.title}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  )
}
