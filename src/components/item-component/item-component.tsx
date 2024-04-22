import PropTypes from 'prop-types';
import './item-component.css'
import { InputType, formatNumber } from '../../App';

const Item = (props: InputType) => {
    const { title, amount } = props
    const status: string = amount < 0 ? 'expense' : 'income'
    const symbol: string = amount < 0 ? '-' : '+'

    return (
        <li className={status}>{title}<span>{symbol}{formatNumber(Math.abs(amount).toFixed(2))}</span></li>
    );
}

Item.propTypes = {
    title: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired
}

export default Item
