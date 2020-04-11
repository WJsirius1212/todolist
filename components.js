
// 获取内容，去掉首尾空格
function getContent(id){
  let content=document.getElementById(id).value.trim();
  document.getElementById(id).value=''
  return content;
}

// 判断内容
function judgeContent(content){
  let j;
  if (content){
    j=true;
  }else{
    j=false;
  }
  return j;
}

//模板,默认active

let defaultTemplate='<input class="checkbox"type="checkbox" id="{{id1}}">'
                    +  '<label for="{{id2}}"></label>'
                    +   '<span class="active">{{content}}</span>'
                    +    '<button class="destory">X</button>';


//模板修改
function modifyTemplate(id,content){
  let template=defaultTemplate
  let tid1='{{id1}}';
  let tid2='{{id2}}';
  let tc='{{content}}'
  template=template.replace(tid1,id);
  template=template.replace(tid2,id);
  template=template.replace(tc,content);
  return template;
}

//newtodo
function addElement(template){
  let node=document.createElement('li');
  node.innerHTML=template;  
  document.getElementById('list').appendChild(node);
}

//checked
function checked(){
  let completed='completed';
  let active='active';
  let state=this.parentNode.lastChild.previousSibling;
  if(this.checked){
    state.setAttribute('class',completed);
  }else{
    state.setAttribute('class',active);
  }
}

//count newtodoid
function count(){
  let count=document.getElementsByClassName('checkbox').length;
  return count;
}

//CountActive
function countActive(){
  let counta=0;
  let checkBoxes=document.getElementsByClassName('checkbox');
  for (let i=0;i<checkBoxes.length;i++){
    //console.log(checkBoxes[i].checked);
    if (checkBoxes[i].checked==false){     
      counta++;
    }
  }
  return counta;
}

function myDelete(){
  let li=this.parentNode;
  let children=li.childNode;
  for(let i in children){
    li.removeChild(i);
  }
  li.parentNode.removeChild(li);
}

function hide(state){
  //active->false completed->true
  let checkBoxes=document.getElementsByClassName('checkbox');
  for (let i=0;i<checkBoxes.length;i++){
    let li=checkBoxes[i].parentNode;
    li.setAttribute('class','show');
    //console.log(checkBoxes[i].checked);
    if (checkBoxes[i].checked!==state){     
      li.setAttribute('class','hide');
    }
  }
}

function all(){
  let checkBoxes=document.getElementsByClassName('checkbox');
  for (let i=0;i<checkBoxes.length;i++){
    let li=checkBoxes[i].parentNode;
    if(li.previousSibling.nodeType==3){
      continue;
    }
    li.setAttribute('class','show');
  }
}

function edit(){
  let input=document.createElement('input');
  input.value=this.lastChild.previousSibling.innerText;
  input.setAttribute('class','edit');
  this.parentNode.insertBefore(input, this);
  this.setAttribute('class','hide');
  input.addEventListener('mouseout',function(){
    if(this.value.trim()){
    this.nextSibling.lastChild.previousSibling.innerText=this.value.trim();
    this.nextSibling.setAttribute('class','show');
    this.parentNode.removeChild(this);
  }else{
    this.parentNode.removeChild(this.nextSibling);
    this.parentNode.removeChild(this);
  }
  })
  
}

