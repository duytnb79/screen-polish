<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import FramePresetItem from "./FramePresetItem.vue";

const isAuto = ref(true);
const width = ref(1920);
const height = ref(1080);
const isOpen = ref(false);
const containerRef = ref<HTMLElement | null>(null);

const toggleDropdown = () => {
  isOpen.value = !isOpen.value;
};

const selectPreset = (w: number, h: number) => {
  width.value = w;
  height.value = h;
  isAuto.value = false;
};

const handleClickOutside = (event: MouseEvent) => {
  if (
    containerRef.value &&
    !containerRef.value.contains(event.target as Node)
  ) {
    const teleportPanel = document.querySelector(".frame-size-panel");
    if (teleportPanel && teleportPanel.contains(event.target as Node)) {
      return;
    }
    isOpen.value = false;
  }
};

onMounted(() => {
  document.addEventListener("mousedown", handleClickOutside);
});

onUnmounted(() => {
  document.removeEventListener("mousedown", handleClickOutside);
});

const ratios = [
  { label: "16 : 9", w: 1920, h: 1080, aspect: "aspect-video" },
  { label: "3 : 2", w: 1920, h: 1280, aspect: "aspect-[3/2]" },
  { label: "4 : 3", w: 1920, h: 1440, aspect: "aspect-[4/3]" },
  { label: "5 : 4", w: 1920, h: 1536, aspect: "aspect-[5/4]" },
  { label: "1 : 1", w: 1920, h: 1920, aspect: "aspect-square" },
  { label: "4 : 5", w: 1080, h: 1350, aspect: "aspect-[4/5]" },
  { label: "3 : 4", w: 1080, h: 1440, aspect: "aspect-[3/4]" },
  { label: "2 : 3", w: 1080, h: 1620, aspect: "aspect-[2/3]" },
  { label: "9 : 16", w: 1080, h: 1920, aspect: "aspect-[9/16]" },
];

const socialMedia = [
  {
    name: "Instagram",
    presets: [
      {
        name: "Post",
        ratio: "1 : 1",
        w: 1080,
        h: 1080,
        aspect: "aspect-square",
      },
      {
        name: "Portrait",
        ratio: "4 : 5",
        w: 1080,
        h: 1350,
        aspect: "aspect-[4/5]",
      },
      {
        name: "Story",
        ratio: "9 : 16",
        w: 1080,
        h: 1920,
        aspect: "aspect-[9/16]",
      },
    ],
  },
  {
    name: "X",
    presets: [
      {
        name: "Tweet",
        ratio: "16 : 9",
        w: 1200,
        h: 675,
        aspect: "aspect-video",
      },
      {
        name: "Cover",
        ratio: "3 : 1",
        w: 1500,
        h: 500,
        aspect: "aspect-[3/1]",
      },
    ],
  },
  {
    name: "YouTube",
    presets: [
      {
        name: "Banner",
        ratio: "16 : 9",
        w: 2560,
        h: 1440,
        aspect: "aspect-video",
      },
      {
        name: "Thumbnail",
        ratio: "16 : 9",
        w: 1280,
        h: 720,
        aspect: "aspect-video",
      },
      {
        name: "Video",
        ratio: "16 : 9",
        w: 1920,
        h: 1080,
        aspect: "aspect-video",
      },
    ],
  },
  {
    name: "Pinterest",
    presets: [
      {
        name: "Long",
        ratio: "10 : 21",
        w: 1000,
        h: 2100,
        aspect: "aspect-[10/21]",
      },
      {
        name: "Optimal",
        ratio: "2 : 3",
        w: 1000,
        h: 1500,
        aspect: "aspect-[2/3]",
      },
      {
        name: "Square",
        ratio: "1 : 1",
        w: 1000,
        h: 1000,
        aspect: "aspect-square",
      },
    ],
  },
];
</script>

