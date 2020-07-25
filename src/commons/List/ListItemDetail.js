import React from 'react'

export const ListItemDetail = ({ dragon }) => (
  <aside className="itemDetail">
    <h1 className="itemDetailName">{dragon.name}</h1>
    <h2>Type: {dragon.type}</h2>
    <h2>Created At: {dragon.createdAt}</h2>
  </aside>
)
