import React from 'react'
import EditButton from './EditButton';
import DeleteButton from './DeleteButton';

export const ActionButtons = ({ dragon, dispatch }) => (
      <div style={{ float: 'right' }}>
            <EditButton dragon={dragon} dispatch={dispatch} />
            <DeleteButton dragon={dragon} dispatch={dispatch} />
      </div>
)