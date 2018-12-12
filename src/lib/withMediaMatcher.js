import { Component } from 'preact';

const withMediaMatcher = query => ComponentToDecorate => {
  const wrappedComponent = class extends Component {
    handleMediaQueryUpdate(e) {
      this.setState({ ...this.state, matches: e.matches });
    }

    constructor() {
      super();
      if (typeof window !== 'undefined') {
        this.mq = window.matchMedia(query);
        this.state = { matches: this.mq.matches };
        this.handleMediaQueryUpdate = this.handleMediaQueryUpdate.bind(this);
        this.mq.addListener(this.handleMediaQueryUpdate);
      }
    }

    componentWillUnmount() {
      this.mq.removeListener(this.handleMediaQueryUpdate);
    }

    render(props, { matches }) {
      return <ComponentToDecorate {...props} mq={{ matches }} />;
    }
  };

  wrappedComponent.displayName = `withMediaMatcher(${ComponentToDecorate.displayName ||
    ComponentToDecorate.name})`;

  return wrappedComponent;
};

export default withMediaMatcher;
