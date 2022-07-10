import './styles.css'
import {useState} from 'react'

type Str = string
type Num = number
type Item = {
    date: string,
    category: string,
    title: string,
    value: number
}

//O props abaixo fiquei confuso, rever video Boni entender o porque, acho que é porque obrigatóriamente precisa de um tipo pra função 
 type Props = {
    onsubmitExpense: (item: Item)=> void;
  }; 

function New({onsubmitExpense}:Props) {
    //Criado um state para cada field do expense input
    const [data, setData] = useState<Str>('')
    const [categoria, setCategoria] = useState<Str>('')
    const [titulo, setTitulo] = useState<Str>('')
    const [valor, setValor] = useState<Num>(0)
 
   function newExpense(){
        onsubmitExpense({
            date: data,
            category: categoria,
            title: titulo,
            value: valor
        })    
        setData('')
        setCategoria('')
        setTitulo('')
        setValor(0)
    } 

    return (
        <form className="mainNew">
            <div>
                <p>Data</p>
                <input id="dateInput"  type="date" onChange={e => setData(String(e.target.value))}></input>
            </div>
            <div>
                <label>Categoria</label><br></br>
                <select onChange={e => setCategoria(String(e.target.value))}>
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
                <input type="number" onChange={e => setValor(Number(e.target.value))}></input>
            </div>
            <input type="button" value="Adicionar" onClick={newExpense}></input>
        </form>
    )
}
export default New


//limpar os inputs quando acionar o Adicionar
//validar campos vazios
//Dar erro se tenta adicionar algo em branco
