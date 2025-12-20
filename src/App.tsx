import React, { useState } from "react";
import { StudentShell } from "./components/layout/StudentShell";
import { DashboardPage } from "./components/dashboard/DashboardPage";
import { EmergencyPage } from "./components/pages/EmergencyPage";
import { AIAssistantPage } from "./components/pages/AIAssistantPage";
import { ResourcesPage } from "./components/pages/ResourcesPage";
import { NotesPage } from "./components/pages/NotesPage";
import { HomeTutorPage } from "./components/pages/HomeTutorPage";
import { StudyPlannerPage } from "./components/pages/StudyPlannerPage";
import { StudyAnalyticsPage } from "./components/pages/StudyAnalyticsPage";

export default function App() {
  const [currentPage, setCurrentPage] = useState("ai-assistant");

  const renderPage = () => {
    switch (currentPage) {
      case "dashboard":
        return <DashboardPage onNavigate={setCurrentPage} />;
      case "emergency":
        return <EmergencyPage />;
      case "ai-assistant":
        return <AIAssistantPage onNavigate={setCurrentPage} />;
      case "resources":
        return <ResourcesPage />;
      case "notes":
        return <NotesPage />;
      case "home-tutor":
        return <HomeTutorPage />;
      case "study-planner":
        return <StudyPlannerPage />;
      case "analytics":
        return <StudyAnalyticsPage />;
      default:
        return <DashboardPage onNavigate={setCurrentPage} />;
    }
  };

  return (
    <StudentShell
      activePage={currentPage}
      onNavigate={setCurrentPage}
    >
      {renderPage()}
    </StudentShell>
  );
}