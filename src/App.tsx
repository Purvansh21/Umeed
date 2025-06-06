import React, { useState, useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import RouteGuard from "@/components/layout/RouteGuard";
import LoadingScreen from "@/components/ui/loading-screen";
import ResourceSidebar from "@/components/layout/ResourceSidebar";

// Landing Page
import LandingPage from "./pages/LandingPage";

// Auth Page
import Login from "./pages/Login";

// Admin Pages
import AdminDashboard from "./pages/admin/Index";
import UserManagement from "./pages/admin/Users";
import Analytics from "./pages/admin/Analytics";
import Settings from "./pages/admin/Settings";
import AuditLogs from "./pages/admin/AuditLogs";
import Reports from "./pages/admin/Reports";
import Announcements from "./pages/admin/Announcements";
import AdminVolunteerOpportunities from "./pages/admin/VolunteerOpportunities";
import AdminTrainingResources from "./pages/admin/TrainingResources";

// Staff Pages
import StaffDashboard from "./pages/staff/Index";
import VolunteersManagement from "./pages/staff/Volunteers";
import BeneficiariesManagement from "./pages/staff/Beneficiaries";
import ResourcesManagement from "./pages/staff/Resources";
import TasksManagement from "./pages/staff/Tasks";
import StaffReports from "./pages/staff/Reports";
import UrgentRequestsPage from "./pages/staff/UrgentRequests";
import StaffAppointments from "./pages/staff/Appointments";
import StaffServiceRequests from "./pages/staff/ServiceRequests";
import StaffAnnouncements from "./pages/staff/Announcements";

// Volunteer Pages
import VolunteerDashboard from "./pages/volunteer/Index";
import VolunteerSchedule from "./pages/volunteer/Schedule";
import VolunteerOpportunities from "./pages/volunteer/Opportunities";
import VolunteerBeneficiaries from "./pages/volunteer/Beneficiaries";
import VolunteerResources from "./pages/volunteer/Resources";
import VolunteerAchievements from "./pages/volunteer/Achievements";
import VolunteerAnnouncements from "./pages/volunteer/Announcements";

// Beneficiary Pages
import BeneficiaryDashboard from "./pages/beneficiary/Index";
import BeneficiaryServices from "./pages/beneficiary/Services";
import BeneficiaryAppointments from "./pages/beneficiary/Appointments";
import BeneficiaryResources from "./pages/beneficiary/Resources";
import BeneficiaryTracking from "./pages/beneficiary/Tracking";
import BeneficiaryAnnouncements from "./pages/beneficiary/Announcements";

// Shared Pages
import Profile from "./pages/shared/Profile";
import NotFound from "./pages/NotFound";

// Configure QueryClient with optimized settings
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
      staleTime: 5 * 60 * 1000, // 5 minutes
    },
  },
});

