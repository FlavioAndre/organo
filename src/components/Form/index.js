import { useState } from 'react';
import Button from '../Button';
import OverList from '../OverList';
import TextField from '../TextField';

import './Form.css'
const Form = (props) => {
    const [nome, setNome] = useState('');
    const [cargo, setCargo] = useState('');
    const [imagem, setImagem] = useState('');
    const [time, setTime] = useState('');

    const onSave = (event) => {
        event.preventDefault();
        props.onSave({
            nome,
            cargo,
            imagem,
            time
        })
        setNome('')
        setCargo('')
        setImagem('')
        setTime('')
    }

    return (
        <section className='form'>
            <form onSubmit={onSave}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <TextField  
                    required={true}
                    label="Nome" 
                    placeholder="Digite o seu nome"
                    value={nome}
                    onChange={value => setNome(value)}
                />
                <TextField 
                    required={true} 
                    label="Cargo" 
                    placeholder="Digite o seu cargo"
                    value={cargo}
                    onChange={value => setCargo(value)}
                />
                <TextField 
                    label="Imagem" 
                    placeholder="Digite o endereço da imagem"
                    value={imagem}
                    onChange={value => setImagem(value)}
                />
                <OverList 
                    value={time}
                    onChange={value => setTime(value)}
                    required={true} 
                    label="Time" 
                    itens={props.times}/>
                <Button>
                    Criar Card
                </Button>
            </form>
        </section>
    )
}

export default Form;