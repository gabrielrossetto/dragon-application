export const GET_DRAGON = 'GET_DRAGON'
export const GET_DRAGON_SUCCESS = 'GET_DRAGON_SUCCESS'
export const GET_DRAGON_FAILURE = 'GET_DRAGON_FAILURE'
export const getDragon = () => ({ type: GET_DRAGON })
export const getDragonSuccess = dragon => ({
  type: GET_DRAGON_SUCCESS,
  payload: dragon,
})
export const getDragonFailure = () => ({ type: GET_DRAGON_FAILURE })


export const POST_DRAGON = 'POST_DRAGON'
export const POST_DRAGON_SUCCESS = 'POST_DRAGON_SUCCESS'
export const POST_DRAGON_FAILURE = 'POST_DRAGON_FAILURE'
export const postDragon = () => ({ type: POST_DRAGON })
export const postDragonSuccess = dragon => ({
  type: POST_DRAGON_SUCCESS,
  payload: dragon,
})
export const postDragonFailure = () => ({ type: POST_DRAGON_FAILURE })

export const DELETE_DRAGON = 'DELETE_DRAGON'
export const DELETE_DRAGON_SUCCESS = 'DELETE_DRAGON_SUCCESS'
export const DELETE_DRAGON_FAILURE = 'DELETE_DRAGON_FAILURE'
export const deleteDragon = () => ({ type: DELETE_DRAGON })
export const deleteDragonSuccess = dragon => ({
  type: DELETE_DRAGON_SUCCESS,
  payload: dragon,
})
export const deleteDragonFailure = () => ({ type: DELETE_DRAGON_FAILURE })

export const OPEN_EDIT_DIALOG = 'OPEN_EDIT_DIALOG'
export const CLOSE_EDIT_DIALOG = 'CLOSE_EDIT_DIALOG'
export const openEditDialog = (dragon) => ({ type: OPEN_EDIT_DIALOG, payload: dragon })
export const closeEditDialog = () => ({ type: CLOSE_EDIT_DIALOG })

export function fetchDragon(dragonId) {
  return async dispatch => {
    dispatch(getDragon())

    try {
      const response = await fetch(
        `http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon/${dragonId}`
      )
      const data = await response.json()

      dispatch(getDragonSuccess(data))
    } catch (error) {
      dispatch(getDragonFailure())
    }
  }
}

export function createDragon(dragon) {
  return async dispatch => {
    dispatch(postDragon())

    try {
      const response = await fetch(
        `http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon/`,
        {
          method: 'post',
          headers: new Headers({ 'content-type': 'application/json' }),
          body: JSON.stringify(dragon)
        }
      )
      const data = await response.json()

      dispatch(postDragonSuccess(data))
    } catch (error) {
      dispatch(postDragonFailure())
    }
  }
}

export function removeDragon(dragonId) {
  return async dispatch => {
    dispatch(deleteDragon())

    try {
      const response = await fetch(
        `http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon/${dragonId}`,
        {
          method: 'delete',
          headers: new Headers({ 'content-type': 'application/json' }),
        }
      )
      const data = await response.json()

      dispatch(deleteDragonSuccess(data))
    } catch (error) {
      dispatch(deleteDragonFailure())
    }
  }
}

export function openDialog(dragon) {
  return async dispatch => {
    dispatch(openEditDialog(dragon))
  }
}
