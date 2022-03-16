import './App.css';

import PlanCons from './layouts/PlanCons/PlanCons';
import StickyDiscount from './components/header/StickyDiscount';
import Header from './components/header/Header';
import SuccessStoriesLayout from './layouts/SuccessStories/SuccessStories';
import YogaLayout from './layouts/Yoga/Yoga';
import Accordion from './components/accordion/Accordion';

function App() {
    return (
        <div className="App">
            <StickyDiscount text="50% discount only valid for 00:15:49" />
            <Header />
            <PlanCons
                subtitle="Over 52 147 plans ordered."
                title="Get access to your yoga program now!"
            />
            <SuccessStoriesLayout />
            <YogaLayout />
            <Accordion />
            <PlanCons title="Start your yoga program today!" />
        </div>
    );
}

export default App;
