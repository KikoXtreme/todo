import './App.css';
import Header from './components/Header/Header';
import ToDoForm from './components/ToDoForm/ToDoForm';
// import ToDoList from './components/ToDoList/ToDoList';


function App() {
  return (
    <div className="App">
      <Header />
      <ToDoForm />
      {/* <ToDoList /> */}
    </div>
  );
}

export default App;
