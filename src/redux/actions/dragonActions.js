export const GET_DRAGON = 'GET_DRAGON'
export const GET_DRAGON_SUCCESS = 'GET_DRAGON_SUCCESS'
export const GET_DRAGON_FAILURE = 'GET_DRAGON_FAILURE'

export const POST_DRAGON = 'POST_DRAGON'
export const POST_DRAGON_SUCCESS = 'POST_DRAGON_SUCCESS'
export const POST_DRAGON_FAILURE = 'POST_DRAGON_FAILURE'

export const OPEN_DIALOG = 'OPEN_DIALOG'
export const CLOSE_DIALOG = 'CLOSE_DIALOG'

export const getDragon = () => ({ type: GET_DRAGON })
export const getDragonSuccess = dragon => ({
  type: GET_DRAGON_SUCCESS,
  payload: dragon,
})
export const getDragonFailure = () => ({ type: GET_DRAGON_FAILURE })

export const postDragon = () => ({ type: POST_DRAGON })
export const postDragonSuccess = dragon => ({
  type: POST_DRAGON_SUCCESS,
  payload: dragon,
})
export const postDragonFailure = () => ({ type: POST_DRAGON_FAILURE })

const mock = {
  name: 'test90',
  type: 'type90',
  createdAt: new Date().toString(),
  histories: []
};


export function fetchDragon(dragonId) {
  return async dispatch => {
    debugger;
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

export function createDragon() {
  return async dispatch => {
    debugger;
    dispatch(postDragon())

    try {
      const response = await fetch(
        `http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon/`,
        {
          method: 'post',
          headers: new Headers({ 'content-type': 'application/json' }),
          body: JSON.stringify(mock)
        }
      )
      const data = await response.json()

      dispatch(postDragonSuccess(data))
    } catch (error) {
      dispatch(postDragonFailure())
    }
  }
}
