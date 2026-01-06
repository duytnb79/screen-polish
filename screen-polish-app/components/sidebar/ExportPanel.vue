<script setup lang="ts">
import { ref, computed } from "vue";
import { onClickOutside } from "@vueuse/core";

const showSettings = ref(false);
const format = ref("jpg");
const ratio = ref("1x");
const settingsPanel = ref(null);
const toggleButton = ref(null);

// Close settings when clicking outside, ignoring the toggle button
onClickOutside(
  settingsPanel,
  () => {
    showSettings.value = false;
  },
  { ignore: [toggleButton] }
);

const downloadLabel = computed(() => {
  return `${ratio.value} as ${format.value.toUpperCase()}`;
});
</script>

<template>
  <div
    class="relative px-2 pb-3 pt-2 bg-surface-light border-t border-border-light"
  >
    <!-- Popover Settings Modal -->
    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="translate-y-2 opacity-0 scale-95"
      enter-to-class="translate-y-0 opacity-100 scale-100"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="translate-y-0 opacity-100 scale-100"
      leave-to-class="translate-y-2 opacity-0 scale-95"
    >
      <div
        v-if="showSettings"
        ref="settingsPanel"
        class="absolute bottom-full left-3 right-3 mb-2 p-4 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 ring-1 ring-black/5 space-y-4 z-50 origin-bottom"
      >
        <!-- Format -->
        <div class="space-y-2">
          <label class="text-[12px] font-semibold text-text-secondary pl-1"
            >Format</label
          >
          <div
            class="flex bg-slate-100/50 p-1 rounded-xl border border-slate-200/50"
          >
            <button
              v-for="f in ['png', 'jpg', 'webp']"
              :key="f"
              class="flex-1 py-1.5 rounded-lg text-[12px] font-medium transition-all"
              :class="
                format === f
                  ? 'bg-white text-primary shadow-sm font-bold ring-1 ring-black/5'
                  : 'text-text-secondary hover:text-text-main hover:bg-white/50'
              "
              @click="format = f"
            >
              {{ f }}
            </button>
          </div>
        </div>

        <!-- Pixel Ratio -->
        <div class="space-y-2">
          <label class="text-[12px] font-semibold text-text-secondary pl-1"
            >Pixel Ratio</label
          >
          <div
            class="flex bg-slate-100/50 p-1 rounded-xl border border-slate-200/50"
          >
            <button
              v-for="r in ['1x', '2x', '3x']"
              :key="r"
              class="flex-1 py-1.5 rounded-lg text-[12px] font-medium transition-all"
              :class="
                ratio === r
                  ? 'bg-white text-primary shadow-sm font-bold ring-1 ring-black/5'
                  : 'text-text-secondary hover:text-text-main hover:bg-white/50'
              "
              @click="ratio = r"
            >
              {{ r }}
            </button>
          </div>
        </div>

        <!-- Download Size -->
        <div
          class="flex items-center justify-between px-3.5 py-2.5 bg-slate-50/50 rounded-xl border border-slate-100 text-[12px]"
        >
          <span class="font-medium text-text-secondary">Estimated Size</span>
          <span class="font-bold text-text-main font-mono">2064 x 1102</span>
        </div>
      </div>
    </Transition>

    <!-- Bottom Actions Toolbar -->
    <div class="flex items-center gap-2">
      <!-- Download Group -->
      <div
        class="flex-1 flex items-stretch shadow-lg shadow-slate-500/20 rounded-xl overflow-hidden"
      >
        <button
          class="flex-1 bg-slate-600 hover:bg-slate-700 text-white py-2 px-3 flex items-center justify-center gap-3 transition-colors group"
        >
          <span class="material-symbols-outlined text-[20px]">download</span>
          <div class="flex flex-col items-start leading-none gap-0.5">
            <span class="text-[13px] font-bold">Download</span>
            <span
              class="text-[10px] text-slate-200 font-medium group-hover:text-white transition-colors"
              >{{ downloadLabel }}</span
            >
          </div>
        </button>
        <button
          class="w-11 bg-slate-600 hover:bg-slate-700 text-white flex items-center justify-center transition-colors border-l border-white/10 group relative"
          title="Copy to Clipboard"
        >
          <span
            class="material-symbols-outlined text-[18px] text-slate-200 group-hover:text-white transition-colors"
            >content_copy</span
          >
        </button>
      </div>

      <!-- Settings Button -->
      <button
        ref="toggleButton"
        class="size-11 rounded-xl border border-border-light bg-white hover:bg-slate-50 hover:border-slate-300 text-text-secondary hover:text-slate-600 flex-none flex items-center justify-center transition-all shadow-sm"
        :class="{
          'border-slate-500 text-slate-600 bg-slate-50 ring-2 ring-slate-100':
            showSettings,
        }"
        @click="showSettings = !showSettings"
        title="Export Settings"
      >
        <span
          class="material-symbols-outlined text-[22px] transition-transform duration-300"
          :class="{ 'rotate-90': showSettings }"
          >tune</span
        >
      </button>
    </div>
  </div>
</template>
