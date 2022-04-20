import react, {ChangeEvent, useRef, useState} from 'react'
import {action} from "@storybook/addon-actions";

export default {
    title: 'input'
}

export const UncontrolledInput = () => <input/>
export const ControlledInputWithFixedValue = () => <input value={'qwerty'}/>
export const TrackedValueUncontrolledInput = () => {
    const [text, setText] = useState('')
    const onChange = (e: ChangeEvent<HTMLInputElement>) => setText(e.currentTarget.value);
    return <><input value={text} onChange={onChange}/> - {text}</>
}

export const GetValueUncontrolledInputByButton = () => {
    const [text, setText] = useState('')
    const inputRef = useRef<HTMLInputElement>(null)

    const onClick = () => {
        const el = inputRef.current as HTMLInputElement
        setText(el.value)
    };
    return <><input ref={inputRef}/>
        <button onClick={onClick}>press
        </button>
        - full value: {text}</>
}

export const ControlledInput = () => {
    const [value, setValue] = useState('')
    const onChange = (e: ChangeEvent<HTMLInputElement>) => setValue(e.currentTarget.value)
    return <input value={value} onChange={onChange}/>
}

export const ControlledCheckbox = () => {
    const [state, setState] = useState(false)
    const onChange = (e: ChangeEvent<HTMLInputElement>) => setState(e.currentTarget.checked);
    return <input type="checkbox" checked={state} onChange={onChange}/>
}

export const ControlledSelect = () => {
    const [value, setValue] = useState<string | undefined>('none')
    const onChange = (e: ChangeEvent<HTMLSelectElement>) => setValue(e.currentTarget.value);
    return <select value={value} onChange={onChange}>
        <option>none</option>
        <option value={'1'}>Gilera</option>
        <option value={'2'}>Aprilia</option>
        <option value={'3'}>BMW</option>
    </select>
}