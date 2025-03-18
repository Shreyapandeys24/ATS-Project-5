import Nav from "./components/Nav";
import InputField from "./components/Input";
function App() {
  return (
    <>
      <Nav name="Aamir Ullah Khan" position="Account" />

      <div>
        <InputField label="Name" />
        <InputField label="Email" />
        <InputField label="Password" />
      </div>
    </>
  );
}

export default App;
