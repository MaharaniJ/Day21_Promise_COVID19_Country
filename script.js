var division = document.createElement('div')

//based on the input country in the text box
division.innerHTML=`<input type="text" id="txt">
<button type="button" onclick="foo()">Search</button>`;
division.setAttribute('id','count');
document.body.append(division);

function foo(){
   
  let covid19 = document.getElementById("txt").value
  let url = `https://api.covid19api.com/dayone/country/${covid19}`
  
// calling api using Promise
fetch(url).then((res)=>res.json()).then((data)=>{
    
    let records = data.length-1;  //total record length

    let activeCases = data[records].Active;        //Active Cases
    let confirmedCases = data[records].Confirmed;  //Confirmed Cases
    let deaths = data[records].Deaths              //Deaths
    let recov = data[records].Recovered;           //Recovered 

    document.getElementById("count").innerText=
    `Total Active Cases in ${covid19}: ${activeCases}
    Total confirmed Cases in ${covid19}: ${confirmedCases}
    Total Deaths in ${covid19}: ${deaths}
    Total Recovered in ${covid19}: ${recov}`;
})
}foo();

