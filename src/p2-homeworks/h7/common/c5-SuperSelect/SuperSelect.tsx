import React, {SelectHTMLAttributes, DetailedHTMLProps, ChangeEvent} from 'react'

type DefaultSelectPropsType = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>
type SuperSelectPropsType = DefaultSelectPropsType & {
    options?: any[]
    onChangeOption?: (option: any) => void
}

const SuperSelect: React.FC<SuperSelectPropsType> = (
    {
        options,
        onChange, onChangeOption,
        ...restProps
    }
) => {
    const mappedOptions: any[] = options ? options.map((o, i) =>
        ( //  FIX ----------- "замапить" options with key
            <label key={i}>
                <input
                    type={'select'}
                    name={'select'}
                    checked={true}
                    value={o.value}
                    onChange={o.onChangeOption}
                />
                {o}
            </label>
        )) : []

    const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
        onChange      // если есть пропс onChange -- onChange - работает с работает с value;
        && onChangeOption(arr)     // onChangeOption - показывает какой option выбран в радио-группе---event_ом
    }

    return (
        <select onChange={onChangeCallback} {...restProps}>
            {mappedOptions}
        </select>
    )
}

export default SuperSelect
