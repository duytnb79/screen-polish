<script setup lang="ts">
import { ref } from "vue";

const activeFrame = ref("none");

const frames = [
  { id: "none", label: "None" },
  { id: "rounded-square", label: "Rounded Square" },
  { id: "circle", label: "Circle" },
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
      <div class="flex items-center gap-3">
        <div class="flex items-center gap-1.5 mr-1">
          <label
            class="text-[10px] text-slate-400 font-medium cursor-pointer"
            for="dark-mode"
            >Dark</label
          >
          <button
            class="toggle-switch active scale-[0.7] origin-right"
            id="dark-mode"
          >
            <span class="toggle-thumb"></span>
          </button>
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
    </div>

    <div class="flex gap-2 pb-1 overflow-x-auto scrollbar-hide p-2">
      <!-- Frame Thumbnails -->
      <button
        v-for="frame in frames"
        :key="frame.id"
        class="flex-none size-14 rounded-lg border-2 transition-all flex items-center justify-center bg-slate-50 group relative"
        :class="
          activeFrame === frame.id
            ? 'border-slate-500 ring-1 ring-slate-200'
            : 'border-transparent hover:border-slate-300'
        "
        @click="activeFrame = frame.id"
      >
        <!-- Mock Frame Preview -->
        <!-- None - Bracket style -->
        <div
          v-if="frame.id === 'none'"
          class="size-7 rounded-none border-[2.5px] border-slate-400 bg-white"
        ></div>

        <!-- Rounded Square -->
        <div
          v-if="frame.id === 'rounded-square'"
          class="size-7 rounded-lg border-[2.5px] border-slate-400 bg-white"
        ></div>

        <!-- Circle -->
        <div
          v-if="frame.id === 'circle'"
          class="size-7 rounded-full border-[2.5px] border-slate-400 bg-white"
        ></div>

        <!-- Mac Light -->
        <div
          v-if="frame.id === 'mac-light'"
          class="w-9 h-7 bg-white rounded-md border border-slate-300 shadow-sm flex flex-col overflow-hidden"
        >
          <div
            class="h-2 flex gap-0.5 px-1 items-center bg-slate-100 border-b border-slate-200"
          >
            <div class="size-1 rounded-full bg-red-400"></div>
            <div class="size-1 rounded-full bg-yellow-400"></div>
            <div class="size-1 rounded-full bg-green-400"></div>
          </div>
          <div class="flex-1 bg-white"></div>
        </div>

        <!-- Mac Dark -->
        <div
          v-if="frame.id === 'mac-dark'"
          class="w-9 h-7 bg-[#2d2d2d] rounded-md border border-slate-700 shadow-sm flex flex-col overflow-hidden"
        >
          <div
            class="h-2 flex gap-0.5 px-1 items-center bg-[#1e1e1e] border-b border-white/5"
          >
            <div class="size-1 rounded-full bg-red-500"></div>
            <div class="size-1 rounded-full bg-yellow-500"></div>
            <div class="size-1 rounded-full bg-green-500"></div>
          </div>
          <div class="flex-1 bg-[#2d2d2d]"></div>
        </div>
      </button>
    </div>
  </div>
</template>
