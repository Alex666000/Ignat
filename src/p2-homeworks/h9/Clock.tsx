import React, {useState} from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {brotliCompress} from 'zlib';

function Clock() {
    const [timerId, setTimerId] = useState<number>(0)
    const [date, setDate] = useState<Date>()
    const [show, setShow] = useState<boolean>(false)

    const stop = () => {
        clearInterval(timerId)
    }
    const start = () => {
        stop()
        // window перед setInterval ставим чтобы ТС не ругался преобразует сразу так к числу или можно стереть виндоу и перед setInterval поставить +setInterval:  const id: number = window.setInterval
        const id: number = window.setInterval(() => {
            setDate(new Date())
        }, 1000)
        setTimerId(id)
    }

    const onMouseEnter = () => {
        setShow(true)
        // show
    }
    const onMouseLeave = () => {
        setShow(false)
        // close
    }

    const stringTime = date?.toLocaleTimeString() || <br/>// берет формат даты из моей ОС компа
    const stringDate = date?.toLocaleTimeString() || <br/>

    return (
        <div>
            {/* показывает время */}
            <div
                // события наведения мыши на div и убираем мышь с него
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                {stringTime}
            </div>
            {/* если есть show покажем дату */}
            {show ? (
                <div>
                    {stringDate}
                </div>
            ) : <br/>
            }
            {/*кнопки управления*/}
            <SuperButton onClick={start}>start</SuperButton>
            <SuperButton onClick={stop}>stop</SuperButton>

        </div>
    )
}

export default Clock

// moment.js - библиотека удобная при работе с датой и временем