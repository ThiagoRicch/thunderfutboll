import './InputText.css';

const InputText = (props) => {

  const aoDigitado = (evento) => {
    props.aoAlterado(evento.target.value);
  }

  return (
    <div>
      <label className= 'labelStyle'>
            {props.label}
      </label>
      <input
            value={props.valor}
            onChange={aoDigitado}
            required={props.obrigatorio}
            type={props.type}
            placeholder={props.placeholder}
            className="inputStyle" />
    </div>
  )
}

export default InputText;