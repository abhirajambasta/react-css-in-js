import { Component, forwardRef } from 'react';

export default function (WrappedComponent) {
  class ErrorBoundaryComponent extends Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false, error: null };
    }

    static getDerivedStateFromError(error) {
      return { hasError: true, error };
    }

    componentDidCatch(error, errorInfo) {
      console.log(error, errorInfo);
    }


    render() {
      const { forwardedRef, ...rest } = this.props;
      const { error, hasError } = this.state;

      return hasError
        ? (
          <h1>
            Something went wrong in -- <span>{WrappedComponent.name}</span> Component.
            <p>{error}</p>
          </h1>
        )
        : <WrappedComponent ref={forwardedRef} {...rest} />;
    }
  }

  return forwardRef((props, ref) => <ErrorBoundaryComponent {...props} forwardedRef={ref} />);
}
