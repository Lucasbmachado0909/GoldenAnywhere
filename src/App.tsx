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
              
              {/* Rotas das lições - mantendo o padrão que você já usa */}
              <Route path="lessons/lesson1" element={<PronounVerbLesson />} />
              <Route path="lessons/lesson2" element={<div>Lição 2 em desenvolvimento</div>} />
              <Route path="lessons/lesson3" element={<div>Lição 3 em desenvolvimento</div>} />
              <Route path="lessons/lesson4" element={<div>Lição 4 em desenvolvimento</div>} />
              <Route path="lessons/lesson5" element={<div>Lição 5 em desenvolvimento</div>} />
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