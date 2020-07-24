export const GET_DRAGONS = 'GET GET_DRAGONS'
export const GET_DRAGONS_SUCCESS = 'GET_DRAGONS_SUCCESS'
export const GET_DRAGONS_FAILURE = 'GET_DRAGONS_FAILURE'

export const getDragons = () => ({ type: GET_DRAGONS })
export const getDragonsSuccess = dragons => ({
  type: GET_DRAGONS_SUCCESS,
  payload: dragons,
})
export const getDragonsFailure = () => ({ type: GET_DRAGONS_FAILURE })

export function fetchDragons() {
  return async dispatch => {
    dispatch(getDragons())

    try {
      const response = await fetch('http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon')
      const data = await response.json()

      dispatch(getDragonsSuccess(data))
    } catch (error) {
      dispatch(getDragonsFailure())
    }
  }
}
