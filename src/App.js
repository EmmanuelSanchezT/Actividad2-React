import logo from './logo.svg';
import './App.css';
import Card from './Components/Card'
import Review from './Components/Review'

function App() {
  return (
    <div className="App">
    <Card
      imagen1="pidra2"
      titulo="Titanic Blue #3523"
      texto="Our Equilibrium collection promotes balance and calm."
      imagen2="iconethereum"
      ETH="0.067 ETH"
      imagen3="iconclock"
      days="5 days later"
      imagen4="julia"
      descripcion="Creation of"
      nombre="Julia Turn"/>
      <Card
      imagen1="imageequilibrium"
      titulo="Equilibrium #3419"
      texto="Itaque odio corporis temporibus! Hic laudantium placeat ex voluptatibus?"
      imagen2="iconethereum"
      ETH="0.052 ETH"
      imagen3="iconclock"
      days="4 days later"
      imagen4="mercedes"
      descripcion="Creation of"
      nombre="Mercedes Wilmore"/>
      <Card
      imagen1="piedra1"
      titulo="Water Gem #4123"
      texto=" Quod nisi, explicabo perspiciatis quae amet atque fuga facere rem necessitatibus perferendis excepturi."
      imagen2="iconethereum"
      ETH="0.041 ETH"
      imagen3="iconclock"
      days="3 days later"
      imagen4="ricardo"
      descripcion="Creation of"
      nombre="Ricardo Betancur"/>
    
    <Review 
      texto1="Me gustó mucho la pelicula, me la volvería a ver."
      nombre1="Otoniel"
      cargo="Comunicador Audiovisual"
      imagen="otoniel"/>
       <Review 
      texto1="Tengo muchísima emoción de probar este producto."
      nombre1="Paula Tirtón"
      cargo="Auxiliar Contable"
      imagen="paula"/>
       <Review 
      texto1="Que buen restaurante. Su atención y su comida estuvo excelente."
      nombre1="Evelin Zulma"
      cargo="Jefe de recursos humanos"
      imagen="eve"/>
    </div> 
  );
}
export default App;

/* `Hola mundo yo me llamo ${nombre} y estoy aprendiendo ${tema}!!!`
`La suma de 2+2 es ${2+2}` */