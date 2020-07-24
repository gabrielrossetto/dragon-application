import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchDragons } from '../../redux/actions/dragonsActions'
import { ListItem } from '../../commons/List/ListItem'
import { Header } from '../../commons/Header/Header'

const List = ({ dispatch, loading, dragons, hasErrors }) => {
  useEffect(() => {
    dispatch(fetchDragons())
  }, [dispatch])

  const loadDragons = () => {
    if (loading) return <p>Loading dragons...</p>
    if (hasErrors) return <p>Unable to display dragons</p>

    return dragons.map(dragon => <ListItem key={dragon.id} dragon={dragon} excerpt />)
  }

  return (
    <section>
      <Header text='Dragons' showButton={true} />
      {loadDragons()}
    </section>
  )
}

const mapStateToProps = state => ({
  loading: state.dragons.loading,
  dragons: state.dragons.items,
  hasErrors: state.dragons.hasErrors,
})

export default connect(mapStateToProps)(List)
