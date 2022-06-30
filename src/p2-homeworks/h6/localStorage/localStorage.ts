// вот вам функция для сохранения объектов в память браузера
// (данные в этом хранилище сохраняться даже при перезагрузке компа):
export function saveState<T>(key: string, state: T) {/* значение state ключа любой объект, а не только строка*/
    // превратит в строку JSON.stringify:
    const stateAsString = JSON.stringify(state)
    // установим в localStorage:
    localStorage.setItem(key, stateAsString)
}

// и вот вам функция для ПОЛУЧЕНИЯ (ДОСТАВАНИЯ ЗНАЧЕНИЯ) сохранённого объекта в памяти браузера:
export function restoreState<T>(key: string, defaultState: T) {
    /* если в local storage ничего нет, то будет дефолтное значение defaultState*/
    let state = defaultState
    // достаем по ключу из LS значение:
    const stateAsString = localStorage.getItem(key)
    /* если же есть значение, то: */
    if (stateAsString !== null) state = JSON.parse(stateAsString) as T
    // вернем наружу
    return state
}

// пример использования и работы функции saveState:
type StateType = {
    x: string
    y: number
}
// СОХРАНЯЕМ объект типа StateType в ячейке 'test'
saveState<StateType>('test', {x: 'A', y: 1})

// ПОЛУЧАЕМ (достаем значение) в переменную state объект из ячейки 'test' или дефолтный объект если ячейка пуста
// возвращаемое значение сохраняется в переменную state:
const state: StateType = restoreState<StateType>('test', {x: '', y: 0})


/*
1 - Стандартный local storage сохраняет только строки - тут универсальная функция для любых данных (более сложных объектов) export function saveState<T>(key: string, state: T) {
const stateAsString = JSON.stringify(state)
localStorage.setItem(key, stateAsString)
}
 */