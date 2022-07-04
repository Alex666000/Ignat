import React, {useState} from 'react'
import SuperEditableSpan from './common/c4-SuperEditableSpan/SuperEditableSpan'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {restoreState, saveState, StateType} from './localStorage/localStorage'

// В ЭТОМ ФАЙЛЕ ИСПОЛЬЗУЕМ функции из localStorage.ts:
function HW6() {
    const [value, setValue] = useState<string>('')
// сохранение значения в local storage:
    //обертка над имеющимся функционалом в JS:
    const save = () => {
        saveState<string>('editable-span-value', value)
    }
    // получение данных из local storage:
    const restore = () => {
        setValue(restoreState<string>('editable-span-value', value))

    }

    return (
        <div>
            <hr/>
            homeworks 6
            {/*should work (должно работать)*/}
            <div>
                <SuperEditableSpan
                    value={value}
                    onChangeText={setValue}
                    spanProps={{children: value ? undefined : 'enter text...'}}
                />
            </div>
            {/*кнопки*/}
            <SuperButton onClick={save}>save</SuperButton>
            <SuperButton onClick={restore}>restore</SuperButton>

        </div>
    )
}

export default HW6
