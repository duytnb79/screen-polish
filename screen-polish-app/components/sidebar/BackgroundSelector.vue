<template>
  <div class="sidebar-section">
    <div class="sidebar-title">
      <h3>Background</h3>
      <div class="segmented-group">
        <button class="segmented-btn px-3 active">Gradient</button>
        <button class="segmented-btn px-3 inactive">Solid</button>
        <button class="segmented-btn px-3 inactive">Image</button>
      </div>
    </div>

    <div class="flex gap-3 overflow-x-auto pb-2 scrollbar-hide px-0.5">
      <button
        class="color-swatch active bg-gradient-to-br from-[#A594F9] to-[#8070F0]"
      ></button>
      <button
        class="color-swatch bg-gradient-to-br from-cyan-300 to-blue-400 hidden md:block"
      ></button>
      <button
        class="color-swatch bg-gradient-to-br from-orange-200 to-rose-300"
      ></button>
      <button
        class="color-swatch bg-gradient-to-br from-emerald-300 to-teal-400"
      ></button>
      <button class="color-swatch bg-[#1A202C]"></button>
      <button
        class="color-swatch bg-white border border-dashed border-gray-300 flex items-center justify-center hover:border-primary hover:text-primary text-text-secondary"
      >
        <span class="material-symbols-outlined text-[20px]">add</span>
      </button>
    </div>

    <div
      class="flex items-center justify-between border-b border-border-light pb-6"
    >
      <span class="text-[12px] font-medium text-text-secondary">Watermark</span>
      <button class="toggle-switch">
        <span class="toggle-thumb"></span>
      </button>
    </div>
  </div>
</template>
