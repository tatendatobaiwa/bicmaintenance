import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import Chats from './pages/Chats/Chats';
import Reports from './pages/Reports/Reports';
import Profile from './pages/Profile/Profile';
import AboutUs from './pages/AboutUs/AboutUs';
import TermsOfUse from './pages/TermsOfUse/TermsOfUse';
import PrivacyPolicy from './pages/PrivacyPolicy/PrivacyPolicy';
import LandingPage from './pages/LandingPage/LandingPage'; 
import SignUp from './pages/SignUp/SignUp'; 
import SignIn from './pages/SignIn/SignIn'; 

const AppContent: React.FC = () => {
  const location = useLocation();

  const hideHeaderFooterRoutes = ['/', '/signup', '/signin'];

  const shouldHideHeaderFooter = hideHeaderFooterRoutes.includes(location.pathname);

  return (
    <div>
      {!shouldHideHeaderFooter && <Header />}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/home" element={<Home />} />
        <Route path="/chats" element={<Chats />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/termsofuse" element={<TermsOfUse />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
      </Routes>
      {!shouldHideHeaderFooter && <Footer />}
    </div>
  );
};

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
};

export default App;