import { Route, Routes } from "react-router-dom";
import { TasksPage } from "./pages/TasksPage/TasksPage";
import { TaskWorkspacePage } from "./pages/TaskWorkspacePage/TaskWorkspacePage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<TasksPage />} />
      <Route path="/task/:taskId" element={<TaskWorkspacePage />} />
    </Routes>
  );
}

export default App;
