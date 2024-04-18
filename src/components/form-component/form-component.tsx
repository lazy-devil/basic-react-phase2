import { useEffect, useState } from 'react'
import './form-component.css'
import { v4 as uuidv4 } from 'uuid'
import { InputType } from '../../App'

const FormComponent = (props: any) => {

    const [title, setTitle] = useState('')
    const [amount, setAmount] = useState(0)
    const [formValid, setFormValid] = useState(false)

    const inputTitle = (event: any) => setTitle(event.target.value)
    const inputAmount = (event: any) => setAmount(event.target.value)
    const saveItem = (event: any) => {
        event.preventDefault()
        const itemData: InputType = {
            id: uuidv4(),
            title: title,
            amount: Number(amount)
        }
        props.onAddItem(itemData)
        setTitle('')
        setAmount(0)
    }

    useEffect(() => {
        const isValid = title?.trim().length > 0 && amount != 0
        setFormValid(isValid)
    }, [title, amount])

    return (
        <div>
            <form onSubmit={saveItem}>
                <div className="form-control">
                    <label>ชื่อรายการ</label>
                    <input type="text" placeholder="ระบุชื่อรายการของคุณ" onChange={inputTitle} value={title} />
                </div>
                <div className="form-control">
                    <label>จำนวนเงิน</label>
                    <input type="number" placeholder="(+ รายรับ , - รายจ่าย)" onChange={inputAmount} value={amount} />
                </div>
                <div>
                    <button type="submit" className="btn" disabled={!formValid}>เพิ่มข้อมูล</button>
                </div>
            </form>
        </div>
    )
}

export default FormComponent