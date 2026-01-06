<template>
  <div class="sidebar-section">
    <div class="sidebar-title !mb-1.5">
      <div class="flex items-center gap-1.5">
        <span class="material-symbols-outlined text-[18px] text-slate-600"
          >bolt</span
        >
        <h3
          class="capitalize font-bold text-slate-800 text-[13px] tracking-tight"
        >
          Quick Actions
        </h3>
      </div>
    </div>
    <div class="grid grid-cols-4 gap-1 px-1">
      <button
        class="flex items-center justify-center p-2 rounded-lg hover:bg-slate-100 transition-colors text-slate-500 hover:text-indigo-600"
        title="Crop"
      >
        <span class="material-symbols-outlined text-[20px]">crop</span>
      </button>
      <button
        class="flex items-center justify-center p-2 rounded-lg hover:bg-slate-100 transition-colors text-slate-500 hover:text-indigo-600"
        title="Flip Horizontal"
      >
        <span class="material-symbols-outlined text-[20px]">swap_horiz</span>
      </button>
      <button
        class="flex items-center justify-center p-2 rounded-lg hover:bg-slate-100 transition-colors text-slate-500 hover:text-indigo-600"
        title="Flip Vertical"
      >
        <span class="material-symbols-outlined text-[20px] rotate-90"
          >swap_horiz</span
        >
      </button>
      <button
        class="flex items-center justify-center p-2 rounded-lg hover:bg-slate-100 transition-colors text-slate-500 hover:text-indigo-600"
        title="Layout"
      >
        <span class="material-symbols-outlined text-[20px]">grid_view</span>
      </button>
    </div>
  </div>
</template>
