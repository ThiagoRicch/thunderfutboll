import './Times.css'
import Users from '../Users';

const Times = (props) => {
    
    return (
        (props.users.length > 0) ? <section className='labelTimes' style={{background: props.corSecundaria}}>
            <h3 style={{borderColor: props.corPrimaria}}>{props.nome}</h3>
            <div className='userCards'>
                {props.users.map(user => <Users 
                    corDeFundo = {props.corPrimaria}
                    key = {user.nome}
                    nome = {user.nome}
                    profissao={user.profissao}
                    imagem = {user.imagem}/>)}
            </div>
        </section>
        : ''
    )

}

export default Times;