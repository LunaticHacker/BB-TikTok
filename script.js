var app = new Vue({
  el: "#app",
  data: {
    videos: [],
    state: "Loading...",
    avatar: "https://placekitten.com/100/100",
    name: "",
    title: "Bringing Back TikTok",
    signature: "Find videos by Username",
  },
  methods: {
    getTrending: async function () {
      try {
        this.state = "Loading...";
        this.videos = [];
        this.avatar = "https:placekitten.com/100/100";
        this.title = "Bringing Back TikTok";
        this.signature = "Find videos by Username";
        res = await fetch(
          "https://cors-anywhere.herokuapp.com/https://tiktokrestapi.herokuapp.com/trending"
        );
        json = await res.json();

        this.videos = json.collector;
        this.state = null;
      } catch (error) {
        this.videos = [];
        this.state = null;
      }
    },
    getUser: async function () {
      try {
        this.state = "Loading...";
        this.videos = [];
        res = await fetch(
          `https://cors-anywhere.herokuapp.com/https://tiktokrestapi.herokuapp.com/user/${this.name}`
        );
        json = await res.json();
        this.videos = json.collector;
        this.state = null;
        if (this.videos.length > 0) {
          this.avatar = this.videos[0].authorMeta.avatar;
          this.title = this.videos[0].authorMeta.nickName;
          this.signature = this.videos[0].authorMeta.signature;
        }
      } catch (error) {
        this.videos = [];
        this.state = null;
      }
    },
  },
  beforeMount() {
    this.getTrending();
  },
});
