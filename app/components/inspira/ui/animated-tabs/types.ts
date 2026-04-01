import type { Component } from "vue";

export interface AnimatedTab {
  title: string;
  value: string;
  /**
   * Optional class name for the panel/card background (used by demos).
   * Prefer keeping design decisions in the consumer via `#content` slot.
   */
  panelClassName?: string;
  /**
   * Optional tab panel content. For maximum flexibility, prefer the `#content` slot.
   * When provided, it should be a Vue component (including functional components).
   *
   * Note: if the consumer provides the `#content` slot, that slot takes precedence
   * and this `content` component will not be rendered.
   */
  content?: Component;
  /**
   * Optional props to pass to the content component.
   * These props will be passed to the component when it's rendered.
   */
  contentProps?: Record<string, any>;
}
