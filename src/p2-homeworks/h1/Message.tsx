import React from 'react'
import s from './Message.module.css'

type MessagePropsType = {
    avatar: string
    name: string
    message: string
    time: string
}

const Message: React.FC<MessagePropsType> = (props) => {
    return (
        <div className={s.message}>
            {/*//аватарка*/}
            <img className={s.avatar} src={props.avatar} alt="photo"/>

            {/*уголок*/}
            <div className={s.angle}></div>

            {/*блок с текстом*/}
            <div className={s.content}>
                <div className={s.name}>{props.name}</div>
                <div className={s.text}>{props.message}</div>
                <div className={s.time}>{props.time}</div>
            </div>

        </div>
    )
}

export default Message
