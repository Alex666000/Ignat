import React from 'react'
import './App.css'
import HW6 from '../../../p2-homeworks/h6/HW6';
import HW7 from '../../../p2-homeworks/h7/HW7';


function App() {
    return (
        <div>
            <div>react homeworks:</div>
            {/*<HW1/>
            <HW2/>
            <HW3/>
            <HW4/>*/}
            {/*<HW5/>*/}
            <HW6/>
            <HW7/>
        </div>
    )
}

export default App
/*
ТЗ: сделать span с карандашом - по двойному клику он превратиться в input
 - туда что-то вводим и по onBlur
и по кнопке save из input в storage сохраняется значение - это будет отдельной
"суперкомпонентой" SuperEditableSpan. Можно в инпуте поменять (забрать значение из LS в SuperEditableSpan)
значение нажатием кнопки restore
 */
