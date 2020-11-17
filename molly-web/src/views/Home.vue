<template>
  <div class="home">
    <HomeView />
  </div>
</template>

<script>
// @ is an alias to /src
import HomeView from "@/components/home/HomeView";

export default {
  name: "Home",
  components: { HomeView },
  created() {
    // let storage = this.firebase.storage();
    // storage
    //   .child("resume.docx")
    //   .getDownloadURL()
    //   .then(function(url) {
    //     var img = document.getElementById("myimg");
    //     img.src = url;
    //   })
    //   .catch(function(error) {
    //     // Handle any errors
    //     console.log(error);
    //   });
  },
};
</script>
