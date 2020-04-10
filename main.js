document.getElementById('new').addEventListener('blur',NewTodo);
document.getElementById('checkall').addEventListener('click',ControlAll);
document.addEventListener('click',Left);
document.getElementById('completed').addEventListener('click',function(){Hide(true)});
document.getElementById('active').addEventListener('click',function(){Hide(false)});
document.getElementById('all').addEventListener('click',All);