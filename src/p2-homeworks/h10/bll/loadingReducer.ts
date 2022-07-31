const initState = {
    isLoading: false
}
export type LoadingActionType = {
    type: 'TOGGLE_IS_LOADING'
    isLoading: boolean
}

export const loadingReducer = (state = initState, action: LoadingActionType): typeof initState => {
    switch (action.type) {
        case 'TOGGLE_IS_LOADING':
            return {
                ...state, isLoading: action.isLoading
            }
        default: return state
    }
}

export const loadingAC = (isLoading: boolean): LoadingActionType => ({type: 'TOGGLE_IS_LOADING', isLoading} as const)