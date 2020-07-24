import React, { useState, useCallback } from 'react'
import { connect } from 'react-redux'

import { createDragon } from '../../redux/actions/dragonActions'

const AddItem = ({
  dispatch,
}) => {
  const [form, setForm] = useState({});

  const updateForm = useCallback((fieldName, event, parameterKey) => {
    setForm({
      ...form,
      [fieldName]: event.currentTarget[parameterKey]
    });
  }, [form]);


  const handleCreateDragon = () => {
    const formattedForm = {
      ...form,
      createdAt: new Date().toString(),
      histories: []
    }
    debugger;
    dispatch(createDragon(formattedForm))
  }

  const loadForm = () => {
    return (
      <>
        <form>
          <input type="text" name="name" placeholder="Name" value={form.name} onChange={event => updateForm('name', event, 'value')} />
          <input type="text" name="type" placeholder="Type" value={form.type} onChange={event => updateForm('type', event, 'value')} />
          <button type="button" className="formSubmit" onClick={handleCreateDragon}>Create</button>
        </form>
      </>
    );
  }

  return (
    <section>
      <h2>Add Dragon</h2>
      {loadForm()}
    </section>
  )
}

const mapStateToProps = state => ({
  dragon: state.dragon.item,

})

export default connect(mapStateToProps)(AddItem)
