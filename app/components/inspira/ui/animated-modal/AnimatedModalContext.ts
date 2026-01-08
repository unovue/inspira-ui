import type { InjectionKey, Ref } from "vue";

export interface AnimatedModalContext {
  open: Ref<boolean>;
  setOpen: (open: boolean) => void;
  openModal: () => void;
  closeModal: () => void;
  toggle: () => void;
}

export const ANIMATED_MODAL_KEY: InjectionKey<AnimatedModalContext> = Symbol("AnimatedModal");
