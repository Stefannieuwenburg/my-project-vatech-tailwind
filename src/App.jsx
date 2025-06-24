import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';

const Layout = lazy(() => import('./layout/Layout'));
const Hero = lazy(() => import('./pages/Hero'));
const GrowBussines = lazy(() => import('./pages/GrowBussines'));
const About = lazy(() => import('./pages/About'));
const Services = lazy(() => import('./pages/Services'));
const Testimonials = lazy(() => import('./pages/Testimonials'));
const WorkPlanning = lazy(() => import('./pages/WorkPlanning'));
const Action = lazy(() => import('./pages/Action'));
const ContactPage = lazy(() => import('./pages/ContactPage'));


function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <Hero />
                <GrowBussines />
                <About />
                <Services />
                <Testimonials />
                <WorkPlanning  />
                <Action />
              </Layout>
            }
          />
          <Route
            path="/contact"
            element={
              <Layout>
                <ContactPage />
              </Layout>
            }
          />
        </Routes>
      </Router>
    </Suspense>
  );
}

export default App;


