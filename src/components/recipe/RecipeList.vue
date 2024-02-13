<template>
  <div class="recipe__list-recipe row">
    <!-- Recipe Item Code -->
    <RecipeCard
      v-for="(recipe, index) in recipes"
      :key="index"
      :recipe="recipe"
    />
  </div>
</template>

<script setup>
import RecipeCard from './RecipeCard.vue';

defineProps({
  recipes: Array
});
</script>