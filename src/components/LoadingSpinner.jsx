import React from "react";

function LoadingSpinner() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-100 z-50">

      <span className="loader"></span>
      <span className="sr-only">Loading...</span>
    </div>
  );
}

export default LoadingSpinner;
