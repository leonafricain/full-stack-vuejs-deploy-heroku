<template>
  <div id="app">
    <h1 style="text-align: center">Weather App</h1>
    <div class="blok">
    <input type="text" placeholder="enter your city" v-model="city">
    <button @click="addCity">Add city</button>
    </div>
    <!-- <div v-for="city in cities" :key="city.id">
      <ul>
        <li>{{city.id}}{{city.city_name}}</li>
      </ul>

    </div> -->
    <pre>
      {{weather}}
    </pre>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  data () {
    return {
      city: '',
      cities: [],
      weather: {}
    }
  },

  methods:{
    getCities () {
      axios.get('/api/cities')
      .then(result  => {
        console.log("resultat =>",result);
        this.cities = result.data
      }).catch(err => {
        console.log(err)
      })
    },
    addCity () {
     /*  axios.post('/api/cities', {
        city: this.city
      }).then(result => {
        console.log(result)
        this.cities = this.getCities()
      }).catch (err => console.log(err));
 */
    axios.get(`/api/weather/${this.city}`)
    .then(resultat => {
      console.log('weather result', resultat.data)
      this.weather = resultat.data
    }).catch (err => {
      console.log(err.message)
    })
    }
  },
  mounted() {
    this.getCities()
  }
}
</script>
<style>
#app{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
}
#app h1{
  font-family: Arial, sans-serif;
  color: rgb(66, 107, 219);
  padding: 23px;
  text-shadow: 1px 1px 4px rgb(212, 200, 200);
  margin: 0 auto;

}
div input{
  padding: 10px;
  width:100%;
  max-width: 40%;
  border-radius: 5px;
  border:dotted 1px greenyellow;
  box-shadow: 1px 2px 2px rgba(0,0,0, .3);
  color: green;
  font-size: 11px;

}

.blok {
  display: block;
  width: 100%;
  display: flex;
  justify-content: center;
  position: relative;
}
button{
  background-color: blueviolet;
  color: white;
  border:none;
  padding: 3px 12px;
  border-radius: 4px;
  box-shadow: 2px 2px 4px grey;
  cursor: pointer;
}
</style>