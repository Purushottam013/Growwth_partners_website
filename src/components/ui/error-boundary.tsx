
import React, { Component, ErrorInfo, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    // Update state so the next render will show the fallback UI.
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
          <div className="text-center p-8 bg-white rounded-lg shadow-lg max-w-lg">
            <h1 className="text-3xl font-bold text-red-600 mb-4">Something went wrong</h1>
            <p className="text-lg text-gray-700 mb-6">
              We're sorry, but there was an error loading this page.
            </p>
            <p className="text-sm text-gray-500 mb-6">
              Error details: {this.state.error?.message || "Unknown error"}
            </p>
            <button 
              onClick={() => window.location.reload()} 
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 mr-4"
            >
              Refresh the page
            </button>
            <a 
              href="/"
              className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300"
            >
              Go to Homepage
            </a>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
