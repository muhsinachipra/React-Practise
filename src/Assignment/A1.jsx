import PropTypes from 'prop-types'

const data = [
    {
      id: 1,
      name: "John Doe",
      email: "john.doe@example.com",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane.smith@example.com",
    },
    {
      id: 3,
      name: "Michael Johnson",
      email: "michael.johnson@example.com",
    },
  ];
  


export default function A1(props){
    return(
        <div className="A1">
            <h1>{props.name}</h1>
            <p>EMAIL : {props.email}</p>
        </div>
    );
}