import './styles.css'
import {useState} from 'react'

type Str = string

function New(props:any) {
    const [titulo, setTitulo] = useState<Str>('')


    console.log(titulo)

    return (
        <form className="mainNew" onSubmit={props.onsubmitExpense}>
            <div>
                <p>Data</p>
                <input type="date"></input>
            </div>
            <div>
                <label>Categoria</label><br></br>
                <select>
                    <option>Alimentação</option>
                    <option>Aluguel</option>
                    <option>Salário</option>
                </select>
            </div>
            <div>
                <p>Título</p>
                <input type="text" onChange={e => setTitulo(e.target.value)}></input>
            </div>
            <div>
                <p>Valor</p>
                <input type="number"></input>
            </div>
            <input type="button" value="Adicionar"></input>
        </form>
    )
}

export default New

