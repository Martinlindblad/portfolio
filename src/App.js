import Profile from './components/profile'
import Experience from './components/experience'
import './scss/standard/App.scss';
import Japan from './components/japan';
 
function App() {
  return (
    <div className="App">
      <Profile />
      <Experience />
      <Japan />
    </div>
  );
}

export default App;
