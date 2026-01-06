<script setup lang="ts">
import { ref } from "vue";

const activeColor = ref(0);

const swatches = [
  "from-[#A594F9] to-[#8070F0]",
  "from-rose-400 to-orange-300",
  "from-purple-600 to-red-500", // Instagram style
  "from-orange-400 to-rose-500",
  "from-cyan-400 to-emerald-400",
  "from-blue-500 to-purple-600",
  "from-pink-300 to-indigo-400",
];
</script>

<template>
  <div class="sidebar-section">
    <!-- Background Header -->
    <div class="sidebar-title">
      <div class="flex items-center gap-1.5">
        <h3>Background</h3>
      </div>
      <button
        class="text-[12px] text-slate-400 flex items-center gap-0.5 hover:text-slate-600 transition-colors font-medium mr-0.5"
      >
        More
        <span class="material-symbols-outlined text-[16px] text-slate-300"
          >chevron_right</span
        >
      </button>
    </div>

    <!-- Swatches Grid -->
    <div class="flex gap-2.5 overflow-x-auto pb-2 scrollbar-hide p-2">
      <button
        v-for="(gradient, index) in swatches"
        :key="index"
        class="flex-none size-7 rounded-full relative transition-all duration-300 shadow-sm hover:scale-110"
        :class="[
          'bg-gradient-to-br ' + gradient,
          activeColor === index
            ? 'ring-[1px] ring-slate-500 ring-offset-2 scale-105'
            : 'hover:ring-2 hover:ring-slate-200 hover:ring-offset-1',
        ]"
        @click="activeColor = index"
      >
        <!-- Dual ring selection look from image -->
        <div
          v-if="activeColor === index"
          class="absolute inset-[-4px] rounded-full border border-slate-200 pointer-events-none transition-all"
        ></div>
      </button>
    </div>
  </div>
</template>
