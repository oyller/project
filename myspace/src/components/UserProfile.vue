<template>
    <Content_Base>
        <div class="row">
            <div class="col-4">
                <User_read @follow="follow" @unfollow="unfollow" :user="user"></User_read>
                <User_write v-if="is_me" @post_a_posts="post_a_posts"></User_write>
            </div>
            <div class="col-8">
                <Write_content @delete_a_post="delete_a_post" :posts="posts"></Write_content>
            </div>
        </div>
    </Content_Base>
</template>
   
<script>
import { reactive } from 'vue'
import Content_Base from '../utils/Content_Base'
import User_read from '../utils/User_read.vue'
import User_write from '../utils/User_write.vue'
import Write_content from '../utils/Write_content.vue'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex';
import { computed } from 'vue'
import $ from 'jquery';

export default {
    name: 'UserProfile_view',
    components: {
        Content_Base,
        User_read,
        User_write,
        Write_content,
    },
    setup() {
        const route = useRoute();
        const store = useStore();
        const user = reactive({
        })
        const userId = parseInt(route.params.userId);
        $.ajax({
            url: "https://app165.acapp.acwing.com.cn/myspace/getinfo/",
            type: "GET",
            data: {
                user_id: userId,
            },
            headers: {
                'Authorization': "Bearer " + store.state.user.access,
            },
            success(resp) {
                user.id = resp.id;
                user.username = resp.username;
                user.photo = resp.photo;
                user.followerCount = resp.followerCount;
                user.is_followed = resp.is_followed;
            },
        })

        let posts = reactive({

        });

        $.ajax({
            url: "https://app165.acapp.acwing.com.cn/myspace/post/",
            type: "GET",
            data: {
                user_id: userId,
            },
            headers: {
                'Authorization': "Bearer " + store.state.user.access,
            },
            success(resp) {
                posts.count = resp.length;
                posts.posts = resp;
            }
        })

        const is_me = computed(() => userId === store.state.user.id);

        const follow = () => {
            if (user.is_followed) return;
            user.followerCount++;
            user.is_followed = true;
        }

        const unfollow = () => {
            if (!user.is_followed)
                return;
            user.followerCount--;
            user.is_followed = false;
        }

        const post_a_posts = (content) => {
            posts.posts.reverse();
            posts.posts.push({
                id: posts.count + 1,
                userId: 1,
                content,
            })
            posts.count++;
            posts.posts.reverse();
        }

        const delete_a_post = (id) => {
            let s = posts.posts.filter(function (obj) {
                if (obj.id != id)
                    return obj;
            }
            )
            posts.posts = s;
        }

        return {
            user,
            posts,
            follow,
            unfollow,
            post_a_posts,
            delete_a_post,
            is_me,
        }
    }
}
</script>
  
<style scoped>
.container {
    display: flex;
    margin-top: 30px;
}

.c1 {
    flex: 2;
    margin-right: 20px;
}

.c2 {
    flex: 4;
}

.add {
    height: 400px;
}
</style>
  