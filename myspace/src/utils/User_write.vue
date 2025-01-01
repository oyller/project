<template>
    <Content_Base>
        <div class="p">编辑帖子:</div>
        <div class="form-floating">
            <textarea v-model="content" class="form-control" id="floatingTextarea"></textarea>
            <label for="floatingTextarea">请输入:</label>
        </div>
        <button @click="post_a_posts" type="button" class="btn btn-info">submit</button>

    </Content_Base>
</template>
   
<script>
import Content_Base from './Content_Base.vue'
import { ref } from 'vue';
import $ from 'jquery'
import { useStore } from 'vuex';

export default {
    name: 'User_write',
    components: {
        Content_Base,
    },
    setup(props, context) {
        let content = ref('');
        const store = useStore();
        const post_a_posts = () => {
            $.ajax({
                url: "https://app165.acapp.acwing.com.cn/myspace/post/",
                type: "POST",
                data: {
                    content: content.value,
                },
                headers: {
                    'Authorization': "Bearer " + store.state.user.access,
                },
                success(resp) {
                    if (resp.result == "success") {
                        context.emit('post_a_posts', content.value);
                        content.value = '';
                    }
                },
                error() {
                    console.log("failure");
                }
            })
        }

        return {
            content,
            post_a_posts,
        }
    }
}
</script>
  
<style scoped>
.p {
    font-family: Open Sans;
    margin-bottom: 10px;
    font-size: 15px;
}

button {
    margin-top: 10px;

}

#floatingTextarea {
    height: 200px;

}
</style>