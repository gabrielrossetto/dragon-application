import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { createDragon } from '../../redux/actions/dragonActions'

const AddItem = ({
      dispatch,
      dragon,
}) => {

      const handleCreateDragon = () => {
            dispatch(createDragon())
      }

      const loadDragon = () => {
            return <button onClick={handleCreateDragon}>dsdasasdasddasadsads</button>;
      }

      return (
            <section>
                  <h2>Add Dragon</h2>
                  {loadDragon()}
            </section>
      )
}

const mapStateToProps = state => ({
      dragon: state.dragon.item,

})

export default connect(mapStateToProps)(AddItem)
