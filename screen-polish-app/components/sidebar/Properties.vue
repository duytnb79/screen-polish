<script setup lang="ts">
import { ref, computed } from "vue";

const props = ref({
  scale: 1.0,
  padding: 64,
  radius: 16,
  shadow: 40,
});

const getGradientStyle = (value: number, min: number, max: number) => {
  const percentage = ((value - min) / (max - min)) * 100;
  return {
    background: `linear-gradient(to right, #a5b4fc ${percentage}%, #f1f5f9 ${percentage}%)`,
  };
};
</script>

<template>
  <div class="space-y-4 pt-3 border-t border-border-light">
    <!-- Scale -->
    <div class="prop-group">
      <div class="prop-header">
        <label class="sidebar-label">
          <span class="material-symbols-outlined text-[18px]">straighten</span>
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
          <span class="material-symbols-outlined text-[18px]">padding</span>
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

    <!-- Radius -->
    <div class="prop-group">
      <div class="prop-header">
        <label class="sidebar-label">
          <span class="material-symbols-outlined text-[18px]"
            >rounded_corner</span
          >
          Radius
        </label>
        <div class="prop-value">{{ props.radius }}</div>
      </div>
      <input
        v-model.number="props.radius"
        type="range"
        class="prop-slider"
        min="0"
        max="40"
        :style="getGradientStyle(props.radius, 0, 40)"
      />
    </div>

    <!-- Shadow -->
    <div class="prop-group">
      <div class="prop-header">
        <label class="sidebar-label">
          <span class="material-symbols-outlined text-[18px]">blur_on</span>
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
