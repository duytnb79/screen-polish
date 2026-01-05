<template>
  <header
    class="h-11 flex-none bg-surface-light border-b border-border-light flex items-center justify-between px-3 z-20"
  >
    <!-- Left: Logo -->
    <div class="flex items-center gap-2">
      <div
        class="size-7 rounded bg-text-main text-white flex items-center justify-center shadow-sm"
      >
        <span class="material-symbols-outlined text-[18px]">auto_awesome</span>
      </div>
      <h1 class="text-sm font-semibold tracking-tight text-text-main">
        ScreenPolish
      </h1>
    </div>

    <!-- Center: File Info -->
    <HeaderFileInfo />

    <!-- Right: Actions -->
    <div class="flex items-center gap-1">
      <button
        class="h-7 px-2.5 rounded text-text-secondary hover:text-text-main hover:bg-slate-100 transition-colors text-[12px] font-medium"
      >
        Presets
      </button>
      <button
        class="h-7 px-2.5 rounded text-text-secondary hover:text-text-main hover:bg-slate-100 transition-colors text-[12px] font-medium"
      >
        History
      </button>
      <div class="w-px h-3 bg-border-light mx-1"></div>
      <button
        class="size-7 rounded flex items-center justify-center text-text-secondary hover:bg-slate-100 hover:text-text-main transition-colors"
        title="Support"
      >
        <span class="material-symbols-outlined text-[18px]">help</span>
      </button>
      <button
        class="size-7 rounded flex items-center justify-center text-text-secondary hover:bg-slate-100 hover:text-text-main transition-colors"
        title="Settings"
      >
        <span class="material-symbols-outlined text-[18px]">settings</span>
      </button>
    </div>
  </header>
</template>
