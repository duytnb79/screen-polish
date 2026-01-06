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
    <div class="grid grid-cols-4 gap-2">
      <button class="btn-icon" title="Crop">
        <span class="material-symbols-outlined text-[18px] text-slate-600"
          >crop</span
        >
      </button>
      <button class="btn-icon" title="Flip Horizontal">
        <span class="material-symbols-outlined text-[18px] text-slate-600"
          >swap_horiz</span
        >
      </button>
      <button class="btn-icon" title="Flip Vertical">
        <span
          class="material-symbols-outlined text-[18px] rotate-90 text-slate-600"
          >swap_horiz</span
        >
      </button>
      <button class="btn-icon" title="Layout">
        <span class="material-symbols-outlined text-[18px] text-slate-600"
          >grid_view</span
        >
      </button>
    </div>
  </div>
</template>
