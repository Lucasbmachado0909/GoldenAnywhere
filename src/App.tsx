// src/App.tsx
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { ProgressProvider } from './contexts/ProgressContext';
import { ProtectedRoute } from './modules/auth/components/ProtectedRoute';

// Importando páginas públicas
import LandingPage from './modules/common/pages/LandingPage';
import LoginPage from './modules/auth/pages/LoginPage';
import RegisterPage from './modules/auth/pages/RegisterPage';

// Importando páginas protegidas
import HomePage from './modules/common/pages/HomePage';
import DashboardPage from './modules/common/pages/DashboardPage';
import PronounVerbLesson from './modules/lessons/pages/PronounVerbLesson';
import Lesson2 from './modules/lessons/pages/Lesson2';
import Lesson3 from './modules/lessons/pages/Lesson3';
import Lesson4 from './modules/lessons/pages/Lesson4';
import Lesson5 from './modules/lessons/pages/Lesson5'; // 🆕 NOVO IMPORT - LIÇÃO 5
import ExercisePage from './modules/exercises/pages/ExercisePage';

// Importando o layout
import Layout from './modules/common/components/Layout';

function App() {
  return (
    <AuthProvider>
      <ProgressProvider>
        <Router>
          <Routes>
            {/* Rota pública principal - Landing Page */}
            <Route path="/" element={<LandingPage />} />
            
            {/* Rotas públicas de autenticação */}
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            
            {/* Rotas protegidas da aplicação */}
            <Route path="/app" element={
              <ProtectedRoute>
                <Layout>
                  <Outlet />
                </Layout>
              </ProtectedRoute>
            }>
              <Route index element={<HomePage />} />
              <Route path="dashboard" element={<DashboardPage />} />
              
              {/* Rotas das lições */}
              <Route path="lessons/lesson1" element={<PronounVerbLesson />} />
              <Route path="lessons/lesson2" element={<Lesson2 />} />
              <Route path="lessons/lesson3" element={<Lesson3 />} />
              <Route path="lessons/lesson4" element={<Lesson4 />} />
              <Route path="lessons/lesson5" element={<Lesson5 />} /> {/* 🆕 ATUALIZADO - LIÇÃO 5 ATIVA */}
              <Route path="lessons/lesson6" element={<div>Lição 6 em desenvolvimento</div>} />
              
              <Route path="exercises/:exerciseId" element={<ExercisePage />} />
            </Route>
          </Routes>
        </Router>
      </ProgressProvider>
    </AuthProvider>
  );
}

export default App;