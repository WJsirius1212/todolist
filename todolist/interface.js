function addNewTodo(content){
  if(judgeContent(content)){
    let id=count()+1;
    let template=modifyTemplate(id,content);
    //append newtodo
    let node=document.createElement("li");
    node.innerHTML=template;
    node.setAttribute('class','show');
    document.getElementById("list").appendChild(node);
    return true;
  }else{
    return false; }
}

function addChecked(i){
  let checkBoxes=document.getElementsByClassName('checkbox');
  checkBoxes[i].addEventListener("click", checked);
}

function addDelete(i){
  let checkBoxes=document.getElementsByClassName('checkbox');
  checkBoxes[i].parentNode.lastChild.addEventListener("click", myDelete);
}

function addEdit(i){
  let checkBoxes=document.getElementsByClassName('checkbox');
  checkBoxes[i].parentNode.addEventListener("dblclick", edit);
}

function newTodo(content){
  if(addNewTodo(content)){
    addChecked(count()-1);
    addDelete(count()-1);
    addEdit(count()-1);
  }else{
    return;
  }
}

function controlAll(){
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

function left(){
  let n=countActive();
  let str=' item left';
  if(n>1){
    str=' items left';
  }
  document.getElementById('sum').innerText=n+str;
}
//storeandload
function storeList(){
  //clear
  localStorage.clear();
  let checkBoxes=document.getElementsByClassName('checkbox');
  for (let i=0;i<checkBoxes.length;i++){
    let span=checkBoxes[i].parentNode.lastChild.previousSibling;
    let state=checkBoxes[i].checked===true?1:0;
    localStorage.setItem(i.toString(),span.innerText+state.toString());
  }
}

function loadList(){
  for(let i=0;localStorage.getItem(i.toString());i++){
    let content=localStorage.getItem(i.toString());
    let state=content.slice(-1);
    console.log(state);
    newTodo(content.slice(0,-1));
    if(state==='1'){
      let checkBox=document.getElementsByClassName('checkbox')[i];
      let span=checkBox.parentNode.lastChild.previousSibling;
      span.setAttribute('class','completed');
      checkBox.checked=true;
    }
  }
  if(count()!=countActive()){
    document.getElementById('checkall').checked=true;
  }
  console.log('loaded.');
}