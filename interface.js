function AddNewTodo(){
  let content=GetContent('new');
  if(JudgeContent(content)){
    let id=Count()+1;
    let template=ModifyTemplate(id,content);
    //append newtodo
    let node=document.createElement("li");
    node.innerHTML=template;
    node.setAttribute('class','show');
    document.getElementById("list").appendChild(node);
    return true;
  }else{
    return false; }
}

function AddEventListener(i){
  let checkBoxes=document.getElementsByClassName('checkbox');
  checkBoxes[i].addEventListener("click", Checked);
}

function AddDelete(i){
  let checkBoxes=document.getElementsByClassName('checkbox');
  checkBoxes[i].parentNode.lastChild.addEventListener("click", Delete);
}

function AddEdit(i){
  let checkBoxes=document.getElementsByClassName('checkbox');
  checkBoxes[i].parentNode.addEventListener("dblclick", Edit);
}

function NewTodo(){
  if(AddNewTodo()){
    AddEventListener(Count()-1);
    AddDelete(Count()-1);
    AddEdit(Count()-1);
  }else{
    return;
  }
}

function ControlAll(){
  let state;
  let check;
  if(this.checked){
    state='completed';
    check=true;
  }else{
    state='active';
    check=false;
  }
  let checkBoxes=document.getElementsByClassName('checkbox');
  for (let i=0;i<checkBoxes.length;i++){
    checkBoxes[i].checked=check;
    checkBoxes[i].parentNode.lastChild.previousSibling.setAttribute('class',state)
  }
  
}

function Left(){
  let n=CountActive();
  let str=' item left';
  if(n>1){
    str=' items left';
  }
  document.getElementById('sum').innerText=n+str;
}

