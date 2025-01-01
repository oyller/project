<template>
    <Content_Base>
        <div v-for="post in posts.posts" :key="post.id">
            <div class="card single-card">
                <div class="card-body">
                    {{ post.content }}
                    <button @click="delete_a_post(post.id)" type="button" class="btn btn-danger btn-sm">Delete</button>
                </div>
            </div>
        </div>
    </Content_Base>
</template>
   
<script>
import Content_Base from './Content_Base.vue'
import $ from 'jquery';
import { useStore } from 'vuex';

export default {
    name: 'Write_content',
    components: {
        Content_Base,
    },
    props: {
        posts: {
            type: Object,
            required: true,
        }
    },
    setup(props, context) {
        const store = useStore();
        const delete_a_post = (id) => {
            $.ajax({
                url: "https://app165.acapp.acwing.com.cn/myspace/post/",
                type: "DELETE",
                data: {
                    post_id: id,
                },
                headers: {
                    'Authorization': "Bearer " + store.state.user.access,
                },
                success(resp) {
                    if (resp.result == "success") {
                        context.emit('delete_a_post', id);
                    }
                }
            })
        }
        return {
            delete_a_post,
        }

    }
}
</script>
  
<style scoped>
.single-card {
    margin-bottom: 10px;
}

.single-card:hover {
    box-shadow: 2px 2px 10px lightgrey;
    cursor: pointer;
}

button {
    float: right;
    border-radius: 10%;
}
</style>