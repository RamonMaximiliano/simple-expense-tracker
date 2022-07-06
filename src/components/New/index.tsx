import './styles.css'

function New(){
    return (
        <div className="mainNew">
            <div>
            <p>Data</p>
            <input type="date"></input>
            </div>
            <div>
                <p>Categoria</p>
                <p>R$ 0,00</p>
            </div>
            <div>
                <p>Título</p>
                <input type="text"></input>
            </div>
            <div>
                <p>Valor</p>
                <input type="number"></input>
            </div>
            <input type="button" value="Adicionar"></input>
        </div>
    )
}

export default New