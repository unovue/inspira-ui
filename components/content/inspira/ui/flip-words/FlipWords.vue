<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'

interface Props {
  words: string[]
  duration?: number
  class?: string
}

const props = withDefaults(defineProps<Props>(), {
  duration: 3000
})

const currentWord = ref(props.words[0])
const isAnimating = ref(false)

const startAnimation = () => {
  const currentIndex = props.words.indexOf(currentWord.value)
  const nextWord = props.words[currentIndex + 1] || props.words[0]
  currentWord.value = nextWord
  isAnimating.value = true
}

watch(isAnimating, (newValue) => {
  if (!newValue) {
    setTimeout(() => {
      startAnimation()
    }, props.duration)
  }
})

onMounted(() => {
  if (!isAnimating.value) {
    setTimeout(() => {
      startAnimation()
    }, props.duration)
  }
})

// Utility function to merge classes (simplified version of cn)
const mergeClasses = (...classes: (string | undefined)[]) => {
  return classes.filter(Boolean).join(' ')
}
</script>

<template>
  <TransitionGroup
    name="flip-words"
    tag="div"
    @after-leave="isAnimating = false"
  >
    <div
      :key="currentWord"
      :class="mergeClasses(
        'z-10 inline-block relative text-left text-neutral-900 dark:text-neutral-100 px-2',
        props.class
      )"
    >
      <TransitionGroup
        name="word"
        tag="span"
        class="inline-block whitespace-nowrap"
      >
        <template v-for="(word, wordIndex) in currentWord.split(' ')" :key="word + wordIndex">
          <TransitionGroup
            :name="'letter-' + wordIndex"
            tag="span"
            class="inline-block"
          >
            <span
              v-for="(letter, letterIndex) in word.split('')"
              :key="word + letterIndex"
              class="inline-block"
              :style="{
                transition: `all 0.2s ease-out ${wordIndex * 0.3 + letterIndex * 0.05}s`,
              }"
            >
              {{ letter }}
            </span>
          </TransitionGroup>
          <span class="inline-block">&nbsp;</span>
        </template>
      </TransitionGroup>
    </div>
  </TransitionGroup>
</template>

<style scoped>
.flip-words-enter-active,
.flip-words-leave-active {
  transition: all 0.5s ease;
}

.flip-words-enter-from {
  opacity: 0;
  transform: translateY(10px);
}

.flip-words-leave-to {
  opacity: 0;
  transform: translateY(-40px) translateX(40px) scale(2);
  filter: blur(8px);
  position: absolute;
}

.word-enter-active,
.word-leave-active {
  transition: all 0.3s ease;
}

.word-enter-from {
  opacity: 0;
  transform: translateY(10px);
  filter: blur(8px);
}

.word-leave-to {
  opacity: 0;
  filter: blur(8px);
}

[class^="letter-"] {
  display: inline-block;
}

[class^="letter-"]-enter-active,
[class^="letter-"]-leave-active {
  transition: all 0.2s ease;
}

[class^="letter-"]-enter-from {
  opacity: 0;
  transform: translateY(10px);
  filter: blur(8px);
}

[class^="letter-"]-leave-to {
  opacity: 0;
  filter: blur(8px);
}
</style>
