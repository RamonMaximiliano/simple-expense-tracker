import './styles.css'

type Props = {
    date: string | undefined,
    category: string | undefined,
    title: string | undefined,
    value: number | undefined,
    key?: number | undefined
}

function Expense({ date, category, title, value }: Props) {
    return (
        <div className="expenseItem">
            <div>
                {date}
            </div>
            <div>
                <p>{category}</p>
            </div>
            <div>
                <p>{title}</p>
            </div>
            <div>
                <p>{value}</p>
            </div>
        </div>
    )
}

export default Expense



