<script setup lang="ts">
defineProps<{
  label: string;
  w: number;
  h: number;
  aspect: string;
  isActive: boolean;
  subLabel?: string;
}>();

defineEmits(["select"]);
</script>

<template>
  <button
    type="button"
    class="flex flex-col items-center justify-start p-3 h-auto transition-all border-2 rounded-xl"
    :class="[
      isActive
        ? 'bg-blue-500/5 border-blue-500 cursor-default'
        : 'bg-transparent border-transparent hover:bg-slate-50 cursor-pointer',
    ]"
    @click="$emit('select')"
  >
    <div class="py-1 px-2 w-full flex items-center justify-center min-h-[64px]">
      <div
        class="border border-black/20 bg-black/5 dark:bg-white/10 dark:border-white/20 w-full flex items-center justify-center rounded-md transition-all"
        :class="[aspect]"
        :style="{ width: '52px' }"
      >
        <span class="text-[11px] font-medium text-slate-700">{{
          label.replace(" ", "")
        }}</span>
      </div>
    </div>

    <div class="flex flex-col items-center mt-2 gap-0.5">
      <div
        v-if="subLabel"
        class="text-[11px] font-bold text-slate-800 line-clamp-1"
      >
        {{ subLabel }}
      </div>
      <div class="text-[10px] text-slate-400 font-mono">{{ w }} x {{ h }}</div>
    </div>
  </button>
</template>

<style scoped>
.aspect-video {
  aspect-ratio: 16 / 9;
}
.aspect-square {
  aspect-ratio: 1 / 1;
}
.aspect-\[3\/2\] {
  aspect-ratio: 3 / 2;
}
.aspect-\[4\/3\] {
  aspect-ratio: 4 / 3;
}
.aspect-\[5\/4\] {
  aspect-ratio: 5 / 4;
}
.aspect-\[4\/5\] {
  aspect-ratio: 4 / 5;
}
.aspect-\[3\/4\] {
  aspect-ratio: 3 / 4;
}
.aspect-\[2\/3\] {
  aspect-ratio: 2 / 3;
}
.aspect-\[9\/16\] {
  aspect-ratio: 9 / 16;
}
.aspect-\[3\/1\] {
  aspect-ratio: 3 / 1;
}
.aspect-\[10\/21\] {
  aspect-ratio: 10 / 21;
}
</style>
