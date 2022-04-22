import "./App.css";
import Box from "./timebox";
function App() {
  console.log(new Date().toLocaleTimeString());
  return (
    <div className="bg-black">
      <Box time={new Date().toLocaleTimeString()} />
    </div>
  );
}

export default App;
