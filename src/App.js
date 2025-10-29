import Form from './componentes/Form';
import Title from './componentes/Title';
import Body from './componentes/Body';
import Banner from './componentes/Banner';
import {useState} from 'react';
import Times from './componentes/Times';
function App() {

  const times = [
  {
    nome: 'São Paulo',
    corPrimaria: '#FF0000',
    corSecundaria: 'linear-gradient(90deg, black, white, red)' // preto, branco e vermelho
  },
  {
    nome: 'Palmeiras',
    corPrimaria: '#006437',
    corSecundaria: 'linear-gradient(90deg, #006437, #FFFFFF)' // verde e branco
  },
  {
    nome: 'Corinthians',
    corPrimaria: '#000000',
    corSecundaria: 'linear-gradient(90deg, black, white)' // preto e branco
  },
  {
    nome: 'Grêmio',
    corPrimaria: '#00ADEF',
    corSecundaria: 'linear-gradient(90deg, #00ADEF, white)' // azul e branco
  },
  {
    nome: 'Flamengo',
    corPrimaria: '#C00000',
    corSecundaria: 'linear-gradient(90deg, black, red)' // preto e vermelho
  },
  {
    nome: 'Internacional',
    corPrimaria: '#E30613',
    corSecundaria: 'linear-gradient(90deg, #E30613, white)' // vermelho e branco
  }
]

  const [users, setUsers] = useState([]);

  const addUser = (newuser) => {
    setUsers([...users, newuser])
  }
  return (
      <Body>
        <Banner/>
        <Title/>
        <Form times = {times.map(time => time.nome)} aoNewUser = {user => addUser(user)}/>
        {times.map(time => <Times 
          key={time.nome} 
          nome = {time.nome}
          corPrimaria = {time.corPrimaria}
          corSecundaria = {time.corSecundaria}
          users = {users.filter(newuser => newuser.time === time.nome)}
        />)}
      </Body>
  )
}

export default App;
