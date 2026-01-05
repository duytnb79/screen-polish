<script setup lang="ts">
import { ref } from "vue";

const showWatermark = ref(true);
const watermarkText = ref("ShotLy");
const onlyBackground = ref(false);
const watermarkColor = ref("#000000");
const activeDirection = ref("br"); // 'tl' | 'br'
</script>

<template>
  <div class="space-y-5 mb-6">
    <!-- Background Header -->
    <div class="space-y-3">
      <div class="flex items-center justify-between">
        <h3 class="text-[13px] font-bold text-text-main">DTO</h3>
        <button
          class="text-[12px] text-text-secondary flex items-center gap-0.5 hover:text-text-main transition-colors"
        >
          More
          <span class="material-symbols-outlined text-[16px]"
            >chevron_right</span
          >
        </button>
      </div>

      <!-- Swatches -->
      <div class="flex gap-2.5 overflow-x-auto pb-2 scrollbar-hide px-1 -mx-1">
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
        <button
          class="flex-none size-9 rounded-full bg-gradient-to-br from-pink-300 to-rose-300 hover:scale-105 transition-transform cursor-pointer shadow-sm"
        ></button>
      </div>
    </div>

    <!-- Watermark Section -->
    <div class="space-y-4">
      <div class="flex items-center justify-between">
        <h3 class="text-[13px] font-bold text-text-main">Watermark</h3>
        <button
          class="toggle-switch"
          :class="{ active: showWatermark }"
          @click="showWatermark = !showWatermark"
        >
          <span class="toggle-thumb"></span>
        </button>
      </div>

      <div
        v-if="showWatermark"
        class="space-y-4 animate-in fade-in slide-in-from-top-1 duration-200"
      >
        <!-- Input -->
        <input
          v-model="watermarkText"
          type="text"
          class="w-full h-9 rounded-lg border border-border-light px-3 text-[13px] text-text-main placeholder:text-gray-400 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all bg-white shadow-sm"
          placeholder="Enter text..."
        />

        <!-- Color -->
        <div class="flex items-center justify-between">
          <span class="text-[12px] font-medium text-text-main">Color</span>
          <button
            class="size-6 rounded border border-border-light bg-[url('https://www.transparenttextures.com/patterns/checkerboard-crosshatch.png')] shadow-sm hover:border-primary transition-colors"
          ></button>
        </div>

        <!-- Direction -->
        <div class="flex items-center justify-between">
          <span class="text-[12px] font-medium text-text-main">Direction</span>
          <div class="flex gap-0 -space-x-px">
            <button
              class="size-7 flex items-center justify-center border border-border-light bg-white first:rounded-l-md last:rounded-r-md hover:z-10 hover:border-primary/50 text-text-secondary"
              :class="{
                'bg-slate-50 text-primary border-primary/50 z-10':
                  activeDirection === 'tl',
              }"
              @click="activeDirection = 'tl'"
            >
              <span class="material-symbols-outlined text-[16px] rotate-180"
                >arrow_outward</span
              >
            </button>
            <button
              class="size-7 flex items-center justify-center border border-border-light bg-white first:rounded-l-md last:rounded-r-md hover:z-10 hover:border-primary/50 text-text-secondary"
              :class="{
                'bg-slate-50 text-primary border-primary/50 z-10':
                  activeDirection === 'br',
              }"
              @click="activeDirection = 'br'"
            >
              <span class="material-symbols-outlined text-[16px]"
                >arrow_outward</span
              >
            </button>
          </div>
        </div>

        <!-- Only Background -->
        <div class="flex items-center justify-between">
          <span class="text-[12px] font-medium text-text-main"
            >Only Background</span
          >
          <button
            class="toggle-switch scale-90 origin-right"
            :class="{ active: onlyBackground }"
            @click="onlyBackground = !onlyBackground"
          >
            <span class="toggle-thumb"></span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
