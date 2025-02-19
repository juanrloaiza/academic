<script setup lang="ts">
const theme = ref("light"); // Default theme

// Check for saved theme in localStorage
onMounted(() => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    theme.value = savedTheme;
    document.documentElement.setAttribute("data-theme", savedTheme);
    document.documentElement.classList.add(savedTheme);
  }
});

// Toggle theme and save preference
const toggleTheme = () => {
  const currentTheme = theme.value;
  theme.value = theme.value === "light" ? "dark" : "light";
  document.documentElement.setAttribute("data-theme", theme.value);
  localStorage.setItem("theme", theme.value);
  document.documentElement.classList.remove(currentTheme);
  document.documentElement.classList.add(theme.value);
};
</script>

<template>
  <button @click="toggleTheme">
    {{ theme === "dark" ? "Light Mode" : "Dark Mode" }}
  </button>
</template>
