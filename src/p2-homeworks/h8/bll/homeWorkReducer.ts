import {UserType} from '../HW8';

type AddNameUpActionType = {
    type: 'sort-name-up'
    payload: 'up'
}
type AddNameDownActionType = {
    type: 'sort-name-down'
    payload: 'sort_down'
}
type CheckAgeActionType = {
    type: 'sort-age', payload: 'check_18'
}

type ActionsTypes = AddNameUpActionType | AddNameDownActionType | CheckAgeActionType

export const homeWorkReducer = (state: Array<UserType>, action: ActionsTypes): Array<UserType> => {
    switch (action.type) {
        case 'sort-name-up':
            // -1 значит не меняем местами 1 - меняем местами по алфавиту:
            return [...state].sort((a: any, b: any) => b.name > a.name
                ? -1 : b.name < a.name ? 1 : 0)
        case 'sort-name-down': {
            return [...state].sort((a: any, b: any) => b.name > a.name
                ? 1 : b.name < a.name ? -1 : 0)
        }
        case 'sort-age': {
            return [...state].filter(u => u.age > 18)
        }
        default:
            return state
    }
}

export const addNameUpAC = (value: string): AddNameUpActionType => {
    return {type: 'sort-name-up', payload: 'up'} as const
}
export const addNameDownAC = (value: string): AddNameDownActionType => {
    return {type: 'sort-name-down', payload: 'sort_down'} as const
}
export const checkAgeAC = (value: string): CheckAgeActionType => {
    return {type: 'sort-age', payload: 'check_18'} as const
}

