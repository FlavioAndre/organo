import Collaborator from '../Collaborator';
import './Team.css';

const Team = (props) => {
    const css = { backgroundColor: props.corSecundaria }
    return (
        (props.colaboradores.length > 0) ? <section className='team' style={css}>
            <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
            <div className='colaboradores'>
                {props.colaboradores.map( colaborador => <Collaborator corDeFundo={props.corPrimaria} nome={colaborador.nome} cargo={colaborador.cargo} imagem={colaborador.imagem} key={colaborador.nome}/> )}
            </div>
        </section> 
        : ''
    )
}

export default Team;