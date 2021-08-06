<template>
    <div>
        <headerbar />
        <searchInput />
        <searchHistory  />
        <homeFoot />
    </div>
</template>

<script>
    import headerbar from '../../components/header.vue';
    import searchInput from './searchInput.vue';
    import homeFoot from '../home/homeFoot.vue';
    import searchMain from './searchMain.vue'
    import searchHistory from './searchHistory.vue';
    export default {
        data() {
            return {
            }
        },
        methods: {
            getSearchList() {
                this.$store.state.searchList = JSON.parse(localStorage.getItem('middlePageKeyWords'))
            },
        },
        components: {
            headerbar,
            homeFoot,
            searchHistory,
            searchMain,
            searchInput
        },
        created() {
            this.getSearchList()
        }
    }
</script>

<style scoped>
  
</style>