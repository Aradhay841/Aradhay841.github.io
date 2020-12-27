function removeItem(array, item){
    for(var i in array){
        if(array[i]==item){
            array.splice(i,1);
            break;
        }
    }
}
function ch(_rompt=null,force=false){
  _rompt=_rompt==null?'Enter your name':_rompt
  let user = document.getElementById('user')
  let name =localStorage.getItem('user')
  if (/^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/g.test(name)) {
    user.innerText='Logged in as ' + String(name)
    localStorage.setItem('user',name)
  } else {
    ch('Invalid name')
  }
}
var nav = new Vue({
  el:"#nav",
  data:{
    hide:false
  },
  methods:{
    on:function (){
      let main = document.getElementById('nav')
      if (!this.hide) {        
        main.style.height = '80%'
        this.hide = true
      }
    },
    off:function (){
      let main = document.getElementById('nav')
      if (this.hide) {
        main.style.height = '3%'
        this.hide = false
      }
    } ,
    change:()=>{ch(null,true)}
  }
})
var list = new Vue({
  el: "#list",
  data: {
    task: localStorage.getItem('data').split(','),
    newTask: "",
    htr:this.task!=''?" Tasks":"No tasks yet"
  },
  methods: {
    addT: function(){
      if (!this.newTask=='') {
        newTask = this.newTask
        newTask=String(newTask).replace(/,/,'‚')
        this.task.push(newTask)
      }
      this.newTask = ''
      localStorage.setItem("data", this.task);
    },
    removeT: function(elem){
      removeItem(this.task,elem)
      localStorage.setItem('data', this.task);
    }
  }
});
function run (){
  let x = document.querySelector('#time')
  let d = new Date();
  let hours = d.getHours();
  let mins = d.getMinutes();
  let secs = d.getSeconds();
  let day = d.getDay()
  let mon = d.getMonth()
  switch (day) {
    case 1:
      day = 'Mon'
      break;
    case 2:
      day = 'Tue'
      break;
    case 3:
      day = 'Wed'
      break;
    case 4:
      day = 'Thurs'
      break;
    case 5:
      day = 'Fri'
      break;
    case 6:
      day = 'Sat'
      break;
    case 0:
      day = 'Sun'
      break;
  }
  switch (mon) {
    case 0:
      mon = 'Jan'
      break;
    case 1:
      mon = 'Feb'
      break;
    case 2:
      mon = 'Mar'
      break;
    case 3:
      mon = 'Apr'
      break;
    case 4:
      mon = 'May'
      break;
    case 5:
      mon = 'Jun'
      break;
    case 6:
      mon = 'Jul'
      break;
    case 7:
      mon = 'Aug'
      break;
    case 8:
      mon = 'Sep'
      break;
    case 9:
      mon = 'Oct'
      break;
    case 10:
      mon = 'Nov'
      break;
    case 11:
      mon = 'Dec'
      break;
  }
  hours = (hours > 12) ? hours % 12 : y = (hours === 0) ? 12 : hours;
  x.innerHTML = `${day} ${d.getDate()} ${mon} - ${hours}:${mins}:${secs}`
};
setInterval(run,1000);
run();
ch();