<template>
  <div ref="containerRef" class="relative mb-4">
    <!-- Sidebar Trigger Button -->
    <button
      class="btn-dropdown group !h-10 shadow-sm transition-all"
      :class="{ '!border-blue-500 !ring-2 !ring-blue-50': isOpen }"
      @click="toggleDropdown"
    >
      <div class="flex items-center gap-2.5">
        <span class="material-symbols-outlined text-[20px] text-slate-500"
          >crop_free</span
        >
        <div class="flex flex-col items-start leading-none">
          <span class="text-[12px] font-bold text-slate-800">
            {{ isAuto ? "Auto" : "Custom Size" }}
          </span>
          <span class="text-[10px] text-slate-400 mt-0.5">
            {{ width }} x {{ height }}
          </span>
        </div>
      </div>
      <span
        class="material-symbols-outlined text-[20px] text-slate-300 transition-transform duration-200"
        :class="{ 'rotate-180': isOpen }"
      >
        expand_more
      </span>
    </button>

    <!-- Popover Content (Teleported) -->
    <Teleport to="body">
      <Transition
        enter-active-class="transition duration-200 ease-out"
        enter-from-class="translate-y-2 opacity-0"
        enter-to-class="translate-y-0 opacity-100"
        leave-active-class="transition duration-150 ease-in"
        leave-from-class="translate-y-0 opacity-100"
        leave-to-class="translate-y-2 opacity-0"
      >
        <div
          v-if="isOpen"
          class="frame-size-panel fixed w-[540px] bg-white border border-slate-200 rounded-2xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)] z-[9999] flex flex-col overflow-hidden"
          :style="{
            top: containerRef
              ? containerRef.getBoundingClientRect().bottom + 8 + 'px'
              : '0',
            left: containerRef
              ? containerRef.getBoundingClientRect().right - 540 + 'px'
              : '0',
          }"
        >
          <!-- Top Header: Auto Toggle -->
          <div class="p-4 border-b border-slate-100 bg-white">
            <div class="flex items-center justify-between">
              <label class="flex items-center gap-3 cursor-pointer select-none">
                <input
                  type="checkbox"
                  v-model="isAuto"
                  class="size-5 rounded border-2 border-slate-300 text-blue-500 focus:ring-blue-500 transition-all cursor-pointer"
                />
                <div class="flex flex-col leading-none">
                  <span class="text-[14px] font-bold text-slate-800"
                    >Auto Fit</span
                  >
                  <span class="text-[11px] text-slate-400 mt-1"
                    >Adaptive screenshot size</span
                  >
                </div>
              </label>
              <button
                class="text-slate-300 hover:text-slate-600 transition-colors"
                @click="isOpen = false"
              >
                <span class="material-symbols-outlined text-[24px]"
                  >expand_less</span
                >
              </button>
            </div>
          </div>

          <!-- Input Toolbar -->
          <div class="p-3 border-b border-slate-100 bg-slate-50/50">
            <div class="flex items-center gap-2 py-1">
              <div
                class="flex-1 flex items-center bg-white border border-slate-200 rounded-lg h-9 px-2.5 focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-100 transition-all"
              >
                <span
                  class="text-[11px] font-bold text-slate-400 mr-2 select-none"
                  >W</span
                >
                <input
                  v-model.number="width"
                  type="number"
                  class="w-full bg-transparent text-[13px] font-bold text-slate-800 outline-none border-none p-0 focus:ring-0"
                  :disabled="isAuto"
                  @input="isAuto = false"
                />
              </div>

              <span class="text-slate-300 text-[12px] opacity-60">×</span>

              <div
                class="flex-1 flex items-center bg-white border border-slate-200 rounded-lg h-9 px-2.5 focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-100 transition-all"
              >
                <span
                  class="text-[11px] font-bold text-slate-400 mr-2 select-none"
                  >H</span
                >
                <input
                  v-model.number="height"
                  type="number"
                  class="w-full bg-transparent text-[13px] font-bold text-slate-800 outline-none border-none p-0 focus:ring-0"
                  :disabled="isAuto"
                  @input="isAuto = false"
                />
              </div>

              <div class="flex items-center gap-1.5 ml-1">
                <button
                  class="size-8 rounded-full flex items-center justify-center transition-all shadow-sm"
                  :class="
                    isAuto
                      ? 'bg-slate-100 text-slate-300'
                      : 'bg-blue-500 text-white hover:bg-blue-600'
                  "
                  @click="isAuto = false"
                >
                  <span class="material-symbols-outlined text-[18px]"
                    >check</span
                  >
                </button>
                <button
                  class="size-8 rounded-full flex items-center justify-center transition-all shadow-sm"
                  :class="
                    isAuto
                      ? 'bg-blue-500 text-white'
                      : 'bg-slate-100 text-slate-400 hover:bg-slate-200'
                  "
                  @click="isAuto = true"
                >
                  <span class="material-symbols-outlined text-[18px]"
                    >open_in_full</span
                  >
                </button>
              </div>
            </div>
          </div>

          <!-- Main Scrollable Content -->
          <div
            class="flex-1 overflow-y-auto custom-scrollbar max-h-[500px] p-4 bg-white"
          >
            <!-- Standard Ratios Grid -->
            <div class="grid grid-cols-3 gap-2 items-start mb-8">
              <FramePresetItem
                v-for="ratio in ratios"
                :key="ratio.label"
                v-bind="ratio"
                :is-active="width === ratio.w && height === ratio.h && !isAuto"
                @select="selectPreset(ratio.w, ratio.h)"
              />
            </div>

            <!-- Social Media Sections -->
            <div
              v-for="social in socialMedia"
              :key="social.name"
              class="mb-6 last:mb-0"
            >
              <div class="flex items-center gap-3 mb-4 px-1">
                <h4
                  class="text-[11px] font-bold text-slate-400 uppercase tracking-widest"
                >
                  {{ social.name }}
                </h4>
                <div class="h-[1px] flex-1 bg-slate-50"></div>
              </div>

              <div class="grid grid-cols-3 gap-2 items-start">
                <FramePresetItem
                  v-for="preset in social.presets"
                  :key="preset.name"
                  :label="preset.ratio"
                  :sub-label="preset.name"
                  :w="preset.w"
                  :h="preset.h"
                  :aspect="preset.aspect"
                  :is-active="
                    width === preset.w && height === preset.h && !isAuto
                  "
                  @select="selectPreset(preset.w, preset.h)"
                />
              </div>
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>
  </div>
</template>

<style scoped>
.custom-scrollbar::-webkit-scrollbar {
  width: 5px;
}
.custom-scrollbar::-webkit-scrollbar-thumb {
  background: #f1f5f9;
  border-radius: 10px;
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
input[type="number"] {
  -moz-appearance: textfield;
}
</style>
