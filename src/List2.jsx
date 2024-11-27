import PropTypes from 'prop-types';

export default function List2({ onClick }) {
    return <button onClick={onClick}>increment</button>
}

List2.propTypes = {
    onClick: PropTypes.func.isRequired
}