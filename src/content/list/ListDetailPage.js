import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { fetchDragon } from '../../redux/actions/dragonActions'

import { ListItemDetail } from '../../commons/List/ListItemDetail'

const ListDetail = ({
  match,
  dispatch,
  dragon,
  hasErrors,
  loading,
}) => {
  useEffect(() => {
    const { id } = match.params

    dispatch(fetchDragon(id))
  }, [dispatch, match])

  const loadDragon = () => {
    if (loading.dragon) return <p>Loading dragon...</p>
    if (hasErrors.dragon) return <p>Unable to display dragon</p>

    return <ListItemDetail key={dragon.id} dragon={dragon} />;
  }

  return (
    <section>
      <h2>Dragon Detail</h2>
      {loadDragon()}
    </section>
  )
}

const mapStateToProps = state => ({
  loading: state.dragon.loading,
  dragon: state.dragon.item,
  hasErrors: state.dragon.hasErrors,
})

export default connect(mapStateToProps)(ListDetail)