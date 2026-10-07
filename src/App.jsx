import { useCallback, useState } from 'react';
import { ReactFlowProvider } from '@xyflow/react';
import Sidebar from './components/Sidebar';
import Toolbar from './components/Toolbar';
import WorkflowCanvas from './components/WorkflowCanvas';
import './App.css';

function App() {
  const [workflowName, setWorkflowName] = useState('Employee Leave Approval');

  return (
    <ReactFlowProvider>
      <div className="app">
        <Toolbar workflowName={workflowName} setWorkflowName={setWorkflowName} />
        <div className="workspace">
          <Sidebar />
          <WorkflowCanvas />
        </div>
      </div>
    </ReactFlowProvider>
  );
}

export default App;