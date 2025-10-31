import Form from './componentes/Form';
import Title from './componentes/Title';
import Body from './componentes/Body';
import Banner from './componentes/Banner';
import {useState} from 'react';
import Times from './componentes/Times';
import { v4 as uuidv4 } from 'uuid';


function App() {

  const [times, setTimes] = useState([
  {
    id: uuidv4(),
    nome: 'São Paulo',
    corPrimaria: '#FF0000',
    corSecundaria: 'linear-gradient(90deg, black, white, red)' // preto, branco e vermelho
  },
  {
    id: uuidv4(),
    nome: 'Palmeiras',
    corPrimaria: '#006437',
    corSecundaria: 'linear-gradient(90deg, #006437, #FFFFFF)' // verde e branco
  },
  {
    id: uuidv4(),
    nome: 'Corinthians',
    corPrimaria: '#000000',
    corSecundaria: 'linear-gradient(90deg, black, white)' // preto e branco
  },
  {
    id: uuidv4(),
    nome: 'Grêmio',
    corPrimaria: '#00ADEF',
    corSecundaria: 'linear-gradient(90deg, #00ADEF, white)' // azul e branco
  },
  {
    id: uuidv4(),
    nome: 'Flamengo',
    corPrimaria: '#C00000',
    corSecundaria: 'linear-gradient(90deg, black, red)' // preto e vermelho
  },
  {
    id: uuidv4(),
    nome: 'Internacional',
    corPrimaria: '#E30613',
    corSecundaria: 'linear-gradient(90deg, #E30613, white)' // vermelho e branco
  }
])

  const [users, setUsers] = useState([]);

  function deleteUser(id) {
    setUsers(users.filter(user => user.id !== id))
    
  }

  function favoriteUsers (id)
  {
    setUsers(users.map(user => {
      if(user.id === id)
        user.favorito = !user.favorito;

      return user
    })
    )
  }

  function mudarCorCard(cor, id)
  {
    setTimes(times.map(time => {
      if(time.id === id)
      {
        time.corPrimaria = cor;
      }
      return time; 
    }))
  }

  const addUser = (newuser) => {
    setUsers([...users, newuser])
  }
  return (
      <Body>
        <Banner/>
        <Title/>
        <Form times = {times.map(time => time.nome)} aoNewUser = {user => addUser(user)}/>
        {times.map(time => 
        <Times
          aoFavoritar = {favoriteUsers}
          mudarCor = {mudarCorCard}
          key={time.id}
          id = {time.id}
          nome = {time.nome}
          corPrimaria = {time.corPrimaria}
          corSecundaria = {time.corSecundaria}
          users = {users.filter(newuser => newuser.time === time.nome)}
          aoDeletar = {deleteUser}
        />)}
      </Body>
  )
}

export default App;
