import Movies from "./components/Movies";
import Theme from "./styles/Theme";

function App() {
  return (
    <Theme>
      <h1>My React and Sanity App</h1>
      <p>Ole Martin Røsand</p>
      <Movies/>
    </Theme>
  );
}

export default App;