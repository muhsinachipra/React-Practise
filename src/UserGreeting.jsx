import PropTypes from "prop-types";

export default function UserGreeting(props) {
  const WelcomeMessage = <h2>Welcome {props.name}</h2>;
  const LoginPrompt = <h2>Please Login</h2>;

  return props.isLogged ? WelcomeMessage : LoginPrompt;
}

UserGreeting.PropTypes = {
  name: PropTypes.string,
  isLogged: PropTypes.bool,
};

UserGreeting.defaultProps = {
  name: "Guest",
  isLogged: false,
};
