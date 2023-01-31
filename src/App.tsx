import { Routes, Route } from 'react-router-dom';

import CreateProjects from './pages/CreateProjects';
import ProjectDetail from './components/ProjectDetail';
import Main from './pages/Main';
import ProjectsPage from "./pages/ProjectsPage";
import DashBoard from './components/DashBoard';

function App() {
  return (
    <div className="App">
      <DashBoard />
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/projects" element={<ProjectsPage />}></Route>
        <Route path="/projects/:id" element={<ProjectDetail />}></Route>
        <Route path="/create" element={<CreateProjects />}></Route>
      </Routes>
    </div>
  );
}

export default App;
