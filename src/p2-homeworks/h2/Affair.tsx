import React from 'react'
import {AffairType} from './HW2';
import s from './Affair.module.css'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton';

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType // need to fix any
    deleteAffairCallback: (_id: number) => void // need to fix any
}

function Affair(props: AffairPropsType) {
    // вызываем callback и кидаем id, чтобы удалить одно дело affair:
    const deleteCallback = (_id: number) => {
        props.deleteAffairCallback(_id)
    }// need to fix
// style:
    const style = props.affair.priority === 'high'
        ? s.high : props.affair.priority === 'middle'
            ? s.middle : props.affair.priority === 'low'
                ? s.low : ''
    return (
        <div className={s.affairDiv}>
            <div className={s.n}>{props.affair.name}</div>
            <div className={style}>{props.affair.priority}</div>
            {/*на клик по кнопке удаляем таску*/}
            <button className={s.b} onClick={() => deleteCallback(props.affair._id)}>X</button>
        </div>
    )
}

export default Affair
