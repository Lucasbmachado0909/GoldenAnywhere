import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import { ProgressProvider } from './contexts/ProgressContext';

// Importando páginas
import HomePage from './modules/common/pages/HomePage';
import DashboardPage from './modules/common/pages/DashboardPage';
import PronounVerbLesson from './modules/lessons/pages/PronounVerbLesson';
import ExercisePage from './modules/exercises/pages/ExercisePage';

// Importando o layout
import Layout from './modules/common/components/Layout';

function App() {
  return (
    <ProgressProvider>
      <Router>
        <Routes>
          <Route path="/" element={
            <Layout>
              <Outlet />
            </Layout>
          }>
            <Route index element={<HomePage />} />
            <Route path="dashboard" element={<DashboardPage />} />
            <Route path="lessons/lesson1" element={<PronounVerbLesson />} />
            <Route path="exercises/:exerciseId" element={<ExercisePage />} />
          </Route>
        </Routes>
      </Router>
    </ProgressProvider>
  );
}

export default App;