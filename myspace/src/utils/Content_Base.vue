<template>
    <div class="home">
        <div class="container">
            <div class="card ">
                <div class="card-body">
                    <slot></slot>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Content_Base',
    component: {



    }

}

</script>



<style  scoped>
.home {
    margin-top: 20px;
}
</style>