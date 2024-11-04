import './App.css';
import ToDoHeader from './components/ToDoHeader/ToDoHeader';
import ToDoForm from './components/ToDoForm/ToDoForm';
// import ToDoList from './components/ToDoList/ToDoList';


function App() {
  return (
    <div className="App">
      <ToDoHeader />
      <ToDoForm />
      {/* <ToDoList /> */}
    </div>
  );
}

export default App;
