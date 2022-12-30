import './App.css';
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Content from './components/Content'

function App() {
  return (
    <div>
      <Navbar />
      <div className="body">
        <Sidebar />
        <Content />
      </div>
    </div>
  );
}

export default App;
