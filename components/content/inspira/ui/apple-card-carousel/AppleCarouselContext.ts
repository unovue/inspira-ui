import { type InjectionKey, type Ref } from "vue";

export interface CarouselContextType {
  onCardClose: (index: number) => void;
  currentIndex: Ref<number>;
}

export const CarouselKey = Symbol() as InjectionKey<CarouselContextType>;
