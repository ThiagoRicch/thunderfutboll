import './Times.css'
import Users from '../Users';
import saoPaulo from '../../assets/times/SãoPaulo.png';
import palmeiras from '../../assets/times/Palmeiras.png';
import corinthians from '../../assets/times/Corinthians.png';
import gremio from '../../assets/times/Grêmio.png';
import flamengo from '../../assets/times/Flamengo.png';
import internacional from '../../assets/times/Internacional.png';

const Times = (props) => {
  
  const icones = {
    'São Paulo': saoPaulo,
    'Palmeiras': palmeiras,
    'Corinthians': corinthians,
    'Grêmio': gremio,
    'Flamengo': flamengo,
    'Internacional': internacional
  };

  return (
    (props.users.length > 0) ? (
      <section className='labelTimes' style={{ background: props.corSecundaria }}>
        <input 
          onChange={evento => props.mudarCor(evento.target.value, props.id)} 
          value={props.corPrimaria} 
          type='color' 
          className='inputColor'
        />

        <img 
          src={icones[props.nome]} 
          alt={props.nome} 
          className='timeLogo'
          style={{ borderColor: props.corPrimaria }}
        />

        <h3 className="nomeTime" style={{ color: props.corPrimaria }}>
          {props.nome}
        </h3>

        <div className='userCards'>
          {props.users.map(user => (
            <Users 
              key={user.id}
              id={user.id}
              nome={user.nome}
              profissao={user.profissao}
              imagem={user.imagem}
              favorito={user.favorito}
              corDeFundo={props.corPrimaria}
              aoDeletar={props.aoDeletar}
              aoFavoritar={props.aoFavoritar}
            />
          ))}
        </div>
      </section>
    ) : null
  )
}

export default Times;
