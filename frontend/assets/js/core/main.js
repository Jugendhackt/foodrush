
var url_string = window.location.href;
var url = new URL(url_string);
var id = url.searchParams.get("id");
console.log(id);

var app = new Vue({
    el: '#app',
    data: {
      offerJson: [],
      foodJson: []
    },
    mounted () {
      axios
        .get('http://localhost:3000/bestellungen/' + id, {}, {
          headers: {
              'Content-Type': 'application/json',
          }
      })
        .then(response => (this.offerJson = response.data));
        axios
          .get('http://localhost:3000/artikel/5b255307dd165d57b707a769', {}, {
        headers: {
            'Content-Type': 'application/json',
          }
      })
          .then(response => (this.foodJson = response.data))
    },
    computed: {
      getPrice () {
        return this.offerJson["preis"]
      },
      getNormalPrice () {
        return this.foodJson["preis"]
      }
    },
  })
 





  $(window).on('load', function(){ $("body").show();});
