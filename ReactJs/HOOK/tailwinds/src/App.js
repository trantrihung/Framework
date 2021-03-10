import "./assets/main.css";

function App() {
  return (
    <div className="grid grid-cols-4 gap-4">
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img src="./images/1.jpg" className="w-full" alt="hinh anh" />
        <button className="btn-blue">Click me</button>
      </div>
    </div>
  );
}

export default App;
