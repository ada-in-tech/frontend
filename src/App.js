import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { UserProvider } from './contexts/UserContext';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import HomePage from './pages/HomePage';
import SignUpPage from './pages/SignUpPage';
import LoginPage from './pages/LoginPage';
import EmailVerificationPage from './pages/EmailVerificationPage';
import NewcomerDashboard from './userTypes/newcomer/NewcomerDashboard';
import ProfessionalDashboard from './userTypes/professional/ProfessionalDashboard';
import CommunityDashboard from './userTypes/community/CommunityDashboard';
import CompanyDashboard from './userTypes/company/CompanyDashboard';
import AdminDashboard from './userTypes/admin/AdminDashboard';
import ProfilePage from './pages/ProfilePage';
import SettingsPage from './pages/SettingsPage';
import CoursePage from './pages/CoursePage';
import WorkshopPage from './pages/WorkshopPage';
import DetailedCoursePage from './pages/DetailedCoursePage';
import DetailedWorkshopPage from './pages/DetailedWorkshopPage';
import JobListingsPage from './pages/JobListingPage';
import FeedbackPage from './pages/FeedbackPage';
import ReportIncidentPage from './pages/ReportIncidentPage';
import ContentModerationPage from './pages/ContentModerationPage';
import ReportsFeedbackPage from './pages/ReportsFeedbackPage';
import CampaignCreationPage from './pages/CampaignCreationPage';
import CourseCreationPage from './pages/CourseCreationPage';
import JobPostingPage from './pages/JobPostingPage';
import ResourceCreationPage from './pages/ResourceCreationPage';
import MentorPage from './pages/MentorPage';
import NewcomerPage from './pages/NewcomerPage';
import CompanyPage from './pages/CompanyPage';
import CommunityPage from './pages/CommunityPage';
import CollaborationPage from './pages/CollaborationPage';
import ResourcePage from './pages/ResourcePage';
import WorkshopCreationPage from './pages/WorkshopCreationPage';

import './App.css';

function App() {
  return (
    < UserProvider>
      <Provider store={store}>
        <Router>
          <div className="App">
            <Header />

            <main>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/signup" element={<SignUpPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/verify-email" element={<EmailVerificationPage />} />
                <Route path="/newcomer-dashboard" element={<NewcomerDashboard />} />
                <Route path="/professional-dashboard" element={<ProfessionalDashboard />} />
                <Route path="/company-dashboard" element={<CompanyDashboard />} />
                <Route path="/community-dashboard" element={<CommunityDashboard />} />
                <Route path="/admin-dashboard" element={<AdminDashboard />} />
                <Route path="/profile" element={<ProfilePage />} />
                <Route path="/settings" element={<SettingsPage />} />
                <Route path="/courses" element={<CoursePage />} />
                <Route path="/workshops" element={<WorkshopPage />} />
                <Route path="/courses/:courseId" element={<DetailedCoursePage />} />
                <Route path="/workshops/:workshopId" element={<DetailedWorkshopPage />} />
                <Route path="/job-listings" element={<JobListingsPage />} />
                <Route path="/feedback" element={<FeedbackPage />} />
                <Route path="/report-incident" element={<ReportIncidentPage />} />
                <Route path="/content-moderation" element={<ContentModerationPage />} />
                <Route path="/reports-feedback" element={<ReportsFeedbackPage />} />
                <Route path="/campaign-creation" element={<CampaignCreationPage />} />
                <Route path="/course-creation" element={<CourseCreationPage />} />
                <Route path="/job-posting" element={<JobPostingPage />} />
                <Route path="/resource-creation" element={<ResourceCreationPage />} />
                <Route path="/mentor" element={<MentorPage />} />
                <Route path="/newcomer" element={<NewcomerPage />} />
                <Route path="/company" element={<CompanyPage />} />
                <Route path="/community" element={<CommunityPage />} />
                <Route path="/collaboration" element={<CollaborationPage />} />
                <Route path="/resources" element={<ResourcePage />} />
                <Route path="/workshop-creation" element={<WorkshopCreationPage />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </Provider>
    </UserProvider>
  );
}

export default App;
