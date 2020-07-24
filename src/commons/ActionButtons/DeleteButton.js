import React from 'react';
import { removeDragon } from '../../redux/actions/dragonActions'
import { fetchDragons } from '../../redux/actions/dragonsActions'

const DeleteButton = ({ dragon, dispatch }) => {
      const handleDeleteDragon = () => {
            dispatch(removeDragon(dragon.id)).then(() => {
                  dispatch(fetchDragons())
            });
      }

      return (
            <button className="btn" onClick={handleDeleteDragon}><i className="fa fa-remove"></i></button>
      )
}

export default DeleteButton