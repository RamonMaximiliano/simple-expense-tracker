import './styles.css'

type Props = {
    date: string,
    category: string,
    title: string,
    value: number
}

function Expense({date,category,title,value}:Props){
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



