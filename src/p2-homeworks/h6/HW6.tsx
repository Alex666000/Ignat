import React, {useState} from 'react'
import SuperEditableSpan from './common/c4-SuperEditableSpan/SuperEditableSpan'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {saveState} from './localStorage/localStorage'

// В ЭТОМ ФАЙЛЕ ИСПОЛЬЗУЕМ функции из localStorage.ts:
function HW6() {
    const [value, setValue] = useState<string>('')
// сохранение значения в local storage:
    const save = () => {
        // saveState - обертка над имеющимся функционалом в JS:
        saveState<string>('editable-span-value', value)
    }
    // получение данных из local storage:
    const restore = () => {
        // setValue()
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

            {/*проанализировать состав кнопок еще раз:*/}
            <SuperButton onClick={save}>save</SuperButton>
            <SuperButton onClick={restore}>restore</SuperButton>

        </div>
    )
}

export default HW6
