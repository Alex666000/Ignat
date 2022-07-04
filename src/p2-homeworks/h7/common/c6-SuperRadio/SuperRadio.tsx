import React, {ChangeEvent, InputHTMLAttributes, DetailedHTMLProps} from 'react'

type DefaultRadioPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperRadioPropsType = DefaultRadioPropsType & {
    options?: any[]
    onChangeOption?: (option: any) => void
}

const SuperRadio: React.FC<SuperRadioPropsType> = (
    {
        type, name,
        options, value,
        onChange, onChangeOption,
        ...restProps
    }
) => {
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        // onChange - работает с event_ом; onChangeOption - показывает какой option выбран в радио-группе  --- работате с value
        // onChange, onChangeOption
    }

// --- тут все "замаплено"  -- сделать по аналогии SuperSelect
    const mappedOptions: any[] = options ? options.map((o, i) => ( // map options with key
        <label key={name + '-' + i}>
            <input
                type={'radio'}
                // name={},
                // checked={},
                // value={},
                // onChange={}
            />
            {o}
        </label>
    )) : []                 // если  если options никто не передал, то мы заменяем мапленные опшены пустым массивом и тогда ничего не сломается

    return (
        <>
            {mappedOptions}
        </>
    )
}

export default SuperRadio

/*
1: // map options with key --- Радиокнопки слетят на сайте залитом... // - двойной коммент - сломает на githubPages проект - тк jsx комментируется как палочка звездочка, а js код как // - значит эта запись находится между jsx и js поэтому слетит сайт
 */
