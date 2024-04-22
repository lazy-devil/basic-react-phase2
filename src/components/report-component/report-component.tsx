import './report-component.css'
import DataContext from '../../data/DataContext';
import { useContext } from 'react';
import { formatNumber } from '../../App'

const Report = () => {
    const { income, expense } = useContext(DataContext)

    // function formatNumber(income: number) {
    //     throw new Error('Function not implemented.');
    // }

    return (
        <div>
            {
                /* <DataContext.Consumer>
                    {(data) =>
                        <>
                            <p>รายรับ: {data?.income}</p>
                            <p>รายจ่าย: {data?.expense}</p>
                        </>}
                </DataContext.Consumer>
                */
            }
            <h4>ยอดคงเหลือ (บาท)</h4>
            <h1>฿{formatNumber((income - expense).toFixed(2))}</h1>
            <div className='report-container'>
                <div>
                    <h4>รายได้ทั้งหมด</h4>
                    <p className='report plus'>฿{formatNumber(income.toFixed(2))}</p>
                </div>
                <div>
                    <h4>รายจ่ายทั้งหมด</h4>
                    <p className='report minus'>฿{formatNumber(expense.toFixed(2))}</p>
                </div>
            </div>
        </div>
    );
}

export default Report
