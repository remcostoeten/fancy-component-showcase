import React from "react";

export default function NotificationCard() {
  return (
    <div className="bg-surface-100 border border-overlay rounded-md w-3/4 lg:w-1/2">
      <div className="space-y-6 py-6">
        <div className="flex px-8 space-x-8">
          <div className="mt-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="sbuiIcon animateSpin"
            >
              <line x1="12" y1="2" x2="12" y2="6"></line>
              <line x1="12" y1="18" x2="12" y2="22"></line>
              <line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line>
              <line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line>
              <line x1="2" y1="12" x2="6" y2="12"></line>
              <line x1="18" y1="12" x2="22" y2="12"></line>
              <line x1="4.93" y1="19.07" x2="7.76" y2="16.24"></line>
              <line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line>
            </svg>
          </div>
          <div className="space-y-1">
            <p>Restoration in progress</p>
            <p className="text-sm text-foreground-light">
              Restoration can take from a few minutes up to several hours
              depending on the size of your database. Your project will be
              offline while the restoration is running.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
