import { DemoForm, DemoFormDataType } from "components";
import "./App.css";

function App() {
  const handleFormSubmit = (data: DemoFormDataType) => {
    console.log(data);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Hook Form | Typescript | zod | i18n</h1>
      </header>
      <DemoForm onSubmit={handleFormSubmit} />
    </div>
  );
}

export default App;
