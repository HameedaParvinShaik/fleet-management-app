let fleetData=[];
function addFleet(event){
    event.preventDefault();
    let driver=document.getElementById('driver').value.trim();
     let vehicle=document.getElementById('vehicle').value.trim();
     if(driver===''||vehicle===''){
        alert("All fields required");
        return;
     }
 let obj={
    driver,vehicle,status:"Available"
 };
 fleetData.push(obj);
 displayFleet();
 event.target.reset();
}
function displayFleet(){
    let box=document.getElementById("fleetContainer");
    if(!box) return;
    box.innerHTML='';
    fleetData.forEach((item,index)=>{
        let card=document.createElement("div");
        card.className="card";
        card.innerHtml=`
        <p><b>Driver: </b>${item.driver}</p>
        `;
        box.appendChild(card);
    });
}