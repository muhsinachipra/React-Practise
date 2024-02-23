import Header from './Header';
import Footer from './Footer';
import Food from './Food';
import Card from './Card';
import Button from './Button/Button';
import Student from './Student';

function App() {

  return (
    <>
    <Student name= "SpongeBob" age={30} isStudent={true}/>
    <Student name= "patrick" age={45} isStudent={false}/>
    <Student name= "Squidward" age={50} isStudent={false}/>
    <Student name= "Sandy" age={21} isStudent={true}/>
    <Student name= 'larry'/>
    </>
  );
}

export default App
