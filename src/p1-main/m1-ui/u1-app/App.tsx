import React from 'react'
import './App.css'
import HW6 from '../../../p2-homeworks/h6/HW6';
import HW7 from '../../../p2-homeworks/h7/HW7';
import HW8 from '../../../p2-homeworks/h8/HW8';
import HW9 from '../../../p2-homeworks/h9/HW9';
import HW10 from '../../../p2-homeworks/h10/HW10';
import HW11 from '../../../p2-homeworks/h11/HW11';


function App() {
    return (
        <div>
            <div>react homeworks:</div>
            {/*<HW1/>
            <HW2/>
            <HW3/>
            <HW4/>*/}
            {/*<HW5/>*/}
            {/*<HW6/>*/}
            {/*<HW7/>*/}
            {/*<HW8/>*/}
            {/*<HW9/>*/}
            {/*<HW10/>*/}
            <HW11/>
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
