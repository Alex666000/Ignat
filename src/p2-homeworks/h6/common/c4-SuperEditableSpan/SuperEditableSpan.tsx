import React, {DetailedHTMLProps, InputHTMLAttributes, HTMLAttributes, useState} from 'react'
import SuperInputText from '../../../h4/common/c1-SuperInputText/SuperInputText'
import {saveState} from '../../localStorage/localStorage';
// тип пропсов обычного инпута
type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
// тип пропсов обычного span дефолтного
type DefaultSpanPropsType = DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>

// здесь мы говорим что у нашего input будут такие же пропсы как у обычного input
// (чтоб не писать value: string, onChange: ...; они уже все описаны в DefaultInputPropsType)

// typesProps:
type SuperEditableSpanType = DefaultInputPropsType & { // и + ещё пропсы которых нет в стандартном инпуте
    onChangeText?: (value: string) => void
    onEnter?: () => void
    error?: string
    spanClassName?: string
// пропсы для span
    spanProps?: DefaultSpanPropsType
    // пропсы для span -"необязательныe пропсы" для того, чтобы определить, как span будет отрисовываться...
}
// present component:
const SuperEditableSpan: React.FC<SuperEditableSpanType> = (
    {
        autoFocus, // игнорировать изменение этого пропса
        onBlur,
        onEnter,
        spanProps,

        ...restProps // все остальные пропсы попадут в объект restProps
    }
) => {

    const [editMode, setEditMode] = useState<boolean>(false)
    const {children, onDoubleClick, className, ...restSpanProps} = spanProps || {}

    const onEnterCallback = () => {

        setEditMode(false)
        // setEditMode() // выключить editMode при нажатии Enter          // fix
        onEnter && onEnter()
    }
    // когда кликаем за пределы input или внутри него кликаем Enter:
    const onBlurCallback = (e: React.FocusEvent<HTMLInputElement>) => {

        setEditMode(false)
        // setEditMode() // выключить editMode при нажатии за пределами инпута
        onBlur && onBlur(e)
    }
    // на двойной клик либо 1, либо вторую функцию вызываем:
    const onDoubleClickCallBack = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
        setEditMode(true)

        // setEditMode() // включить editMode при двойном клике // fix
        onDoubleClick && onDoubleClick(e)
    }

    const spanClassName = `${'сделать красивый стиль для спана'} ${className}` // fix - карандашек...

    return (
        <>
            {editMode
                ? (
                    <SuperInputText
                        autoFocus
                        onBlur={onBlurCallback}
                        onEnter={onEnterCallback}

                        {...restProps} // отдаём инпуту остальные пропсы если они есть (value например там внутри)
                    />
                ) : (
                    // отрисовка span:
                    <span
                        onDoubleClick={onDoubleClickCallBack}
                        className={spanClassName}

                        {...restSpanProps}
                    >
                        {/*если нет "захардкодженного" текста для span, то значение input*/}
                        ✎ {children || restProps.value}
                    </span>
                )
            }
        </>
    )
}

export default SuperEditableSpan

/*
    spanProps?: DefaultSpanPropsType // пропсы для  SPAN -"необязательны пропсы" - поэтому в "деструкктуризации"
    пропишем spanProps || {} - ЕСЛИ ПРОПСОВ У СПАНА НЕ БУДЕТ ПОДСУНЕМ ПУСТОЙ ОБЪЕКТ
    т.к у undefined если будет брать какие-то свойства то приложение упадет - сайт ляжет

 */