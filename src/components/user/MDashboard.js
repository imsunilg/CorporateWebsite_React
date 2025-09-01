import React from "react";
import MUserNavbar from "../common/mUserNavbar";
import UserFooter from "../common/userFooter";

export default function MDashboard() {
  return (
    <div className="app app-user">
      <MUserNavbar />
      <main className="container" style={{ paddingTop: 72, paddingBottom: 24 }}>
        <h1 className="h5" style={{ marginBottom: 12 }}>My Dashboard</h1>
        <div className="row g-3">
          <div className="col-6">
            <div className="card shadow-sm">
              <div className="card-body p-3">
                <div className="small text-muted">Policies</div>
                <div className="h6 mb-0">12 Active</div>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="card shadow-sm">
              <div className="card-body p-3">
                <div className="small text-muted">Claims</div>
                <div className="h6 mb-0">3 In Progress</div>
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="card shadow-sm">
              <div className="card-body p-3">
                <div className="small text-muted mb-1">Recent Activity</div>
                <ul className="mb-0" style={{ paddingLeft: 18 }}>
                  <li>Policy IL-123 renewed</li>
                  <li>Claim CL-456 updated</li>
                  <li>New document uploaded</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
      <UserFooter />
    </div>
  );
}

