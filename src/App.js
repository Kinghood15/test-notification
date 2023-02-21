import './messaging_init_in_sw';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <ToastContainer autoClose={8000} />
    </div>
  );
}

export default App;
