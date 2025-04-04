import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import styled from 'styled-components';
import Login from "./Components/Login";
import Welcome from "./Components/Welcome";
import Dashboard from "./Components/Dashboard";
import Sidebar from "./Components/Navbar/Sidebar";
import TestDetailsForm from './Components/TestDetails';
import PatientForm from './Components/PatientForm';
import SampleCollectorForm from './Components/SampleCollectorForm';
import PatientDetails from './Components/PatientDetails';
import DoctorForm from './Components/DoctorForm';
import Invoice from './Components/Invoice';
import PatientList from './Components/PatientList';
import SampleStatusUpdate from './Components/SampleStatusUpdate';
import ClinicalName from './Components/ClinicalName';
import PatientOverview from './Components/PatientOverview';
import CashTally from './Components/CashTally';
import SampleStatus from './Components/SampleStatus';
import PrintBill from './Components/PrintBill';
import TestForm from './Components/TestForm';
import BarcodeGeneration from './Components/BarcodeGeneration';
import BarcodeTestDetails from './Components/BarcodeTestDetails';
import './App.css';
import RefBy from './Components/RefBy';
import PatientOverallReport from './Components/PatientOverallReport';
import SalesVisitLog from './Components/SalesVisitLog';
import SalesVisitLogReport from './Components/SalesVisitLogReport';
import SalesReport from './Components/SalesReport';
import TestEdit from './Components/TestEdit';
import LogisticManagementAdmin from './Components/LogisticManagementAdmin';
import LogisticManagementApproval from './Components/LogisticManagementApproval';
import PatientEditForm from './Components/PatientEditForm';
import MIS from './Components/MIS';
import SalesVisitDashboard from './Components/SalesVisitDashboard';
import Invoicemain from './Components/Invoicemain';
import SalesDashboard from './Components/SalesDashboard';
import LogisticsDashboard from './Components/LogisticsDashboard';
import LogisticsTAT from './Components/LogisticsTAT';
import Refund from './Components/Refund';
import PatientBilling from './Components/PatientBilling';
import B2B from './Components/B2B';
import B2BApproval from './Components/B2BApproval';
import B2BFinalApproval from './Components/B2BFinalApproval';
import Cancellation from './Components/Cancellation';
import PatientTAT from './Components/PatientTAT';
import Admin from "./Components/Admin";
import EmployeeList from "./Components/EmployeeList";
import Profile from "./Components/Profile";

// Wrapper for the main content to shift it to the right of the sidebar
const ContentWrapper = styled.div`
  margin-top: 15px;
  padding: 20px;
  margin-left: 260px;

  @media (max-width: 1024px) {
    margin-left: 200px;
  }

  @media (max-width: 768px) {
    margin-left: 100px;
  }

  @media (max-width: 480px) {
    margin-left: 20px;
  }
`;

function App() {
  const location = useLocation();
  const isLoginPage = location.pathname === "/";

  return (
    <>
    {!isLoginPage && <Sidebar />}
    {isLoginPage ? (
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    ) : (
      <ContentWrapper>
        <Routes>
          <Route path="/Welcome" element={<Welcome />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/PatientForm" element={<PatientForm />} />
          <Route path="/SampleCollectorForm" element={<SampleCollectorForm />} />
          <Route path="/ClinicalName" element={<ClinicalName />} />
          <Route path="/RefBy" element={<RefBy />} />
          <Route path="/TestForm" element={<TestForm />} />
          <Route path="/PrintBill" element={<PrintBill />} />
          <Route path="/SampleStatus" element={<SampleStatus />} />
          <Route path="/BarcodeGeneration" element={<BarcodeGeneration />} />
          <Route path="/BarcodeTestDetails" element={<BarcodeTestDetails />} />
          <Route path="/PatientOverview" element={<PatientOverview />} />
          <Route path="/PatientDetails" element={<PatientDetails />} />
          <Route path="/TestDetails" element={<TestDetailsForm />} />
          <Route path="/SampleStatusUpdate" element={<SampleStatusUpdate />} />
          <Route path="/TestEdit" element={<TestEdit />} />
          <Route path="/PatientList" element={<PatientList />} />
          <Route path="/DoctorForm" element={<DoctorForm />} />
          <Route path="/Invoice" element={<Invoicemain />} />
          <Route path="/CashTally" element={<CashTally />} />
          <Route path="/PatientOverallReport" element={<PatientOverallReport />} />
          <Route path="/SalesVisitDashboard" element={<SalesVisitDashboard />} />
          <Route path="/SalesVisitLog" element={<SalesVisitLog />} />
          <Route path="/SalesVisitLogReport" element={<SalesVisitLogReport />} />
          <Route path="/SalesReport" element={<SalesReport />} />
          <Route path="/LogisticManagementAdmin" element={<LogisticManagementAdmin />} />
          <Route path="/LogisticManagementApproval" element={<LogisticManagementApproval />} />
          <Route path="/PatientEditForm" element={<PatientEditForm />} />
          <Route path="/MIS" element={<MIS />} />
          <Route path="/SalesDashboard" element={<SalesDashboard />} />
          <Route path="/LogisticsDashboard" element={<LogisticsDashboard />} />
          <Route path="/LogisticsTAT" element={<LogisticsTAT />} />
          <Route path="/Refund" element={<Refund />} />
          <Route path="/Cancellation" element={<Cancellation />} />
          <Route path="/PatientBilling" element={<PatientBilling />} />
          <Route path="/B2B" element={<B2B />} />
          <Route path="/B2BApproval" element={<B2BApproval />} />
          <Route path="/B2BFinalApproval" element={<B2BFinalApproval />} />
          <Route path="/PatientTAT" element={<PatientTAT />} />
          <Route path="/Admin" element={<Admin/>} />
          <Route path="/EmployeeList" element={<EmployeeList/>} />
          <Route path="/Profile" element={<Profile/>} />
        </Routes>
      </ContentWrapper>
    )}
  </>
  );
}

export default App;