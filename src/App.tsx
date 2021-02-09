import './App.css';
import { hamletScriptsLarge } from "./data/hamlet-500k-lines";
import FastTable from "./components/FastTable";

function App() {
  const data = ({ index, key, style } : any) => (
   <div key={key+(index+1).toString()}>
    <div style={style} className="post">
      <p className={index % 2 === 0 ? 'even': 'odd'}>{hamletScriptsLarge[index]}    ---   line#{index+1}</p>
    </div>
   </div>
  );
  return (
    <FastTable 
      width={1200}
      height={700}
      data={data}
      rowCount={hamletScriptsLarge.length}
      rowHeight={20}
    />);
}

export default App;
