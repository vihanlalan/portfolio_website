import React from "react";
export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }
  render() {
    if (this.state.hasError) {
      return (
        <div style={{background: "white", color: "red", padding: "20px", position: "absolute", zIndex: 9999, top: 0, left: 0}}>
          {this.state.error.toString()}<br/>
          {this.state.error.stack}
        </div>
      );
    }
    return this.props.children;
  }
}
