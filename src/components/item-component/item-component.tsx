import PropTypes from 'prop-types';
import './item-component.css'
import { InputType } from '../../App';

const Item = (props: InputType) => {
    const { title, amount } = props
    const status: string = amount < 0 ? 'expense' : 'income'
    const symbol: string = amount < 0 ? '-' : '+'

    return (
        <li className={status}>{title}<span>{symbol}{Math.abs(amount)}</span></li>
    );
}

Item.propTypes = {
    title: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired
}

export default Item
