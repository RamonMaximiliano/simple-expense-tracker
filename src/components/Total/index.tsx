import './styles.css'

 type Props = {
    positive: number,
    negative: number,
    total:number
} 

function Total(props:Props) {
    return (
        <div className="mainTotal">
            <div>
                Month
            </div>
            <div>
                <p>Receita</p>
                <p>R$ {props.positive}</p>
            </div>
            <div>
                <p>Despesa</p>
                <p>R$ {props.positive}</p>
            </div>
            <div>
                <p>Balanço</p>
                <p>R$ {props.total}</p>
            </div>
        </div>
    )
}

export default Total