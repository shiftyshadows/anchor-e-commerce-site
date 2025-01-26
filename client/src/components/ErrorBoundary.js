import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, info) {
    console.error("ErrorBoundary caught an error", error, info);
  }

  handleRetry = () => {
    this.setState({ hasError: false, error: null });
    window.location.reload(); // Reload the page or add custom retry logic
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-boundary">
          <h2>Something went wrong 😢</h2>
          <p>{this.state.error?.message || "An unexpected error occurred."}</p>
          <button onClick={this.handleRetry} className="retry-button">
            Retry
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
