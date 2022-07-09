import React, {ChangeEvent, InputHTMLAttributes, DetailedHTMLProps} from 'react'
import s from './SuperRadio.module.css'


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
        // если onChange котрый работате с объектом события передаем ему e, onChangeOption
        onChange && onChange(e)
        onChangeOption && onChangeOption(e.currentTarget.value)
    }

// --- тут все "замаплено"  -- сделать по аналогии SuperSelect
    const mappedOptions: any[] = options ? options.map((o, i) => (
        <label key={name + '-' + i} className={s.label}>
            <input
                // className={finalRadioClassName}
                type={'radio'}
                name={name}
                checked={o === value}
                value={o}
                onChange={onChangeCallback}
                // name checked value onChange
                {...restProps}
            />
            {o}
        </label>
    )) : []

    return (
        <>
            {mappedOptions}
        </>
    )
}

export default SuperRadio

/*
1: // map options with key --- Радиокнопки слетят на сайте залитом... // - двойной коммент - сломает на githubPages проект - тк jsx комментируется как палочка звездочка, а js код как // - значит эта запись находится между jsx и js поэтому слетит сайт
2: // onChange - работает с event_ом; onChangeOption - показывает какой option  был выбран в радио-группе  --- работате с value
3: : [] если options никто не передал, то мы заменяем мапленные опшены пустым массивом и тогда ничего не сломается
 */
