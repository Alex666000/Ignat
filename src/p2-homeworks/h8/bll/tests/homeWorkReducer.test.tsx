import React from 'react'
import {homeWorkReducer} from '../homeWorkReducer'

let initialState: any[] // need to fix any

beforeEach(() => {
    initialState = [
        {_id: 0, name: 'Кот', age: 3},
        {_id: 1, name: 'Александр', age: 66},
        {_id: 2, name: 'Коля', age: 16},
        {_id: 3, name: 'Виктор', age: 44},
        {_id: 4, name: 'Дмитрий', age: 40},
        {_id: 5, name: 'Ирина', age: 55},
    ]
})

test('sort name up', () => {
    const newState = homeWorkReducer(initialState, {type: 'sort-name-up', payload: 'up'})

    console.log(newState)

    const result = [
        1, 3, 4, 5, 2,0
    ].filter((el, i) => el === newState[i]._id)
expect(newState[0]).toBe(1)
    expect(result.length).toBe(newState.length)
})
test('sort name down', () => {
    const newState = homeWorkReducer(initialState, {type: 'sort-name-down', payload: 'sort_down'})


})
test('check age 18', () => {
    // const newState = homeWorkReducer(initialState, {type: 'check', payload: 18})


})
