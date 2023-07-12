import './ExpenseDate.css';


const ExpenseDate =(props)=>{
    const {date}=props;
    const dateObj=new Date(date);
    const day=dateObj.getDate()
    const month=dateObj.toLocaleDateString('US-en',{month:"long"})
    const year=dateObj.getFullYear()
    return(
              <div className='expense-date'>
                    <div className='expense-date__month'>{month}</div>
                    <div className='expense-date__date'>{day}</div>
                    <div className='expense-date__year'>{year}</div>
              </div>  
    )
};

export default ExpenseDate;