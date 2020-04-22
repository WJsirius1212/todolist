document.getElementById('new').addEventListener('blur',function(){newTodo(getContent('new'))});
document.getElementById('new').addEventListener('keydown',function(){
  if(window.event.keyCode==13){
    newTodo(getContent('new'));
  }
});
document.getElementById('checkall').addEventListener('click',controlAll);
document.addEventListener('click',left);
document.getElementById('completed').addEventListener('click',function(){hide(true)});
document.getElementById('active').addEventListener('click',function(){hide(false)});
document.getElementById('all').addEventListener('click',all);

window.addEventListener('load',loadList);
window.addEventListener('load',left);
window.addEventListener('unload',storeList);