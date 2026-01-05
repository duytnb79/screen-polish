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
        <button class="toggle-switch active" id="dark-mode">
          <span class="toggle-thumb"></span>
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
