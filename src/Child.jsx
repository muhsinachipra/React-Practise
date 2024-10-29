import PropTypes from 'prop-types';

const Child = ({ message, onUpdateMessage }) => {
    const handleChangeMessage = () => {
        onUpdateMessage('Hello from Child!');  // Call the parent's callback to modify the message
    };

    return (
        <div>
            <h2>Child Component</h2>
            <p>Received message: {message}</p>
            <button onClick={handleChangeMessage}>Change Parents Message</button>
        </div>
    );
};

Child.propTypes = {
    onUpdateMessage: PropTypes.func.isRequired,
    message: PropTypes.func.isRequired,
};

export default Child;