// Declare the global window property for TypeScript
declare global {
  interface Window {
    openResourceSidebar: () => void;
  }
}

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [resourceSidebarOpen, setResourceSidebarOpen] = useState(false);

  // Make the resource sidebar state available globally through context
  // so it can be opened from any component
  React.useEffect(() => {
    window.openResourceSidebar = () => setResourceSidebarOpen(true);
  }, []);

  useEffect(() => {
    // Simulate checking resources and initial load
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <Toaster />
        <Sonner />
        <ResourceSidebar 
          isOpen={resourceSidebarOpen} 
          onClose={() => setResourceSidebarOpen(false)}
          onSuccess={() => console.log("Resource added successfully")} 
        />
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />
            
            {/* Landing Page Route */}
            <Route path="/" element={<LandingPage />} />
            
            {/* Admin Routes */}
            <Route
              path="/admin"
              element={
                <RouteGuard>
                  <AdminDashboard />
                </RouteGuard>
              }
            />
            <Route
              path="/admin/users"
              element={
                <RouteGuard>
                  <UserManagement />
                </RouteGuard>
              }
            />
            <Route
              path="/admin/analytics"
              element={
                <RouteGuard>
                  <Analytics />
                </RouteGuard>
              }
            />
            <Route
              path="/admin/audit-logs"
              element={
                <RouteGuard>
                  <AuditLogs />
                </RouteGuard>
              }
            />
            <Route
              path="/admin/reports"
              element={
                <RouteGuard>
                  <Reports />
                </RouteGuard>
              }
            />
            <Route
              path="/admin/settings"
              element={
                <RouteGuard>
                  <Settings />
                </RouteGuard>
              }
            />
            <Route
              path="/admin/announcements"
              element={
                <RouteGuard>
                  <Announcements />
                </RouteGuard>
              }
            />
            <Route
              path="/admin/volunteer-opportunities"
              element={
                <RouteGuard>
                  <AdminVolunteerOpportunities />
                </RouteGuard>
              }
            />
            <Route
              path="/admin/training-resources"
              element={
                <RouteGuard>
                  <AdminTrainingResources />
                </RouteGuard>
              }
            />
            <Route
              path="/admin/profile"
              element={
                <RouteGuard>
                  <Profile />
                </RouteGuard>
              }
            />
            
            {/* Staff Routes */}
            <Route
              path="/staff"
              element={
                <RouteGuard>
                  <StaffDashboard />
                </RouteGuard>
              }
            />
            <Route
              path="/staff/volunteers"
              element={
                <RouteGuard>
                  <VolunteersManagement />
                </RouteGuard>
              }
            />
            <Route
              path="/staff/beneficiaries"
              element={
                <RouteGuard>
                  <BeneficiariesManagement />
                </RouteGuard>
              }
            />
            <Route
              path="/staff/resources"
              element={
                <RouteGuard>
                  <ResourcesManagement />
                </RouteGuard>
              }
            />
            <Route
              path="/staff/tasks"
              element={
                <RouteGuard>
                  <TasksManagement />
                </RouteGuard>
              }
            />
            <Route
              path="/staff/reports"
              element={
                <RouteGuard>
                  <StaffReports />
                </RouteGuard>
              }
            />
            <Route
              path="/staff/urgent-requests"
              element={
                <RouteGuard>
                  <UrgentRequestsPage />
                </RouteGuard>
              }
            />
            <Route
              path="/staff/appointments"
              element={
                <RouteGuard>
                  <StaffAppointments />
                </RouteGuard>
              }
            />
            <Route
              path="/staff/service-requests"
              element={
                <RouteGuard>
                  <StaffServiceRequests />
                </RouteGuard>
              }
            />
            <Route
              path="/staff/announcements"
              element={
                <RouteGuard>
                  <StaffAnnouncements />
                </RouteGuard>
              }
            />
            <Route
              path="/staff/profile"
              element={
                <RouteGuard>
                  <Profile />
                </RouteGuard>
              }
            />
            
            {/* Volunteer Routes */}
            <Route
              path="/volunteer"
              element={
                <RouteGuard>
                  <VolunteerDashboard />
                </RouteGuard>
              }
            />
            <Route
              path="/volunteer/schedule"
              element={
                <RouteGuard>
                  <VolunteerSchedule />
                </RouteGuard>
              }
            />
            <Route
              path="/volunteer/opportunities"
              element={
                <RouteGuard>
                  <VolunteerOpportunities />
                </RouteGuard>
              }
            />
            <Route
              path="/volunteer/beneficiaries"
              element={
                <RouteGuard>
                  <VolunteerBeneficiaries />
                </RouteGuard>
              }
            />
            <Route
              path="/volunteer/resources"
              element={
                <RouteGuard>
                  <VolunteerResources />
                </RouteGuard>
              }
            />
            <Route
              path="/volunteer/achievements"
              element={
                <RouteGuard>
                  <VolunteerAchievements />
                </RouteGuard>
              }
            />
            <Route
              path="/volunteer/announcements"
              element={
                <RouteGuard>
                  <VolunteerAnnouncements />
                </RouteGuard>
              }
            />
            <Route
              path="/volunteer/profile"
              element={
                <RouteGuard>
                  <Profile />
                </RouteGuard>
              }
            />
            
            {/* Beneficiary Routes */}
            <Route
              path="/beneficiary"
              element={
                <RouteGuard>
                  <BeneficiaryDashboard />
                </RouteGuard>
              }
            />
            <Route
              path="/beneficiary/services"
              element={
                <RouteGuard>
                  <BeneficiaryServices />
                </RouteGuard>
              }
            />
            <Route
              path="/beneficiary/appointments"
              element={
                <RouteGuard>
                  <BeneficiaryAppointments />
                </RouteGuard>
              }
            />
            <Route
              path="/beneficiary/tracking"
              element={
                <RouteGuard>
                  <BeneficiaryTracking />
                </RouteGuard>
              }
            />
            <Route
              path="/beneficiary/resources"
              element={
                <RouteGuard>
                  <BeneficiaryResources />
                </RouteGuard>
              }
            />
            <Route
              path="/beneficiary/announcements"
              element={
                <RouteGuard>
                  <BeneficiaryAnnouncements />
                </RouteGuard>
              }
            />
            <Route
              path="/beneficiary/profile"
              element={
                <RouteGuard>
                  <Profile />
                </RouteGuard>
              }
            />
            
            {/* Catch-all Route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </QueryClientProvider>
  );
};

export default App;
