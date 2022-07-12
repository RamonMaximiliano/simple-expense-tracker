import './styles.css'

type Props = {
    positive: number,
    negative: number,
    total: number,
    month?: string,
    year?: number
}

function Total(props: Props) {
    return (
        <div className="mainTotal">
            <div>
            <strong>{props.month} - {props.year}</strong>
            </div>
            <div>
                <p><strong>Receita</strong></p>
                <p><strong>R$ {props.positive}</strong></p>
            </div>
            <div>
                <p><strong>Despesa</strong></p>
                <p><strong>R$ {props.negative}</strong></p>
            </div>
            <div>
                <p><strong>Balanço</strong></p>
                <p
                style={{color: props.total >= 0 ? "rgb(3, 201, 3)" : "red",}}  
                ><strong>R$ {props.total}</strong></p>
            </div>
        </div>
    )
}

export default Total

