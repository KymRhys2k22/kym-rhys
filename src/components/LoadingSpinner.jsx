import React from "react";

function LoadingSpinner() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-100 z-50">
      <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-purple-500"></div>
      <span className="sr-only">Loading...</span>
    </div>
  );
}

export default LoadingSpinner;
