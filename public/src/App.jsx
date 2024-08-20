import './App.css'
import Die from './Die'

function App () {

    return (
        <div>
            <h1>This is App.jsx</h1>
            <Die sides={4}/>
            <Die sides={6}/>
            <Die sides={8}/>
            <Die sides={10}/>
            <Die sides={10}/>
            <Die sides={12}/>
            <Die sides={20}/>
        </div>
    )
}

export default App