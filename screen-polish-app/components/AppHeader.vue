<template>
  <header
    class="h-11 flex-none bg-surface-light border-b border-border-light flex items-center justify-between px-3 z-20"
  >
    <!-- Left: Logo -->
    <div class="flex items-center gap-2">
      <div
        class="size-7 rounded bg-indigo-600 text-white flex items-center justify-center shadow-sm"
      >
        <span class="material-symbols-outlined text-[18px]">auto_awesome</span>
      </div>
      <h1 class="text-sm font-bold tracking-tight text-text-main">
        Screen<span class="text-primary">Polish</span>
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
        class="size-7 rounded flex items-center justify-center text-text-secondary hover:bg-slate-100 hover:text-primary transition-colors"
        title="Support"
      >
        <span class="material-symbols-outlined text-[18px] text-blue-500"
          >help</span
        >
      </button>
      <button
        class="size-7 rounded flex items-center justify-center text-text-secondary hover:bg-slate-100 hover:text-indigo-600 transition-colors"
        title="Settings"
      >
        <span class="material-symbols-outlined text-[18px] text-slate-500"
          >settings</span
        >
      </button>
    </div>
  </header>
</template>
