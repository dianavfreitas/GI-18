// EASY  
// import React from 'react';
// import Counter from './counter';

// function App() {
//     return (
//         <div className="App">
//             <Counter />
//         </div>
//     );
// }

// export default App;



//MEDIUM
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './home';
import MovieDetail from './moviedetail';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/movie/:id" element={<MovieDetail />} />
            </Routes>
        </Router>
    );
}

export default App;


//HARD
// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import TaskList from './tasklist';
// import TaskDetail from './taskdetail';

// function App() {
//     return (
//         <Router>
//             <Routes>
//                 <Route path="/" element={<TaskList />} />
//                 <Route path="/task/:id" element={<TaskDetail />} />
//             </Routes>
//         </Router>
//     );
// }

// export default App;
