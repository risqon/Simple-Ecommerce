import numToRupiah from '../helpers/rupiah'

const detailAdds = (state = {}, action) => {
    switch (action.type) {
        case 'LOAD_DETAIL_ADDS_SUCCESS':
            const data = action.data
            return {
                ...data,
                price:numToRupiah(data.price)
            }
        case 'RESET_DETAIL_ADDS':
            return {}
        default:
            return state
    }
}

export default detailAdds