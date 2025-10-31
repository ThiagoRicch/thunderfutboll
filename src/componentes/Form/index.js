import './Form.css'
import InputText from '../InputText';
import Select from '../Select';
import Button from '../Button';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const Form = (props) => {

  const [nome, setNome] = useState('');
  const [profissao, setProfissao] = useState('');
  const [imagem, setImagem] = useState('');
  const [time, setTime] = useState('');

  const aoSalvar = (evento) => {
    evento.preventDefault();

    const newUser = {
      id: uuidv4(),
      nome,
      profissao,
      imagem,
      time,
      favorito: false
    }

    props.aoNewUser(newUser)

    setNome('')
    setProfissao('')
    setImagem('')
    setTime('')
  }

  return (
    <form
      onSubmit={aoSalvar}
      className='formContainer'>
      <InputText
        label="Nome"
        type="text"
        placeholder="Digite seu nome..."
        obrigatorio={true}
        valor={nome}
        aoAlterado={valor => setNome(valor)}
      />
      <InputText
        label="Profissão"
        type="text"
        placeholder="Digite sua profissão..."
        obrigatorio={true}
        valor={profissao}
        aoAlterado={valor => setProfissao(valor)}
      />
      <InputText
        label="Imagem"
        type="text"
        placeholder="Digite o caminho da sua imagem..."
        obrigatorio={false}
        valor={imagem}
        aoAlterado={valor => setImagem(valor)}
      />
      <Select
        label="Time"
        itens={props.times}
        valor={time}
        aoAlterado={valor => setTime(valor)}
      />
      <Button />
    </form>
  )
};

export default Form;