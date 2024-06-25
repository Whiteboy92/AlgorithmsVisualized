import React from 'react';
import './App.css'; // Assuming you have global styles in App.css
import Sidebar from './Components/Sidebar/Sidebar';
import Footer from './Components/Footer/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BubbleSort from './Pages/Sorting/BubbleSortPage/BubbleSort';
import SelectionSort from './Pages/Sorting/SelectionSortPage/SelectionSort';
import InsertionSort from './Pages/Sorting/InsertionSortPage/InsertionSort';

const App: React.FC = () => {
  return (
    <Router>
      <div className="page">
        <div className="content">
          <div className="sidebarPane">
            <Sidebar />
          </div>
          <div className='sortingDisplay'>
            <Routes>
              <Route path="/bubble-sort" element={<BubbleSort />} />
              <Route path="/selection-sort" element={<SelectionSort />} />
              <Route path="/insertion-sort" element={<InsertionSort />} />
              {/* Add other valid routes here */}
            </Routes>
          </div>
        </div>
        <div className="footerPane">
          <Footer />
        </div>
      </div>
    </Router>
  );
};

export default App;
