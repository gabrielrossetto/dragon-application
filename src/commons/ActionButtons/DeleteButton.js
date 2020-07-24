import React from 'react';
import { useHistory } from "react-router-dom";
import { removeDragon } from '../../redux/actions/dragonActions'

const DeleteButton = ({ dragon, dispatch }) => {
      let history = useHistory();
      const handleDeleteDragon = () => {
            dispatch(removeDragon(dragon.id)).then(() => {
                  //update list
                  history.push('/');
            });
      }

      return (
            <button className="btn" onClick={handleDeleteDragon}><i className="fa fa-remove"></i></button>
      )
}

export default DeleteButton