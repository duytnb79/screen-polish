<template>
  <div class="absolute bottom-6 left-6 z-30 flex items-center gap-3">
    <!-- Zoom Level Control -->
    <div
      class="flex items-center bg-white rounded-full shadow-medium border border-slate-100 p-1"
    >
      <button
        class="size-8 flex items-center justify-center rounded-full hover:bg-slate-50 text-text-secondary hover:text-text-main transition-colors"
        title="Zoom In"
      >
        <span class="material-symbols-outlined text-[20px]">zoom_in</span>
      </button>
      <span
        class="w-12 text-center font-medium text-text-main text-[13px] select-none"
        >55%</span
      >
      <button
        class="size-8 flex items-center justify-center rounded-full hover:bg-slate-50 text-text-secondary hover:text-text-main transition-colors"
        title="Zoom Out"
      >
        <span class="material-symbols-outlined text-[20px]">zoom_out</span>
      </button>
    </div>

    <!-- Fit Screen Button -->
    <button
      class="size-10 bg-white rounded-full shadow-medium border border-slate-100 flex items-center justify-center text-text-secondary hover:text-text-main hover:bg-slate-50 transition-colors"
      title="Fit to Screen"
    >
      <span class="material-symbols-outlined text-[20px]"
        >center_focus_strong</span
      >
    </button>
  </div>
</template>
