<template>
    <div>
        
        <router-link :to="{name:'home_index'}">Home</router-link>
        <router-link :to="{name:'blog_all'}">blog_all</router-link>
        <router-link :to="{name:'blog_new'}">Новый пост в блоге</router-link>
        <router-link :to="{name:'blog_edit'}">Редактирование поста</router-link>
    </div>
</template>

<script>
export default {
  data() {
    return {
      data: []
    };
  }
};
</script>
