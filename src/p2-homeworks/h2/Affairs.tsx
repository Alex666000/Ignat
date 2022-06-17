import React from 'react'
import Affair from './Affair'
import {AffairPriorityType, AffairType, FilterType} from './HW2'
import s from './Affairs.module.css'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton';

type AffairsPropsType = { // need to fix any
    filteredAffairs: Array<AffairType>
    setFilter: React.Dispatch<React.SetStateAction<FilterType>>
    deleteAffairCallback: (_id: number) => void
}
function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.filteredAffairs.map((a: AffairType) => (
        <Affair // should work
            key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))
const setAffairs = (value: FilterType) => {
    props.setFilter(value)
}

    return (
        <div className={s.affairsDiv}>
            <div>
                {mappedAffairs}
            </div>
            <div className={s.buttonsDiv}>
                <SuperButton  onClick={() => setAffairs('all')}>All</SuperButton>
                <SuperButton onClick={() => setAffairs('high')}>High</SuperButton>
                <SuperButton onClick={() => setAffairs('middle')}>Middle</SuperButton>
                <SuperButton onClick={() => setAffairs('low')}>Low</SuperButton>
            </div>
        </div>
    )
}

export default Affairs
