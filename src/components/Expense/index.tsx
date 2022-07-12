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
            <div className="expenseDate">
                <p>{date}</p>
            </div>
            <div className="expenseCat">
                <p className="categoryText" style={{backgroundColor: category == 'Salário' || category == 'Outras rendas' ? "rgb(9, 83, 243)" : "rgb(228, 5, 5)",}}
                >{category}</p>
            </div>
            <div className="expenseTitle">
                <p>{title}</p>
            </div>
            <div className="expenseValue">
                <p
                style={{color: category == 'Salário' || category == 'Outras rendas' ? "rgb(3, 168, 3)" : "rgb(228, 5, 5)",}}
                
                
                >R$ {value}</p>
            </div>
        </div>
    )
}

export default Expense

/*
style={{background-color: category == 'Salário' ? "rgb(3, 201, 3)" : "red",}}  
*/