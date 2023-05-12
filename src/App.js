import './App.css';
import Card from './components/card';

const products = [
  { title: 'Cabbage', id: 1 },
  { title: 'Garlic', id: 2 },
  { title: 'Apple', id: 3 },
  { title: 'Apple', id: 3 },
  { title: 'Apple', id: 3 },
];

function App() {
  
  return (
    <div className="container">
      <nav className="nav">
        <h1>DNKB</h1>
      </nav>
      <div className="card--elements">
        {products.map((item) => (
          <Card key={item.id} name={item.title}/>
          ))
        }
      </div>
    </div>
  );
}

export default App;
