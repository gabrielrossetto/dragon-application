import React from 'react'
import { Link } from 'react-router-dom'

export const ListItem = ({ dragon, excerpt }) => (
  <article className={excerpt ? 'post-excerpt' : 'post'}>

    {excerpt && (
      <Link to={`/dragons/${dragon.id}`}>
        {dragon.name}
      </Link>
    )}

  </article>
)
