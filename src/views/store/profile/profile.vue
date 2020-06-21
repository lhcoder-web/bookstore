<template>
    <div id="profile">
       <toptitle :uname="currentUser"></toptitle>
       <btns></btns>
       <lists :uname="currentUser"></lists>
    </div>
</template>

<script>
import { userMixin } from '@/utils/mixin'

import toptitle from './children/toptitle';
import btns from './children/btns';
import lists from './children/lists';
export default {
    mixins:[userMixin],
    components: {
        toptitle,
        btns,
        lists,
    },
};
</script>

<style scoped>

</style>
