<template>
  <div
    class="p-6 border-t border-border-light bg-surface-light z-20 space-y-5 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.02)]"
  >
    <div class="flex items-center justify-between gap-4">
      <div class="flex-1 space-y-2">
        <label
          class="text-[10px] font-semibold text-text-secondary uppercase tracking-wider"
          >Format</label
        >
        <div class="flex bg-slate-100 p-1 rounded-lg">
          <button
            class="flex-1 py-1 rounded-md bg-white shadow-sm text-[10px] font-medium text-primary"
          >
            PNG
          </button>
          <button
            class="flex-1 py-1 rounded-md text-[10px] font-medium text-text-secondary hover:text-text-main hover:bg-white/50 transition-colors"
          >
            JPG
          </button>
        </div>
      </div>
      <div class="flex-1 space-y-2">
        <label
          class="text-[10px] font-semibold text-text-secondary uppercase tracking-wider"
          >Scale</label
        >
        <div class="flex bg-slate-100 p-1 rounded-lg">
          <button
            class="flex-1 py-1 rounded-md text-[10px] font-medium text-text-secondary hover:text-text-main hover:bg-white/50 transition-colors"
          >
            1x
          </button>
          <button
            class="flex-1 py-1 rounded-md bg-white shadow-sm text-[10px] font-medium text-primary"
          >
            2x
          </button>
        </div>
      </div>
    </div>
    <div class="flex gap-3 pt-2">
      <button
        class="flex-1 h-10 flex items-center justify-center gap-2 bg-primary hover:bg-primary-hover text-white rounded-lg transition-all shadow-md shadow-primary/20 group"
      >
        <span class="text-xs font-semibold">Export Image</span>
        <span
          class="material-symbols-outlined text-[18px] group-hover:translate-y-0.5 transition-transform"
          >download</span
        >
      </button>
      <button
        class="size-10 flex items-center justify-center rounded-lg border border-border-light bg-white hover:bg-slate-50 text-text-secondary hover:text-primary transition-colors tooltip shadow-sm"
        title="Copy"
      >
        <span class="material-symbols-outlined text-[18px]">content_copy</span>
      </button>
    </div>
  </div>
</template>
