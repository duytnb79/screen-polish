<script setup lang="ts">
import { ref } from "vue";

const activeRadius = ref("md");

const radiusOptions = [
  { id: "none", label: "None", class: "rounded-none", radius: 0 },
  { id: "md", label: "Medium", class: "rounded-md", radius: 4 },
  { id: "lg", label: "Large", class: "rounded-lg", radius: 6 },
  { id: "xl", label: "Extra Large", class: "rounded-xl", radius: 8 },
];

const getCornerPath = (radius: number) => {
  if (radius === 0) {
    return "M 24 4 L 24 24 L 4 24";
  }
  const r = radius;
  return `M 24 4 L 24 ${24 - r} Q 24 24 ${24 - r} 24 L 4 24`;
};
</script>

<template>
  <div class="sidebar-section">
    <div class="sidebar-title !mb-1.5">
      <div class="flex items-center gap-1.5">
        <span class="material-symbols-outlined text-[18px] text-slate-600"
          >rounded_corner</span
        >
        <h3
          class="capitalize font-bold text-slate-800 text-[13px] tracking-tight"
        >
          Radius
        </h3>
      </div>
    </div>

    <div class="flex gap-2 pb-1 overflow-x-auto scrollbar-hide p-2">
      <button
        v-for="option in radiusOptions"
        :key="option.id"
        class="flex-none h-10 w-16 rounded-lg border-2 transition-all overflow-hidden bg-[#f0f2f5] group relative"
        :class="
          activeRadius === option.id
            ? 'border-indigo-500 ring-1 ring-indigo-200'
            : 'border-transparent hover:border-slate-300'
        "
        @click="activeRadius = option.id"
      >
        <!-- Focused Corner Preview with Thicker Edge -->
        <div
          class="absolute top-[30%] left-[30%] w-[80px] h-[80px] bg-white border-[4px] border-slate-400 shadow-lg"
          :style="{ borderRadius: option.radius + 'px' }"
        ></div>
      </button>
    </div>
  </div>
</template>
