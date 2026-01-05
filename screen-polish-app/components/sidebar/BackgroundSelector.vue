<script setup lang="ts">
import { ref } from "vue";
</script>

<template>
  <div class="space-y-5">
    <!-- Background Header -->
    <div class="space-y-3">
      <div class="sidebar-title">
        <h3>Background</h3>
        <button
          class="text-[12px] text-text-secondary flex items-center gap-0.5 hover:text-text-main transition-colors lowercase font-medium"
        >
          more
          <span class="material-symbols-outlined text-[16px]"
            >chevron_right</span
          >
        </button>
      </div>

      <!-- Swatches -->
      <div
        class="flex gap-2.5 overflow-x-auto pb-2 scrollbar-hide px-1 py-1 -mx-1"
      >
        <button
          class="flex-none size-9 rounded-full ring-2 ring-primary ring-offset-2 bg-gradient-to-br from-[#A594F9] to-[#8070F0] cursor-pointer"
        ></button>
        <button
          class="flex-none size-9 rounded-full bg-gradient-to-br from-rose-400 to-orange-300 hover:scale-105 transition-transform cursor-pointer shadow-sm"
        ></button>
        <button
          class="flex-none size-9 rounded-full bg-gradient-to-br from-purple-500 to-indigo-500 hover:scale-105 transition-transform cursor-pointer shadow-sm"
        ></button>
        <button
          class="flex-none size-9 rounded-full bg-gradient-to-br from-orange-300 to-yellow-200 hover:scale-105 transition-transform cursor-pointer shadow-sm"
        ></button>
        <button
          class="flex-none size-9 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 hover:scale-105 transition-transform cursor-pointer shadow-sm"
        ></button>
        <button
          class="flex-none size-9 rounded-full bg-gradient-to-br from-fuchsia-400 to-pink-500 hover:scale-105 transition-transform cursor-pointer shadow-sm"
        ></button>
      </div>
    </div>
  </div>
</template>
