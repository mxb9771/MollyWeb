<template>
  <div :style="backgroundStyle" id="home-container">
    <b-container>
      <b-row>
        <b-col id="name-container">
          <h1 id="name-head">Molly Enstice</h1>
          <p id="sub-head">Actor - Singer - Dancer</p>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <b-carousel v-model="curSlide" :interval="4000" controls indicators>
            <b-carousel-slide
              caption="First slide"
              img-src="https://i.picsum.photos/id/1038/1024/480.jpg?hmac=dPekPaa3JZG1nQ_1t8deQc3YxB0T1u1MQZhJ0kRHcxg"
            ></b-carousel-slide>
            <b-carousel-slide
              img-src="https://picsum.photos/1024/480/?image=54"
            >
              <h1>Hello world!</h1>
            </b-carousel-slide>
          </b-carousel>
        </b-col>
      </b-row>
      <b-row id="content-row">
        <b-col>
          <div id="resume-container">
            <p class="content-head-text">Resume</p>
            <Resume />
          </div>
        </b-col>
        <b-col>
          <div id="about-container">
            <p class="content-head-text">About Me</p>
            <p class="default-text">
              Hello!<br />
              My name is Molly. I am currently pursuing my musical theater major
              a Nazareth College. My dream is to one day make it to broadway!
            </p>
          </div>
          <div id="contact-container">
            <p class="content-head-text">Contact</p>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Resume from "@/components/home/local/Resume";
export default {
  data: function() {
    return {
      curSlide: 0,
      styles: ["#81ecec", "#74b9ff"],
      backgroundStyle: {
        backgroundColor: "#81ecec",
      },
    };
  },
  components: {
    Resume,
  },
  methods: {
    logError(event) {
      console.log(event);
    },
  },
  watch: {
    curSlide: function() {
      this.backgroundStyle.backgroundColor = this.styles[this.curSlide];
    },
  },
};
</script>

<style scoped>
#home-container {
  width: 100%;
  padding-bottom: 20px;
  transition: background-color 1s ease 0.3s;
}

#resume {
  width: 100px;
  height: 100px;
}
#content-row {
  margin-top: 40px;
}
#name-container {
  color: #2d3436;
}
#name-head {
  font-size: 390%;
  font-family: "Amatic SC";
  font-weight: bold;
}
#sub-head {
  font-family: "Amatic SC";
  font-size: 200%;
}
#about-container {
  height: 400px;
  background-color: #b2bec3;
}
#contact-container {
  height: 200px;
  background-color: #b2bec3;
  margin-top: 20px;
}
#resume-container {
  background-color: #b2bec3;
  height: 620px;
}
.content-head-text {
  font-family: "Amatic SC";
  font-size: 300%;
  color: #ff7675;
  font-weight: 600;
}
.default-text {
  font-family: cursive;
  font-weight: bold;
  margin: 5px;
  font-size: 120%;
  color: #4b4a48;
  text-align: left;
}
</style>
