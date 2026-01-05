<template>
  <div class="space-y-6">
    <!-- Scale -->
    <div class="prop-group">
      <div class="prop-header">
        <label class="sidebar-label">
          <span class="material-symbols-outlined text-[18px]">straighten</span>
          Scale
        </label>
        <div class="prop-value">1.0</div>
      </div>
      <input
        type="range"
        class="prop-slider"
        min="0.5"
        max="2"
        step="0.1"
        value="1"
      />
    </div>

    <!-- Padding -->
    <div class="prop-group">
      <div class="prop-header">
        <label class="sidebar-label">
          <span class="material-symbols-outlined text-[18px]">padding</span>
          Padding
        </label>
        <div class="prop-value">64</div>
      </div>
      <input type="range" class="prop-slider" min="0" max="200" value="64" />
    </div>

    <!-- Radius -->
    <div class="prop-group">
      <div class="prop-header">
        <label class="sidebar-label">
          <span class="material-symbols-outlined text-[18px]"
            >rounded_corner</span
          >
          Radius
        </label>
        <div class="prop-value">16</div>
      </div>
      <input type="range" class="prop-slider" min="0" max="40" value="16" />
    </div>

    <!-- Shadow -->
    <div class="prop-group">
      <div class="prop-header">
        <label class="sidebar-label">
          <span class="material-symbols-outlined text-[18px]">blur_on</span>
          Shadow
        </label>
        <div class="prop-value">40</div>
      </div>
      <input type="range" class="prop-slider" min="0" max="100" value="40" />
    </div>
  </div>
</template>
