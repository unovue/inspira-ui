<template>
    <div class="overflow-hidden py-2 flex cursor-default scale-100" @mouseenter="triggerAnimation">
        <div class="flex">
            <span
                v-for="(letter, i) in displayText"
                :key="i"
                :class="[letter === ' ' ? 'w-3' : '', className]"
                class="font-mono inline-block"
                v-motion
                :initial="{ opacity: 0, y: -10 }"
                :enter="{ opacity: 1, y: 0 }"
                :delay="i * (duration / (text.length * 10))"
            >
                {{ letter.toUpperCase() }}
            </span>
        </div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    text: {
        type: String,
        required: true,
    },
    duration: {
        type: Number,
        default: 800,
    },
    className: {
        type: String,
        default: '',
    },
    animateOnLoad: {
        type: Boolean,
        default: true,
    },
});

const alphabets = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const displayText = ref(props.text.split(''));
const iterations = ref(0);
const getRandomLetter = () => alphabets[Math.floor(Math.random() * alphabets.length)];

const triggerAnimation = () => {
    iterations.value = 0;
    startAnimation();
};

const { pause, resume } = useIntervalFn(
    () => {
        if (iterations.value < props.text.length) {
            displayText.value = displayText.value.map((l, i) =>
                l === ' ' ? l : i <= iterations.value ? props.text[i] : getRandomLetter()
            );
            iterations.value += 0.1;
        } else {
            pause();
        }
    },
    computed(() => props.duration / (props.text.length * 10))
);

const startAnimation = () => {
    pause();
    resume();
};

watch(
    () => props.text,
    (newText) => {
        displayText.value = newText.split('');
        triggerAnimation();
    }
);

if (props.animateOnLoad) {
    triggerAnimation();
}
</script>
