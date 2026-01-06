<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import FramePresetItem from "./FramePresetItem.vue";

const isAuto = ref(true);
const width = ref(1920);
const height = ref(1080);
const isOpen = ref(false);
const selectedId = ref<string | null>(null);
const containerRef = ref<HTMLElement | null>(null);

const toggleDropdown = () => {
  isOpen.value = !isOpen.value;
};

const selectPreset = (id: string, w: number, h: number) => {
  width.value = w;
  height.value = h;
  selectedId.value = id;
  isAuto.value = false;
};

const handleInputChange = () => {
  isAuto.value = false;
  selectedId.value = null; // Clear selection when manually typing
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

// Top 3 Quick Access
const topCommon = [
  {
    id: "top-9-16",
    label: "9 : 16",
    w: 1080,
    h: 1920,
    aspect: "aspect-[9/16]",
    subLabel: "Tiktok",
  },
  {
    id: "top-4-3",
    label: "4 : 3",
    w: 1920,
    h: 1440,
    aspect: "aspect-[4/3]",
    subLabel: "Standard",
  },
  {
    id: "top-1-1",
    label: "1 : 1",
    w: 1080,
    h: 1080,
    aspect: "aspect-square",
    subLabel: "Square",
  },
];

// Complete Social Media Categories (Creators want them full)
const socialMedia = [
  {
    name: "Instagram",
    presets: [
      {
        id: "ig-post",
        name: "Post",
        ratio: "1 : 1",
        w: 1080,
        h: 1080,
        aspect: "aspect-square",
      },
      {
        id: "ig-portrait",
        name: "Portrait",
        ratio: "4 : 5",
        w: 1080,
        h: 1350,
        aspect: "aspect-[4/5]",
      },
      {
        id: "ig-story",
        name: "Story",
        ratio: "9 : 16",
        w: 1080,
        h: 1920,
        aspect: "aspect-[9/16]",
      },
    ],
  },
  {
    name: "X (Twitter)",
    presets: [
      {
        id: "x-tweet",
        name: "Tweet",
        ratio: "16 : 9",
        w: 1200,
        h: 675,
        aspect: "aspect-video",
      },
      {
        id: "x-cover",
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
        id: "yt-banner",
        name: "Banner",
        ratio: "16 : 9",
        w: 2560,
        h: 1440,
        aspect: "aspect-video",
      },
      {
        id: "yt-thumb",
        name: "Thumbnail",
        ratio: "16 : 9",
        w: 1280,
        h: 720,
        aspect: "aspect-video",
      },
    ],
  },
  {
    name: "Pinterest",
    presets: [
      {
        id: "pin-square",
        name: "Square",
        ratio: "1 : 1",
        w: 1000,
        h: 1000,
        aspect: "aspect-square",
      },
      {
        id: "pin-long",
        name: "Long",
        ratio: "10 : 21",
        w: 1000,
        h: 2100,
        aspect: "aspect-[10/21]",
      },
      {
        id: "pin-optimal",
        name: "Optimal",
        ratio: "2 : 3",
        w: 1000,
        h: 1500,
        aspect: "aspect-[2/3]",
      },
    ],
  },
];

// Remaining standard ratios
const moreRatios = [
  { id: "std-3-2", label: "3 : 2", w: 1920, h: 1280, aspect: "aspect-[3/2]" },
  { id: "std-5-4", label: "5 : 4", w: 1920, h: 1536, aspect: "aspect-[5/4]" },
  { id: "std-3-4", label: "3 : 4", w: 1080, h: 1440, aspect: "aspect-[3/4]" },
  { id: "std-2-3", label: "2 : 3", w: 1080, h: 1620, aspect: "aspect-[2/3]" },
  {
    id: "std-9-16",
    label: "9 : 16",
    w: 1080,
    h: 1920,
    aspect: "aspect-[9/16]",
  },
];
</script>

<template>
  <div ref="containerRef" class="relative mb-4">
    <!-- Trigger -->
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
            {{ isAuto ? "Auto Fit" : "Custom Size" }}
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

    <!-- Popover -->
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
          class="frame-size-panel fixed w-[440px] bg-white border border-slate-200 rounded-2xl shadow-[0_24px_60px_-12px_rgba(0,0,0,0.18)] z-[9999] flex flex-col overflow-hidden"
          :style="{
            top: containerRef
              ? containerRef.getBoundingClientRect().bottom + 8 + 'px'
              : '0',
            left: containerRef
              ? containerRef.getBoundingClientRect().right - 440 + 'px'
              : '0',
          }"
        >
          <!-- Toolbar Area -->
          <div class="p-3 border-b border-slate-100 bg-white">
            <div class="flex items-center gap-2 py-1">
              <div
                class="flex-1 flex items-center bg-white border border-slate-200 rounded-lg h-9 px-2.5 focus-within:border-blue-500 transition-all"
              >
                <span class="text-[11px] font-bold text-slate-400 mr-2">W</span>
                <input
                  v-model.number="width"
                  type="number"
                  class="w-full bg-transparent text-[13px] font-bold text-slate-800 outline-none border-none p-0 focus:ring-0"
                  :disabled="isAuto"
                  @input="handleInputChange"
                />
              </div>
              <span class="text-slate-300 text-[12px] opacity-60">×</span>
              <div
                class="flex-1 flex items-center bg-white border border-slate-200 rounded-lg h-9 px-2.5 focus-within:border-blue-500 transition-all"
              >
                <span class="text-[11px] font-bold text-slate-400 mr-2">H</span>
                <input
                  v-model.number="height"
                  type="number"
                  class="w-full bg-transparent text-[13px] font-bold text-slate-800 outline-none border-none p-0 focus:ring-0"
                  :disabled="isAuto"
                  @input="handleInputChange"
                />
              </div>
              <div class="flex items-center gap-1.5 ml-1">
                <button
                  class="size-8 rounded-full flex items-center justify-center transition-all shadow-sm"
                  :class="
                    isAuto
                      ? 'bg-slate-100 text-slate-300'
                      : 'bg-blue-500 text-white'
                  "
                  @click="
                    isAuto = false;
                    selectedId = null;
                  "
                >
                  <span class="material-symbols-outlined text-[18px]"
                    >check</span
                  >
                </button>
                <button
                  class="size-8 rounded-full flex items-center justify-center transition-all shadow-sm bg-blue-500 text-white"
                  @click="
                    isAuto = true;
                    isOpen = false;
                    selectedId = null;
                  "
                >
                  <span class="material-symbols-outlined text-[18px]"
                    >center_focus_strong</span
                  >
                </button>
              </div>
            </div>
          </div>

          <!-- Content Grid -->
          <div
            class="flex-1 overflow-y-auto custom-scrollbar max-h-[500px] p-4 bg-white"
          >
            <!-- Part 1: Top 3 Most Used -->
            <div class="grid grid-cols-3 gap-3 mb-10 items-start">
              <FramePresetItem
                v-for="preset in topCommon"
                :key="preset.id"
                v-bind="preset"
                :is-active="selectedId === preset.id && !isAuto"
                @select="selectPreset(preset.id, preset.w, preset.h)"
              />
            </div>

            <!-- Part 2: Platform Specific (Complete per platform) -->
            <div
              v-for="social in socialMedia"
              :key="social.name"
              class="mb-8 last:mb-0"
            >
              <div class="flex items-center gap-3 mb-5 px-1">
                <h4
                  class="text-[11px] font-bold text-slate-800 uppercase tracking-widest"
                >
                  {{ social.name }}
                </h4>
                <div class="h-[1px] flex-1 bg-slate-100"></div>
              </div>
              <div class="grid grid-cols-3 gap-3 items-start">
                <FramePresetItem
                  v-for="preset in social.presets"
                  :key="preset.id"
                  :label="preset.ratio"
                  :sub-label="preset.name"
                  :w="preset.w"
                  :h="preset.h"
                  :aspect="preset.aspect"
                  :is-active="selectedId === preset.id && !isAuto"
                  @select="selectPreset(preset.id, preset.w, preset.h)"
                />
              </div>
            </div>

            <!-- Part 3: Other Standard Ratios -->
            <div class="mt-8">
              <div class="flex items-center gap-3 mb-5 px-1">
                <h4
                  class="text-[11px] font-bold text-slate-800 uppercase tracking-widest"
                >
                  More Ratios
                </h4>
                <div class="h-[1px] flex-1 bg-slate-100"></div>
              </div>
              <div class="grid grid-cols-3 gap-3 items-start">
                <FramePresetItem
                  v-for="preset in moreRatios"
                  :key="preset.id"
                  v-bind="preset"
                  :is-active="selectedId === preset.id && !isAuto"
                  @select="selectPreset(preset.id, preset.w, preset.h)"
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
