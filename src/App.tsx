import { Router, Routes } from './router';
import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
import Resume from './pages/Resume';
import CoquitoCaseStudy from './pages/CoquitoCaseStudy';
import CulturalExchangeCaseStudy from './pages/CulturalExchangeCaseStudy';
import ClosetCrushCaseStudy from './pages/ClosetCrushCaseStudy';
import ProfessorOnboardingCaseStudy from './pages/ProfessorOnboardingCaseStudy';

export default function App() {
  return (
    <Router>
      <Routes
        routes={[
          { path: '/', element: <Home /> },
          { path: '/about', element: <AboutMe /> },
          { path: '/resume', element: <Resume /> },
          { path: '/work/coquito', element: <CoquitoCaseStudy /> },
          { path: '/work/cultural-exchange', element: <CulturalExchangeCaseStudy /> },
          { path: '/work/closet-crush', element: <ClosetCrushCaseStudy /> },
          { path: '/work/professor-onboarding', element: <ProfessorOnboardingCaseStudy /> },
        ]}
      />
    </Router>
  );
}
