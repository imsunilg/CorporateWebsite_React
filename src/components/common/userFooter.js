import React from "react";

export default function UserFooter() {
  return (
    <footer style={{ background: '#f8f9fa', borderTop: '1px solid #e9ecef', marginTop: 24 }}>
      <div className="container" style={{ padding: '16px 0', fontSize: 14, color: '#6c757d' }}>
        <div>© {new Date().getFullYear()} ICICI Lombard. All rights reserved.</div>
      </div>
    </footer>
  );
}

