Vue.component('thing', {
  template: '<h2>a <i>thingy</i> <b>component</b></h2>'
})

Vue.component('thingprops', {
  props: ['task', 'message'],
  template: '<p>{{task.name}}({{task.value}}) — {{message}}</p>'
})

Vue.component('person', {
  props: ['person'],
  template: '<li>{{person.name}}</li>'
})

Vue.component('lines', {
  props: ['stats'],
  template: '#lines-tmpl',

})

var apiURL = "http://swapi.co/api/";
var app = new Vue({
  el: '#app',
  data: { 
    message: "HELLO", 
    link:"https://vuejs.org/v2/guide/index.html",
    adate: new Date(),
    seen: true,
    tasks: [{name:"foo", value:0},{name:"bar", value:1},{name:"baz", value:2}],
    x:'x',
    y:'y',
    z:'z',
    people: null,
    planets: []
  },
  methods: {
    doIt: function () {
      this.message = "Did It"
    },
    fetchPeople: function () {
      var self = this;
      $.get( apiURL + 'people', function( data ) {
          self.people = data.results;
      });
    },
    doPlanetStuff: function () {
      var self = this
      $.get( apiURL + 'planets', function( data ) {
        for (var i = 0; i < data.results.length; i++) {
          self.planets.push([data.results[i].name, data.results[i].diameter])
        }
      });

    }
  }
}).fetchPeople();

// app.tasks.push({ name: 'New item' })

// A line chart
var data = {
  labels: ['1', '2', '3', '4', '5', '6'],
  series: [
    {
      data: [1, 2, 3, 5, 8, 13]
    }
  ]
};
var options = {
  axisX: {
    labelInterpolationFnc: function(value) {
      return 'Calendar Week ' + value;
    }
  }
};
var responsiveOptions = [
  ['screen and (min-width: 641px) and (max-width: 1024px)', {
    showPoint: false,
    axisX: {
      labelInterpolationFnc: function(value) {
        return 'Week ' + value;
      }
    }
  }],
  ['screen and (max-width: 640px)', {
    showLine: false,
    axisX: {
      labelInterpolationFnc: function(value) {
        return 'W' + value;
      }
    }
  }]
];
new Chartist.Line('#chart', data, options, responsiveOptions);

var data2 = {
  labels: ['Bananas', 'Apples', 'Grapes'],
  series: [20, 15, 40]
};
var options2 = {
  labelInterpolationFnc: function(value) {
    return value[0]
  }
};
var responsiveOptions2 = [
  ['screen and (min-width: 640px)', {
    chartPadding: 30,
    labelOffset: 100,
    labelDirection: 'explode',
    labelInterpolationFnc: function(value) {
      return value;
    }
  }],
  ['screen and (min-width: 1024px)', {
    labelOffset: 80,
    chartPadding: 20
  }]
];
new Chartist.Pie('.ct-chart', data2, options2, responsiveOptions2);


// The following code is based off a toggle menu by @Bradcomp
// source: https://gist.github.com/Bradcomp/a9ef2ef322a8e8017443b626208999c1
(function() {
    var burger = document.querySelector('.nav-toggle');
    var menu = document.querySelector('.nav-menu');
    burger.addEventListener('click', function() {
        burger.classList.toggle('is-active');
        menu.classList.toggle('is-active');
    });
})();