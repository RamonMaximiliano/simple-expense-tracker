import './styles.css'
import { useState } from 'react'

type Str = string
type Num = number
type Item = {
    date: string,
    category: string,
    title: string,
    value: number,
}

//O props abaixo fiquei confuso, rever video Boni entender o porque, acho que é porque obrigatóriamente precisa de um tipo pra função pois o props que foi passado é um setState, ou seja uma função
type Props = {
    onsubmitExpense: (item: Item) => void;
};

function New({ onsubmitExpense }: Props) {
    //Criado um state para cada field do expense input
    const [data, setData] = useState<Str>('')
    const [categoria, setCategoria] = useState<Str>('Alimentação')
    const [titulo, setTitulo] = useState<Str>('')
    const [valor, setValor] = useState<Num>(0)

    //Validando se estão vazios
    function newExpense() {
        if (data == '') {
            window.alert('Adicione uma data!')
        } else if (titulo == '') {
            window.alert('Adicione um título!')
        } else if (valor == 0) {
            window.alert('Adicione um valor!')
        } else {
            onsubmitExpense({
                date: data,
                category: categoria,
                title: titulo,
                value: valor
            })

            //limpando os campos após enviar o novo item
            setData('')
            setTitulo('')
            setValor(0)
        }
    }

    return (
        <form className="mainNew">
            <div className="subNew">
                <p className="subTitle"><strong>Data</strong></p>
                <input id="dateInput" type="date" onChange={e => setData(String(e.target.value))} value={data}></input>
            </div>
            <div className="subNewCat">
                <label ><strong>Categoria</strong><br></br>
                    <select onChange={e => setCategoria(String(e.target.value))} value={categoria} className="select">
                        <option>Alimentação</option>
                        <option>Aluguel</option>
                        <option>Salário</option>
                        <option>Outras despesas</option>
                        <option>Outras rendas</option>
                    </select>
                </label>
            </div>
            <div className="subNew">
                <p className="subTitle"><strong>Título</strong></p>
                <input type="text" onChange={e => setTitulo(e.target.value)} value={titulo}></input>
            </div>
            <div className="subNew">
                <p className="subTitle"><strong>Valor</strong></p>
                <input type="number" onChange={e => setValor(Number(e.target.value))} value={valor}></input>
            </div>
            <div >
                <input type="button" value="Adicionar" onClick={newExpense} className="addButton"></input>
            </div>
        </form>
    )
}
export default New


//--limpar os inputs quando acionar o Adicionar = TIve que fazer sem getelementbyid, mas colocando o default value de cada field como sendo o proprio state e então limpando o state
//--devido que getelementbyid não funciona com typescript sendo que os elementos ficam sem tipagem e da erro  
