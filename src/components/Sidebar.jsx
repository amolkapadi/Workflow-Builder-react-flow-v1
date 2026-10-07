function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <h2>Nodes</h2>
        <p>Drag nodes to build your workflow</p>
      </div>
      <div className="node-list">
        <div className="sidebar-node">
          <div className="sidebar-node-icon start-icon">▶</div>
          <div>
            <strong>Start</strong>
            <span>Workflow trigger</span>
          </div>
        </div>
        <div className="sidebar-node">
          <div className="sidebar-node-icon approval-icon">✓</div>
          <div>
            <strong>Approval</strong>
            <span>Approval step</span>
          </div>
        </div>
        <div className="sidebar-node">
          <div className="sidebar-node-icon condition-icon">?</div>
          <div>
            <strong>Condition</strong>
            <span>Decision step</span>
          </div>
        </div>
        <div className="sidebar-node">
          <div className="sidebar-node-icon action-icon">⚡</div>
          <div>
            <strong>Action</strong>
            <span>Perform an action</span>
          </div>
        </div>
        <div className="sidebar-node">
          <div className="sidebar-node-icon email-icon">@</div>
          <div>
            <strong>Email</strong>
            <span>Send notification</span>
          </div>
        </div>
        <div className="sidebar-node">
          <div className="sidebar-node-icon end-icon">✓</div>
          <div>
            <strong>End</strong>
            <span>Workflow complete</span>
          </div>
        </div>
      </div>
      <div className="sidebar-help">
        <div className="help-icon">i</div>
        <div>
          <strong>Quick tip</strong>
          <p>Connect nodes by dragging from one handle to another.</p>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;