<template>
  <div class="p-6 border-t border-border-light bg-surface-light space-y-4">
    <div class="grid grid-cols-2 gap-4">
      <div class="space-y-2">
        <label class="text-[11px] font-medium text-text-secondary"
          >Format</label
        >
        <div class="segmented-group">
          <button class="segmented-btn active">PNG</button>
          <button class="segmented-btn inactive">JPG</button>
        </div>
      </div>
      <div class="space-y-2">
        <label class="text-[11px] font-medium text-text-secondary">Scale</label>
        <div class="segmented-group">
          <button class="segmented-btn inactive">1x</button>
          <button class="segmented-btn active">2x</button>
        </div>
      </div>
    </div>
    <div class="flex gap-3 pt-1">
      <button class="btn-primary flex-1">Export Image</button>
      <button class="btn-secondary size-10 flex-none bg-white">
        <span class="material-symbols-outlined text-[20px]">content_copy</span>
      </button>
    </div>
  </div>
</template>
