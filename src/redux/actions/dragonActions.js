export const GET_DRAGON = 'GET_DRAGON'
export const GET_DRAGON_SUCCESS = 'GET_DRAGON_SUCCESS'
export const GET_DRAGON_FAILURE = 'GET_DRAGON_FAILURE'

export const getDragon = () => ({ type: GET_DRAGON })
export const getDragonSuccess = dragon => ({
  type: GET_DRAGON_SUCCESS,
  payload: dragon,
})
export const getDragonFailure = () => ({ type: GET_DRAGON_FAILURE })

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
