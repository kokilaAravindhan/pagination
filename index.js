
var request=new XMLHttpRequest();
request.open("GET","https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json");
request.send();
request.onload=function(){
    var result=JSON.parse(request.response);
   // console.log(result);
  var box=document.createElement("div");
  box.setAttribute("class","box");

  var container=document.createElement("div");
  container.setAttribute("class","container");
  container.style.margin="60px";
  
  var Hrow=document.createElement("div");
  Hrow.setAttribute("classs","row");
  
  var Hcol=document.createElement("div");
  Hcol.setAttribute("class","col-sm-12");

  var Hrow1=document.createElement("div");
  Hrow1.setAttribute("class","row");
  
  var Hcol1=document.createElement("div");
  Hcol1.setAttribute("class","col-4");

  var Hh1=document.createElement("h4");
  Hh1.innerHTML="ID";

  var Hcol2=document.createElement("div");
  Hcol2.setAttribute("class","col-4");

  var Hh2=document.createElement("h4");
  Hh2.innerHTML="NAME";
  

  var Hcol3=document.createElement("div");
  Hcol3.setAttribute("class","col-4")
  
  var Hh3=document.createElement("h4");
  Hh3.innerHTML="EMAIL";

  var rowP=document.createElement("div");
  rowP.setAttribute("class","row");
  

  var colP=document.createElement("div");
  colP.setAttribute("class","col");
  

    

  var pagination=document.createElement("nav");
  pagination.setAttribute("class","pagination-container");
  pagination.style.alignItems="center"
  
/** */
window.addEventListener('load', () => {
  console.log("hello");
  changePage(1);


});
  var current_page = 1;
  const paginationLimit = 10;
  

  var pageBtnPrev=document.createElement("button");
  pageBtnPrev.setAttribute("class","pagination-button");
  pageBtnPrev.id="prev-btn";
  pageBtnPrev.innerHTML="Previous";
  pageBtnPrev.style.border="none";
  pageBtnPrev.style.cursor="pointer";
  pageBtnPrev.style.margin=".75rem .75rem";
  pageBtnPrev.style.borderRadius=".2rem";
  pageBtnPrev.style.height="3 rem";
  pageBtnPrev.style.width="3 rem";
 


  var pageBtnNext=document.createElement("button");
  pageBtnNext.setAttribute("class","pagination-button");
  pageBtnNext.id="nxt-btn";
  pageBtnNext.innerHTML="Next";
  pageBtnNext.style.border="none";
  pageBtnNext.style.cursor="pointer";
  pageBtnNext.style.margin=".75rem .75rem";
  pageBtnNext.style.borderRadius=".2rem";
  pageBtnNext.style.height="3 rem";
  pageBtnNext.style.width="3 rem";
  pagination.append(pageBtnPrev,pageBtnNext);
 
    pageBtnPrev.addEventListener("click", () => {
      if (current_page > 1) {
        //current_page--;
        changePage(current_page-1);
      }
    });
    pageBtnNext.addEventListener("click", () => {
      if (current_page < numPages()) {
      //current_page++;
      changePage(current_page+1);
      }    
  });
  for(var i=1;i<paginationLimit;i++){
    var pageNumBtn=document.createElement("button");
    pageNumBtn.setAttribute("class","pagination-button")
    pageNumBtn.style.backgroundColor="grey";
    pageNumBtn.style.border="none";
    pageNumBtn.style.cursor="pointer";
    pageNumBtn.style.margin=".75rem .75rem";
    pageNumBtn.style.borderRadius=".2rem";
    pageNumBtn.style.height="3 rem";
    pageNumBtn.style.width="3 rem";
    pageNumBtn.id="pageNumBtn";
    pageNumBtn.innerHTML=i;
    pageNumBtn.addEventListener("click", () => {
      for(var j=1;j<paginationLimit;j++){
      //current_page++;
        changePage(j);
        j++;
        console.log(j);
      } 
    });   
    pagination.append(pageNumBtn);
  } 

  var row2=document.createElement("div");
  row2.setAttribute("class","row");
  
  var col1=document.createElement("div");
  col1.setAttribute("class","col-4");

  var p1=document.createElement("p");
  p1.id="p1";
  //p1.innerHTML=result[i].id;

  var col2=document.createElement("div");
  col2.setAttribute("class","col-4");

  var p2=document.createElement("p");
  p2.id="p2";
  //p2.innerHTML=result[i].name;
  
  var col3=document.createElement("div");
  col3.setAttribute("class","col-4")
  
  var p3=document.createElement("p");
  p3.id="p3";
  //p3.innerHTML=result[i].email;
  
  p1.innerHTML = "";
  p2.innerHTML = "";
  p3.innerHtml = "";

  function changePage(page)
  {   

    const nextButton = document.getElementById("pageBtnNext");
    const prevButton = document.getElementById("pageBtnPrev");
    var p1 = document.getElementById("p1");
    var p2 = document.getElementById("p2");
    var p3 = document.getElementById("p3");

    // Validate page
    if (page < 1) page = 1;
    if (page > numPages()) page = numPages();

       for (var i = (page-1) * paginationLimit; i <= (page * paginationLimit); i++) 
        {   
          //paginationNum.innerHTML = i;
            console.log(i);
            p1.innerHTML += result[i].id+ "<br>";
            p2.innerHTML += result[i].name+ "<br>";
            p3.innerHTML += result[i].email+ "<br>";           
        }
    
    if (page == 0) {
      prevButton.style.visibility = "hidden";
    } else {
      prevButton.style.visibility = "visible";
    }

    if (page == numPages()) {
        nextButton.style.visibility = "hidden";
    } else {
      nextButton.style.visibility = "visible";
    }
}

function numPages()
{
 
  return pageCount = Math.ceil(result.length / paginationLimit);
    
  
}



 
  colP.append(pagination);
  rowP.append(colP);
  Hcol3.append(Hh3);
  Hcol2.append(Hh2);
  Hcol1.append(Hh1);
  Hrow1.append(Hcol1,Hcol2,Hcol3);
  Hcol.append(Hrow1);
  col3.append(p3);
  col2.append(p2);
  col1.append(p1);
  row2.append(col1,col2,col3);
  Hcol.append(row2);  


   
    
    Hrow.appendChild(Hcol);
    container.append(Hrow,rowP);
    box.append(container);
    document.body.append(box);
}
