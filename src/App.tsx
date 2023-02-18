import Content from "./Components/Content";
import MyContenxtProvider from "./Components/Context/Provider";
import Header from "./Components/Header";

function App() {
  return (
    <MyContenxtProvider>
      <div className="h-full text-center p-2 overflow-y-auto">
        <Header />
        <Content />
      </div>
    </MyContenxtProvider>
  );
}

export default App;
