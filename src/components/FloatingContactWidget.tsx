import React, { useState, useEffect, useRef } from 'react';
import { PhoneCall, X } from 'lucide-react';

export default function FloatingContactWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const widgetRef = useRef<HTMLDivElement>(null);

  // Close when clicking anywhere outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (widgetRef.current && !widgetRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div ref={widgetRef} className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Pop-up Icons for WhatsApp and Telegram */}
      {isOpen && (
        <div className="flex flex-col items-end gap-3 mb-3 animate-in fade-in slide-in-from-bottom-5 duration-200">
          {/* Telegram Button */}
          <div className="flex items-center gap-2 group">
            <span className="px-2.5 py-1 text-xs font-semibold text-white bg-slate-900/90 backdrop-blur-md rounded-lg shadow-md border border-slate-700/80 transition-opacity">
              Telegram
            </span>
            <a
              href="https://t.me/ahmadshibli"
              target="_blank"
              rel="noreferrer"
              onClick={() => setIsOpen(false)}
              aria-label="Connect directly on Telegram"
              className="flex items-center justify-center w-13 h-13 rounded-full bg-[#229ED9] hover:bg-[#1e8bc0] text-white shadow-xl shadow-sky-950/40 hover:scale-110 active:scale-95 transition-all duration-200 cursor-pointer"
            >
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM16.64 8.8C16.49 10.38 15.84 14.22 15.51 15.99C15.37 16.74 15.09 16.99 14.83 17.02C14.25 17.07 13.81 16.64 13.25 16.27C12.37 15.69 11.87 15.33 11.02 14.77C10.03 14.12 10.67 13.76 11.24 13.18C11.39 13.03 13.95 10.7 14 10.49C14.01 10.44 14.01 10.37 13.96 10.31C13.9 10.26 13.82 10.28 13.75 10.29C13.66 10.31 12.26 11.24 9.53 13.08C9.13 13.35 8.77 13.49 8.45 13.48C8.09 13.47 7.41 13.28 6.9 13.11C6.27 12.91 5.78 12.8 5.82 12.45C5.84 12.27 6.09 12.09 6.57 11.9C9.49 10.63 11.43 9.79 12.4 9.38C15.18 8.22 15.75 8.02 16.13 8.02C16.21 8.02 16.4 8.04 16.52 8.14C16.62 8.22 16.65 8.33 16.66 8.41C16.65 8.47 16.67 8.65 16.64 8.8Z" />
              </svg>
            </a>
          </div>

          {/* WhatsApp Button */}
          <div className="flex items-center gap-2 group">
            <span className="px-2.5 py-1 text-xs font-semibold text-white bg-slate-900/90 backdrop-blur-md rounded-lg shadow-md border border-slate-700/80 transition-opacity">
              WhatsApp
            </span>
            <a
              href="https://wa.me/8801873818927"
              target="_blank"
              rel="noreferrer"
              onClick={() => setIsOpen(false)}
              aria-label="Connect directly on WhatsApp"
              className="flex items-center justify-center w-13 h-13 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white shadow-xl shadow-emerald-950/40 hover:scale-110 active:scale-95 transition-all duration-200 cursor-pointer"
            >
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.63C8.75 21.41 10.38 21.82 12.04 21.82C17.5 21.82 21.95 17.37 21.95 11.91C21.95 6.45 17.5 2 12.04 2ZM12.04 20.15C10.56 20.15 9.11 19.76 7.85 19.01L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.8 13.47 3.8 11.91C3.8 7.37 7.5 3.67 12.04 3.67C16.58 3.67 20.28 7.37 20.28 11.91C20.28 16.45 16.58 20.15 12.04 20.15ZM16.56 14.39C16.31 14.26 15.09 13.66 14.86 13.58C14.64 13.5 14.47 13.46 14.31 13.71C14.14 13.96 13.67 14.51 13.52 14.68C13.38 14.84 13.23 14.87 12.98 14.74C12.73 14.61 11.93 14.35 10.98 13.5C10.24 12.84 9.74 12.02 9.6 11.77C9.45 11.52 9.58 11.39 9.71 11.26C9.82 11.15 9.96 10.97 10.09 10.82C10.21 10.68 10.26 10.57 10.34 10.4C10.42 10.24 10.38 10.09 10.32 9.97C10.26 9.84 9.76 8.62 9.56 8.11C9.36 7.62 9.15 7.69 9 7.68C8.86 7.67 8.7 7.67 8.53 7.67C8.36 7.67 8.09 7.73 7.86 7.98C7.63 8.23 7 8.82 7 10.02C7 11.22 7.88 12.38 8 12.55C8.13 12.71 9.73 15.18 12.19 16.24C12.78 16.49 13.23 16.64 13.59 16.76C14.18 16.95 14.71 16.92 15.14 16.86C15.61 16.79 16.59 16.27 16.79 15.69C17 15.11 17 14.61 16.93 14.51C16.87 14.41 16.71 14.35 16.46 14.22L16.56 14.39Z" />
              </svg>
            </a>
          </div>
        </div>
      )}

      {/* Main Floating Call Toggle Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Close messaging menu" : "Open WhatsApp and Telegram direct connect"}
        className="relative group flex items-center justify-center w-14 h-14 sm:w-15 sm:h-15 rounded-full bg-[#27AE60] hover:bg-[#219653] text-white shadow-2xl shadow-emerald-950/60 transition-all duration-300 hover:scale-105 active:scale-95 focus:outline-none focus:ring-4 focus:ring-emerald-400/40 cursor-pointer"
      >
        {/* Subtle breathing ripple when closed */}
        {!isOpen && (
          <span className="absolute -inset-1 rounded-full bg-[#27AE60]/40 animate-ping pointer-events-none" />
        )}

        {/* Dynamic Icon: PhoneCall when closed, X when open */}
        {isOpen ? (
          <X className="w-6 h-6 relative z-10 transition-transform duration-200 rotate-90" />
        ) : (
          <PhoneCall className="w-6 h-6 relative z-10 animate-pulse transition-transform duration-200" />
        )}

        {/* Notification indicator dot */}
        {!isOpen && (
          <span className="absolute top-1 right-1 w-3.5 h-3.5 bg-emerald-300 border-2 border-slate-900 rounded-full" />
        )}
      </button>
    </div>
  );
}
