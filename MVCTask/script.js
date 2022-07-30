

Model = {
currentitem:"",
adminshow:false,
items:
  [
    {
      name : "cat 1",
     counter : 0,
    img : "https://th.bing.com/th/id/OIP.7qeEY9Xlu7r1UEmFuT9w9AHaFj?w=223&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7"
    },
    {
      name : "cat 2",
     counter: 0,
     img: "https://th.bing.com/th/id/OIP.NVq3B_ygdASryG8lJaPUcAHaGo?w=172&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7"
    },
    {
      name : "cat 3",
     counter: 0,
     img: "https://th.bing.com/th/id/OIP.Q7NzPeO7wovs6XJZf93ReAHaFj?w=229&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7"
    }

  ]
}



controller={
  init:function(){
   this. setCurrentCat(Model.items[0]);
    CatListView.init();
    CatView.init();


  },
  setCurrentCat:function(cat){
    Model.currentitem=cat;
  },
  getCurrentCat:function(){
    return Model.currentitem;
  },
  getCats:function(){
    return Model.items;
  },
  incrementCounter:function(){
    Model.currentitem.counter++;
    CatView.render();

  }


}



var CatView={
  init:function(){
    //cashing
    this.catelement=document.getElementById('cat');
    this.catename=document.getElementById('cat-name');
    this.catcount=document.getElementById('cat-count');
    this.catimg=document.getElementById('cat-img');

    this.catimg.addEventListener('click',function(e){

      controller.incrementCounter();

    });
    this.render();


  },
  render:function(){
    var currentcat=controller.getCurrentCat();
    this.catcount.textContent=currentcat.counter;
    this.catename.textContent=currentcat.name;
    this.catimg.src=currentcat.img;

  }
}
var CatListView={
  init:function(){
    this.catlist=document.getElementById("cat-list");
    this.render();
  },
  render:function(){
    var cats=controller.getCats();
    this.catlist.innerHTML='';
    for(var i=0;i<cats.length;i++){
      var cat=cats[i];
      var elem=document.createElement('li');
      elem.textContent=cat.name;
      elem.addEventListener('click',(function(cat)
      {
        return function(){
          controller.setCurrentCat(cat);
          CatView.render();
          
        };
      })(cat));
      this.catlist.appendChild(elem);      
    }
  }
}


controller.init()
var admin_button=document.getElementById("admin-button");
admin_button.addEventListener('click',function(e){
  showForm();

});

function showForm() {
  document.getElementById('formElement').style.display = 'block';
}
var submit=document.getElementById("submit-button");

submit.addEventListener('click',function(e){
  var name_input=document.getElementById("form-name").value;
  var count_input=document.getElementById("form-counter").value;
  var src_input=document.getElementById("form-img").value;
  var object={
    name:name_input,
    count:count_input,
    img:src_input
  }
Model.items.push(object);
console.log(object);
console.log(Model.items);
console.log(controller.getCats);
CatListView.render();

});










 