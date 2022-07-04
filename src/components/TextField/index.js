import './TextField.css'

const TextField = (props) => {
    const onChange = (event) => {
        props.onChange(event.target.value)
    }

    return (
        <div className="text-field">
            <label>{props.label}</label>
            <input value={props.value} onChange={onChange} required={props.required} placeholder={props.placeholder}/>
        </div>
    )
}

export default TextField;