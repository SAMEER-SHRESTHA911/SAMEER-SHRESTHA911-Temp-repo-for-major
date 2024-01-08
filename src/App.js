import Header from "./Header";
import './style.css'
import FormContent from "./FormContent";
function App() {
  return (
    <div className = "mainContainaer">
      <div className="headingContainer">
        <Header/>
      </div>
      <FormContent/>
    </div>
  );
}

export default App;
