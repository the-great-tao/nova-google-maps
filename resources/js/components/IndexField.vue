<template>
    <span>{{ address }}</span>
</template>

<script>
    export default {
        props: ['resourceName', 'field'],

        computed: {
            address() {
                let value = this.field.value;

                if (!value) return '--';

                return value.value;
            }
        }
    }
</script>
