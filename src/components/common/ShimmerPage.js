import React from "react";
import "../../styles/shimmer.css";

const ShimmerLine = ({ width = "100%", height = 14, rounded = 6, className = "" }) => (
  <div
    className={`shimmer-line ${className}`}
    style={{ width, height, borderRadius: rounded }}
  />
);

const ShimmerBlock = ({ rows = 4 }) => (
  <div className="shimmer-block">
    <ShimmerLine width="60%" height={24} rounded={8} className="mb-3" />
    <ShimmerLine width="35%" height={16} rounded={6} className="mb-4" />
    {Array.from({ length: rows }).map((_, i) => (
      <ShimmerLine key={i} width={`${90 - i * 8}%`} className="mb-2" />
    ))}
  </div>
);

const ShimmerPage = () => (
  <div className="shimmer-page">
    <div className="shimmer-container">
      <div className="shimmer-header">
        <ShimmerLine width={48} height={48} rounded={8} />
        <div className="flex-1">
          <ShimmerLine width="45%" height={22} className="mb-2" />
          <ShimmerLine width="30%" height={14} />
        </div>
        <ShimmerLine width={100} height={36} rounded={8} />
      </div>

      <div className="shimmer-content">
        <div className="shimmer-main">
          <ShimmerBlock rows={6} />
          <ShimmerBlock rows={5} />
        </div>
        <div className="shimmer-aside">
          <ShimmerLine width="70%" height={18} className="mb-3" />
          {Array.from({ length: 5 }).map((_, i) => (
            <ShimmerLine key={i} width="100%" height={48} rounded={10} className="mb-3" />
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default ShimmerPage;

