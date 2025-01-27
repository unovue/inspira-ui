import { ref, readonly } from "vue";

export function useMouseState() {
  const isMouseEntered = ref(false);

  function setMouseEntered(value: boolean) {
    isMouseEntered.value = value;
  }

  return {
    isMouseEntered: readonly(isMouseEntered),
    setMouseEntered,
  };
}
