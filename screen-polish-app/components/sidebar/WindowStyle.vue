<template>
  <div class="sidebar-section">
    <div class="sidebar-title">
      <h3>Window Frame</h3>
      <div class="flex items-center gap-2">
        <label
          class="text-[11px] text-text-secondary font-medium cursor-pointer select-none"
          for="dark-mode"
          >Dark Mode</label
        >
        <button
          class="relative inline-flex h-5 w-9 items-center rounded-full bg-indigo-100/50 border border-indigo-200 transition-colors focus:outline-none"
          id="dark-mode"
        >
          <span
            class="inline-block h-3.5 w-3.5 transform translate-x-4 rounded-full bg-primary shadow-sm transition-transform"
          ></span>
        </button>
      </div>
    </div>

    <div class="segmented-group">
      <button class="segmented-btn active">MacOS</button>
      <button class="segmented-btn inactive">Win</button>
      <button class="segmented-btn inactive">Glass</button>
      <button class="segmented-btn inactive">None</button>
    </div>
  </div>
</template>
