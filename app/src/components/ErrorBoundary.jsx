import React, { Component } from "react";
import styles from "./ErrorBoundary.module.css";

class ErrorBoundary extends Component {
  constructor() {
    super();
    this.state = { hasError: false };
  }
  componentDidCatch(error) {
    console.log(error);
    this.setState({
      hasError: true,
    });
  }

  render() {
    if (this.state.hasError) {
      return <div className={styles.error}>Something went wrong!</div>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
