import './Users.css'

const Users = (props) => {
    return (
        <div className='userContainer'>
            <div className='headerUSer' style={{backgroundColor: props.corDeFundo}}>
                <img src={props.imagem} alt={props.alt}/>
            </div>
            <div className='footerUser'>
                <h4>{props.nome}</h4>
                <h5>{props.profissao}</h5>
            </div>
        </div>
    )
}

export default Users;