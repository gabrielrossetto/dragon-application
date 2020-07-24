import React from 'react'
import { Link } from 'react-router-dom'
import { ActionButtons } from '../ActionButtons/ActionButtons';

export const ListItem = ({ dragon, dispatch, excerpt }) => (
  <article className={excerpt ? 'post-excerpt' : 'post'}>

    {excerpt && (
      <>
        <Link to={`/dragons/${dragon.id}`}>
          {dragon.name}
        </Link>

        <ActionButtons dragon={dragon} dispatch={dispatch} />
      </>
    )}

  </article>
)
