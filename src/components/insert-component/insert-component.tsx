import { useState } from "react"
import { InputType } from "../../App"
import FormComponent from "../form-component/form-component"
import Transaction from "../transaction-component/transaction-component"

const Insert = () => {
    const [items, setItems] = useState<InputType[]>([])

    const onAddNewItem = (newItem: InputType) => {
        setItems((prevItem) => {
            return [newItem, ...prevItem]
        })
    }
    return (
        <>
            <FormComponent onAddItem={onAddNewItem} />
            <Transaction items={items} />
        </>
    );
}

export default Insert
