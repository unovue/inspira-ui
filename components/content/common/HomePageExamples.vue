<template>
    <ClientOnly>
        <div class="flex lg:flex-row flex-col items-center justify-center flex-wrap p-4 gap-4">
            <DotBackground class="py-8 px-4 border rounded-lg flex flex-col gap-4 h-fit">
                <h3 class="text-3xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
                    3D Card Hover Effect
                </h3>
                <ComponentViewer component-name="CardDemo2"></ComponentViewer>
            </DotBackground>
            <DotBackground class="py-8 px-4 border rounded-lg flex flex-col gap-4 h-fit">
                <h3 class="text-3xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
                    Text Hover Effect
                </h3>
                <ComponentViewer component-name="TextHoverEffectDemo"></ComponentViewer>
            </DotBackground>
        </div>
    </ClientOnly>
</template>