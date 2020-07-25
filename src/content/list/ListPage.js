import React, { useState, useEffect, useCallback } from 'react'
import { connect } from 'react-redux'
import { fetchDragons } from '../../redux/actions/dragonsActions'
import { closeDialog, updateDragon } from '../../redux/actions/dragonActions'
import { ListItem } from '../../commons/List/ListItem'
import { Header } from '../../commons/Header/Header'

const List = ({ dispatch, loading, dragons, hasErrors, dialogOpen, dragonEdit }) => {
  useEffect(() => {
    dispatch(fetchDragons())
    if (dialogOpen) {
      setFormWithData(dragonEdit)
    }
  }, [dispatch, dialogOpen])

  const [form, setForm] = useState({});

  const setFormWithData = (dragonEdit) => {
    setForm({
      ...form,
      id: dragonEdit.id,
      name: dragonEdit.name,
      type: dragonEdit.type,
    });
  }

  const updateForm = useCallback((fieldName, event, parameterKey) => {
    setForm({
      ...form,
      [fieldName]: event.currentTarget[parameterKey]
    });
  }, [form]);

  const loadDragons = () => {
    if (loading) return <p>Loading dragons...</p>
    if (hasErrors) return <p>Unable to display dragons</p>

    return dragons.map(dragon => <ListItem key={dragon.id} dragon={dragon} dispatch={dispatch} excerpt />)
  }

  const onCloseDialog = () => {
    dispatch(closeDialog());
  }

  const onUpdateItem = () => {
    dispatch(updateDragon(form)).then(() => {
      dispatch(closeDialog());
    })
  }

  const showEditDialog = () => {
    return (
      <dialog id="test" open={dialogOpen} className="dialog">
        <form method="dialog">
          <input type="text" name="name" placeholder="Name" value={form.name} onChange={event => updateForm('name', event, 'value')} />
          <input type="text" name="type" placeholder="Type" value={form.type} onChange={event => updateForm('type', event, 'value')} />
          <button type="button" className="formSubmit" onClick={onCloseDialog}>Close</button>
          <button type="button" className="formSubmit" onClick={onUpdateItem}>Update</button>
        </form>
      </dialog>
    )
  }

  return (
    <section>
      <Header text='Dragons' showButton={true} />
      {showEditDialog()}
      {loadDragons()}
    </section>
  )
}

const mapStateToProps = state => ({
  loading: state.dragons.loading,
  dragons: state.dragons.items,
  hasErrors: state.dragons.hasErrors,
  dialogOpen: state.dragon.dialogOpen,
  dragonEdit: state.dragon.item,
})

export default connect(mapStateToProps)(List)
