import { Route, Routes } from "react-router";

import MainLayout from "./Layouts/MainLayout";
import Home from "./pages/Home";
import RatingPage from "./pages/rating/RatingPage";
import TopSrudentsPage from "./pages/TopStudentsPage";
import BestGroupsPage from "./pages/BestGroupsPage";
import AuthLayout from "./Layouts/AuthLayout";
import ControlPanel from "./Layouts/ControlPanelLayout";
import { Login } from "./pages/Login";
import { AddUsers } from "./components/AddUsers";

import "./App.scss";
import StepperTeacher from "./components/Stepper/StepperTeacher";
import { useEffect } from "react";
import { fetchCheckAuth } from "./redux/slice/authMe";
import { useSelector } from "react-redux";
import { selectIsAuth } from "./redux/slice/authMe";
import { useAppDispatch } from "./redux/store";
import ElectronicJournal from "./pages/journal/JournalPage";

function App() {
  const dispatch = useAppDispatch();
  const isAuth = useSelector(selectIsAuth);
  const token = window.localStorage.getItem("token");

  useEffect(() => {
    dispatch(fetchCheckAuth());
  }, []);

  const students = ['Student 1', 'Student 2', 'Student 3']; // Ваши студенты
  const dates = ['2023-08-14', '2023-08-15', '2023-08-16']; // Ваши даты

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/rating" element={<RatingPage />} />
          <Route
            path="/journal"
            element={      <ElectronicJournal students={students} dates={dates} />}
          />
          <Route path="/top-students" element={<TopSrudentsPage />} />
          <Route path="/best-groups" element={<BestGroupsPage />} />
          <Route path="/control-panel" element={<ControlPanel />}>
            <Route path="assign-teachers" element={<StepperTeacher />} />
            <Route path="add-users" element={<AddUsers />} />
          </Route>
        </Route>

        <Route path="/" element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
