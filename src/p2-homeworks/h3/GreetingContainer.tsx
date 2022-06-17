import React, {ChangeEvent, KeyboardEvent, useState} from 'react'
import Greeting from './Greeting'
import {UserType} from './HW3';
import {v1} from 'uuid';

type GreetingContainerPropsType = {
    users: Array<UserType> // need to fix any
    addUserCallback: (name: string) => void // need to fix any
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
    const [name, setName] = useState<string>('') // need to fix any
    const [error, setError] = useState<string>('') // need to fix any

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => { // need to fix any
        let eventValue = e.currentTarget.value
        setName(eventValue)
        if (eventValue.trim().length > 3 && eventValue.trim().match(/^([^0-9]*)$/gmi)) {
            setName(eventValue)
            setError('')
        } else if (eventValue.trim() === '') {
            setError('Enter your name')
        } else if (eventValue.match(/\d+/gi)) {
            setError('Print only letters')
        } else if (eventValue.length < 3) {
            setError('Name should be at list 3 letters long')
        }
    }
    const onEnterPressUpCallBack = (e: KeyboardEvent<HTMLInputElement>) => {
        error === '' && name !== '' &&
        e.key === 'Enter' && error === '' && addUser()
    }
    const addUser = () => {
        addUserCallback(name)
        alert(`Hello ${name} !`)// need to fix
        setName('')
    }

    let totalUsers = users.length // need to fix
    return (
        <>
            <Greeting
                onEnterPressUpCallBack={onEnterPressUpCallBack}
                name={name}
                setNameCallback={setNameCallback}
                addUser={addUser}
                error={error}
                totalUsers={totalUsers}
            />
            <ul>{users.map(el => <li key={v1()}>{el.name}</li>)}</ul>
        </>
    )
}

export default GreetingContainer
