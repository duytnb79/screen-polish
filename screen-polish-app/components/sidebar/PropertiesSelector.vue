<script setup lang="ts">
import { ref, computed } from "vue";

const props = ref({
  scale: 1.0,
  padding: 64,
  shadow: 40,
});

const getGradientStyle = (value: number, min: number, max: number) => {
  const percentage = ((value - min) / (max - min)) * 100;
  return {
    background: `linear-gradient(to right, #94a3b8 ${percentage}%, #f1f5f9 ${percentage}%)`,
  };
};
</script>

<template>
  <div class="sidebar-section">
    <div class="sidebar-title">
      <div class="flex items-center gap-1.5">
        <h3 class="capitalize">Properties</h3>
      </div>
    </div>
    <!-- Scale -->
    <div class="prop-group">
      <div class="prop-header">
        <label class="sidebar-label">
          <span class="material-symbols-outlined text-[16px] text-slate-600"
            >straighten</span
          >
          Scale
        </label>
        <div class="prop-value">{{ props.scale }}</div>
      </div>
      <input
        v-model.number="props.scale"
        type="range"
        class="prop-slider"
        min="0.5"
        max="2.0"
        step="0.1"
        :style="getGradientStyle(props.scale, 0.5, 2.0)"
      />
    </div>

    <!-- Padding -->
    <div class="prop-group">
      <div class="prop-header">
        <label class="sidebar-label">
          <span class="material-symbols-outlined text-[16px] text-slate-600"
            >padding</span
          >
          Padding
        </label>
        <div class="prop-value">{{ props.padding }}</div>
      </div>
      <input
        v-model.number="props.padding"
        type="range"
        class="prop-slider"
        min="0"
        max="200"
        :style="getGradientStyle(props.padding, 0, 200)"
      />
    </div>

    <!-- Shadow -->
    <div class="prop-group">
      <div class="prop-header">
        <label class="sidebar-label">
          <span class="material-symbols-outlined text-[16px] text-slate-600"
            >blur_on</span
          >
          Shadow
        </label>
        <div class="prop-value">{{ props.shadow }}</div>
      </div>
      <input
        v-model.number="props.shadow"
        type="range"
        class="prop-slider"
        min="0"
        max="100"
        :style="getGradientStyle(props.shadow, 0, 100)"
      />
    </div>
  </div>
</template>
