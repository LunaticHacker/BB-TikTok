var app = new Vue({
  el: "#app",
  data: {
    videos: [],
    state: "Loading...",
    name: "",
    title: "Bringing Back TikTok",
    signature: "Find videos by Username",
  },
  methods: {
    getTrending: async function () {
      try {
        this.state = "Loading...";
        this.videos = [];
        res = await fetch(
          "https://tiktokrestapi.herokuapp.com/trending"
        );
        json = await res.json();

        this.videos = json.collector;
        this.state = null;
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
