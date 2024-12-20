import React from "react";
import { createPortal } from "react-dom";

interface IPortalProps {
  children: React.ReactNode;
}

interface IPortalState {
  isMounted: boolean;
}

let portalNode: HTMLElement;
const getPortalNode = (): HTMLElement => {
  if (portalNode !== undefined) {
    return portalNode;
  }

  const node = document.getElementById("portal-root");
  if (node === null) {
    throw new Error("Portal Element not Found");
  }
  portalNode = node;
  return portalNode;
};

class Portal extends React.PureComponent<IPortalProps, IPortalState> {
  public state = {
    isMounted: false,
  };

  // @ts-ignore - We are initializing these on ComponentDidMount to avoid SSR issuesƒ
  private portalNode: HTMLElement;
  // @ts-ignore
  private el: HTMLElement;

  public render() {
    if (this.state.isMounted === false) {
      return null;
    }

    return createPortal(this.props.children, this.el);
  }

  public componentDidMount() {
    this.el = document.createElement("div");
    this.portalNode = getPortalNode();
    this.portalNode.appendChild(this.el);
    this.setState({ isMounted: true });
  }

  public componentWillUnmount() {
    this.portalNode.removeChild(this.el);
  }
}

export default Portal;
