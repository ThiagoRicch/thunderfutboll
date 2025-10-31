import { IoCloseCircleOutline } from "react-icons/io5";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";

import './Users.css'

const Users = (props) => {

    function favoritarUser()
    {
        props.aoFavoritar(props.id)
    }

    return (
        <div className='userContainer'>
            <IoCloseCircleOutline
                color="white"
                size={30}
                className='deleteUser'
                onClick={() => props.aoDeletar(props.id)}
            />
            <div className='headerUSer' style={{ backgroundColor: props.corDeFundo }}>
                <img src={props.imagem} alt={props.alt} />
            </div>
            <div className='footerUser'>
                <h4 style={{ color: props.corDeFundo }}>{props.nome}</h4>
                <p>{props.profissao}</p>
                <div className="favoriteUser">
                    {props.favorito 
                        ? <MdFavorite size={25} onClick={favoritarUser} color="red"/> 
                        : <MdFavoriteBorder size={25} onClick={favoritarUser}/>}
                </div>
            </div>
        </div>
    )
}

export default Users;