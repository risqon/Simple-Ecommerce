const adds = (state = { totalPage: 0, data: [] }, action) => {
    switch (action.type) {
        case 'LOAD_ADDS_SUCCESS':
            return {
              ...state,
              data: action.adds.map(item => {
                  item.sent = true
                  return item
              })
            }
        case 'RESET_ADDS':
            return { totalPage: 0, data: [] }

        default:
            return state
    }
}

export default adds