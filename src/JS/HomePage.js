import axios from "axios";
import { mapGetters } from "vuex";
export default {
    name: "HomePage",
    data() {
        return {
            posts: [],
            categories: [],
            searchKey: "",
            status: false,
        };
    },
    computed: {
        ...mapGetters(["getToken", "getUser"]),
    },
    methods: {
        logout() {
            this.$store.dispatch("setToken", null);
            this.$router.push("/login");
        },
        async getPost() {
            let response = await axios.get("http://127.0.0.1:8000/api/post_list");
            for (let i = 0; i < response.data.data.length; i++) {
                if (response.data.data[i].image == null) {
                    response.data.data[i].image =
                        "http://127.0.0.1:8000/default/default-image.jpg";
                } else {
                    response.data.data[i].image =
                        "http://127.0.0.1:8000/storage/images/" +
                        response.data.data[i].image;
                }
            }
            this.posts = response.data.data;
        },
        async getCategory() {
            let response = await axios.get("http://127.0.0.1:8000/api/category_list");
            this.categories = response.data.data;
        },
        search() {
            if (this.searchKey != "") {
                let postss = this.posts.filter((post) =>
                    post.title.toLowerCase().includes(this.searchKey.toLowerCase())
                );
                this.posts = postss;
            } else {
                this.getPost();
            }
        },
        async searchCategory(searchPost) {
            if (searchPost == "") {
                this.getPost();
            } else {
                let searchData = {
                    key: searchPost,
                };
                let response = await axios.post(
                    "http://127.0.0.1:8000/api/search_category",
                    searchData
                );
                for (let i = 0; i < response.data.post.length; i++) {
                    if (response.data.post[i].image == null) {
                        response.data.post[i].image =
                            "http://127.0.0.1:8000/default/default-image.jpg";
                    } else {
                        response.data.post[i].image =
                            "http://127.0.0.1:8000/storage/images/" +
                            response.data.post[i].image;
                    }
                }
                this.posts = response.data.post;
            }
        },
        postDetails(id) {
            this.$router.push({
                name: "post_detail",
                params: {
                    key: id,
                },
            });
        },
        checkToken() {
            if (
                this.getToken != null &&
                this.getToken != undefined &&
                this.getToken != ""
            ) {
                this.status = true;
            } else {
                this.status = false;
            }
        },
    },
    mounted() {
        this.checkToken();
        this.getPost();
        this.getCategory();
    },
};