import './OverList.css'

const OverList = (props) =>{
    return (
        <div className='over-list'>
            <label>{props.label}</label>
            <select 
                onChange={ event => props.onChange(event.target.value)} 
                value={props.value}
                required={props.required}
            >
                 <option value=""></option>
                {props.itens.map(item => 
                    <option key={item}>{item}</option>
                )}
            </select>
        </div>
    )
}

export default OverList