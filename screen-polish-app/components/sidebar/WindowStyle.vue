<script setup lang="ts">
import { ref } from "vue";

const activeFrame = ref("mac-dark");

const frames = [
  { id: "none", label: "None" },
  { id: "rounded", label: "Rounded" },
  { id: "shadow", label: "Shadow" },
  { id: "mac-light", label: "Mac Light" },
  { id: "mac-dark", label: "Mac Dark" },
];
</script>

<template>
  <div class="sidebar-section">
    <div class="sidebar-title !mb-1.5">
      <div class="flex items-center gap-1.5">
        <span class="material-symbols-outlined text-[18px] text-slate-600"
          >browser_updated</span
        >
        <h3
          class="capitalize font-bold text-slate-800 text-[13px] tracking-tight"
        >
          Frame
        </h3>
      </div>
      <button
        class="text-[12px] text-slate-400 flex items-center gap-0.5 hover:text-slate-600 transition-colors font-medium"
      >
        More
        <span class="material-symbols-outlined text-[16px] text-slate-300"
          >chevron_right</span
        >
      </button>
    </div>

    <div
      class="flex gap-2 pb-1 overflow-x-auto scrollbar-hide p-2 justify-center"
    >
      <!-- Frame Thumbnails -->
      <button
        v-for="frame in frames"
        :key="frame.id"
        class="flex-none h-10 w-12 rounded-lg border-2 transition-all flex items-center justify-center bg-[#f0f2f5] group relative"
        :class="
          activeFrame === frame.id
            ? 'border-indigo-500 ring-1 ring-indigo-200'
            : 'border-transparent hover:border-slate-300'
        "
        @click="activeFrame = frame.id"
      >
        <!-- Container (Parent) - overflow-hidden -->
        <div class="relative w-full h-full overflow-hidden rounded-md">
          <!-- Child (Full Window) - Positioned to show only 1 corner -->

          <!-- None: Top-left -->
          <div
            v-if="frame.id === 'none'"
            class="absolute top-[30%] left-[30%] w-[80px] h-[80px] bg-slate-300 rounded-lg shadow-sm"
          ></div>

          <!-- Rounded: Top-left with thick white border -->
          <div
            v-if="frame.id === 'rounded'"
            class="absolute top-[30%] left-[30%] w-[80px] h-[80px] bg-slate-300 border-[4px] border-white rounded-lg shadow-sm"
          ></div>

          <!-- Shadow: Top-left with thick dark border -->
          <div
            v-if="frame.id === 'shadow'"
            class="absolute top-[30%] left-[30%] w-[80px] h-[80px] bg-slate-300 border-[4px] border-slate-500 rounded-lg shadow-sm"
          ></div>

          <!-- Mac Light: Top-left -->
          <div
            v-if="frame.id === 'mac-light'"
            class="absolute top-[30%] left-[30%] w-[80px] h-[80px] bg-white rounded-lg flex flex-col border border-slate-200 shadow-sm"
          >
            <div
              class="h-3 flex gap-0.5 px-1 items-center bg-slate-50 border-b rounded-t-lg border-slate-100"
            >
              <div class="size-1 rounded-full bg-red-400"></div>
              <div class="size-1 rounded-full bg-yellow-400"></div>
              <div class="size-1 rounded-full bg-green-400"></div>
            </div>
            <div class="flex-1 bg-slate-100"></div>
          </div>

          <!-- Mac Dark: Top-left -->
          <div
            v-if="frame.id === 'mac-dark'"
            class="absolute top-[30%] left-[30%] w-[80px] h-[80px] bg-slate-700 rounded-lg flex flex-col border border-slate-700 shadow-sm"
          >
            <div
              class="h-3 flex gap-0.5 px-1 items-center bg-slate-900 border-b rounded-t-lg border-slate-800"
            >
              <div class="size-1 rounded-full bg-red-500"></div>
              <div class="size-1 rounded-full bg-yellow-500"></div>
              <div class="size-1 rounded-full bg-green-500"></div>
            </div>
            <div class="flex-1 bg-slate-800"></div>
          </div>
        </div>
      </button>
    </div>
  </div>
</template>
