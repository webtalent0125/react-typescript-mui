import React from "react";

interface ErrorBoundaryProps {
  children: React.ReactNode;
  onError?: (e: Error) => void;
}

interface State {
  error?: Error;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, State> {
  public static getDerivedStateFromError(error: Error): State {
    // Update state so the next render will show the fallback UI.
    return { error };
  }

  public componentDidCatch(error: Error) {
    if (this.props.onError) {
      this.props.onError(error);
    }
  }

  public render() {
    if (this.state && this.state.error) {
      return <></>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
