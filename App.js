// import logo from './logo.svg';
import './App.css';
import Navbar from './Componets/Navbar';
// It's a funcytion based 
function App() {
  return (
    <>
<Navbar title="Rohit's Blog" aboutText="About Rohit's Blog" aboutHome="Go to Home"/>
    </>
  );
}

export default App;


// Meaning of Props 

// if we want to use this navbar in various projects or various components and we just want to change the name and reaming will same we will use props 