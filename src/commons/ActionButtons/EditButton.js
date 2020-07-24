import React from 'react'
import { openDialog } from '../../redux/actions/dragonActions'

const EditButton = ({ dragon, dispatch }) => {

      const handleEditDragon = () => {
            dispatch(openDialog(dragon))
      }

      return (
            <>
                  <button className="btn" onClick={handleEditDragon}><i className="fa fa-edit"></i></button>
            </>
      )
}

export default EditButton