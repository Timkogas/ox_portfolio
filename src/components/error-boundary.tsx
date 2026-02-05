import { Component } from "react";
import type { ErrorInfo, ReactNode } from "react";

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("ErrorBoundary caught:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        this.props.fallback ?? (
          <div className="min-h-screen flex items-center justify-center bg-white">
            <p className="text-size-m text-neutral-900">
              Что-то пошло не так.{" "}
              <button
                onClick={() => this.setState({ hasError: false })}
                className="underline hover:no-underline"
              >
                Попробовать снова
              </button>
            </p>
          </div>
        )
      );
    }

    return this.props.children;
  }
}
