import './App.css';

import PlanCons from './layouts/PlanCons/PlanCons';
import Header from './components/header/Header';

function App() {
    return (
        <div className="App">
            <Header
                icon="ic:round-local-offer"
                color="#FFFFFF"
                text="50% discount only valid for 00:15:49"
            />
            <PlanCons />
        </div>
    );
}

export default App;
