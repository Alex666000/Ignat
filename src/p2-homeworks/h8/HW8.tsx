import React, {useState} from 'react'
import {addNameDownAC, addNameUpAC, checkAgeAC, homeWorkReducer} from './bll/homeWorkReducer'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'

export type UserType = {
    _id: number
    name: string
    age: number
}

const initialPeople = [
    {_id: 0, name: 'Кот', age: 3},
    {_id: 1, name: 'Собака', age: 8},
    {_id: 2, name: 'Оля', age: 16},
    {_id: 3, name: 'Виктор', age: 19},
    {_id: 4, name: 'Дмитрий', age: 34},
    {_id: 5, name: 'Ирина', age: 55},
] as Array<UserType>

function HW8() {
    const [people, setPeople] = useState<Array<UserType>>(initialPeople)

    const finalPeople = people.map((p: UserType) => (
        <div key={p._id}>
            <span>{p.name}</span>

            {p.age}
        </div>
    ))

    const sortUp = () => setPeople(homeWorkReducer(initialPeople, addNameUpAC('up')))
    const sortDown = () => setPeople(homeWorkReducer(initialPeople, addNameDownAC('sort_down')))
    const check_18 = () => setPeople(homeWorkReducer(initialPeople, checkAgeAC('check_18')))

    return (
        <div>
            <hr/>
            homeworks 8

            {finalPeople}

            {/*кликаем по кнопке sortUp и запускаем reducer homeWorkReducer*/}
            <div style={{display: 'inline'}}>
                <SuperButton onClick={sortUp}>sort up</SuperButton>
                <SuperButton onClick={sortDown}>sort_down</SuperButton>
                <SuperButton onClick={check_18}>check_18</SuperButton>
            </div>


            <hr/>

        </div>
    )
}

export default HW8
