import Item from "../item-component/item-component";
import './transaction-component.css'
//import DataContext from "../../data/DataContext";
//import { useContext } from "react";
import { InputType } from "../../App";

const Transaction = (props: any) => {
    const { items } = props
    //const { income, expense } = useContext(DataContext)

    return (
        <>
            <ul className="item-list">
                {items.map((element: InputType) => {
                    return <Item {...element} key={element.id} />
                })}
            </ul>
            {/* <DataContext.Consumer>
                {(data) =>
                    <>
                        <p>รายรับ: {data?.income}</p>
                        <p>รายจ่าย: {data?.expense}</p>
                    </>}
            </DataContext.Consumer>
            <p>รายรับ: {income}</p>
            <p>รายจ่าย: {expense}</p> */}
        </>
    );
}

export default Transaction
