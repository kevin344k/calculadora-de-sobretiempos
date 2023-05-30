const inputSbasico = document.getElementById("inputSbasico")
const divPrecioxHora = document.getElementById("precioxHora")
const btnCalcular = document.getElementById("btnCalcular")
const preciosxHora = document.createElement("div")
const inputDiasLab = document.getElementById("inputDiasLab")
const inputNochesLab = document.getElementById("inputNochesLab")
const divError=document.getElementById("divError")
const spanTotalS=document.getElementById("spanTotalS")
const btnLimpiar=document.getElementById("btnLimpiar")
const divTablaHoras=document.getElementById("divTablaHoras")
const inputCant25=document.getElementById("inputCant25")
const spanVal25=document.getElementById("spanVal25")

const inputCant50=document.getElementById("inputCant50")
const spanVal50=document.getElementById("spanVal50")
const detailHours=document.createElement("div")
const inputCant100=document.getElementById("inputCant100")
const spanVal100=document.getElementById("spanVal100")

btnCalcular.addEventListener("click", () => {
  divTablaHoras.innerHTML=""
    //para calcular el precio por hora
    if (inputSbasico.value != "") {
        const preHoraNormal = ((inputSbasico.value / 30) / 8).toFixed(3)
        const preHoraAl25 = (preHoraNormal * 1.25).toFixed(3)
        const preHoraAl50 = (preHoraNormal * 1.5).toFixed(3)
        const preHoraAl100 = (preHoraNormal * 2).toFixed(3)
        

        console.log(preHoraNormal, preHoraAl25, preHoraAl50, preHoraAl100)


        preciosxHora.innerHTML = `
        <table class="table table-bordered text-black">
        <thead class="bg-secondary">
  <tr>
  <th colspan="4">
  Precio de las horas
  </th>
  </tr>
  <tr>
  <th scope="col">Normal</th>
  <th scope="col">+25%</th>
  <th scope="col">+50%</th>
  <th scope="col">+100%</th>
</tr>
  </thead>
  <tbody class="bg-white">
  
    <tr>
      <td scope="row">$${preHoraNormal}</td>
      <td>$${preHoraAl25}</td>
      <td>$${preHoraAl50}</td>
      <td>$${preHoraAl100}</td>
    </tr>

        </table>
       `
        divPrecioxHora.appendChild(preciosxHora)

if (inputDiasLab.value!="" && inputNochesLab.value!="") {
    
let jornadaNocheX25=8
let jornadaNocheX50=1.25
let jornadaDiaX50=4
let jornadaNochex100=2.75


let CantHorasAl25=inputNochesLab.value*jornadaNocheX25
let CantHorasAl50=(inputNochesLab.value*jornadaNocheX50+inputDiasLab.value*jornadaDiaX50)
let CantHorasAl100=inputNochesLab.value*jornadaNochex100
//al 25%
inputCant25.value=CantHorasAl25
spanVal25.textContent=(CantHorasAl25*(preHoraAl25-preHoraNormal)).toFixed(2)

//al 50%

inputCant50.value=CantHorasAl50
spanVal50.textContent=(CantHorasAl50*preHoraAl50).toFixed(2)

//al 100%
inputCant100.value=CantHorasAl100
spanVal100.textContent=(CantHorasAl100*preHoraAl100).toFixed(2)

let all=(parseFloat(spanVal100.textContent)+parseFloat(spanVal50.textContent)+parseFloat(spanVal25.textContent))
  
spanTotalS.textContent=`$ ${(all).toFixed(2)} `


detailHours.innerHTML=`  <table class="table table-bordered">
    
  <thead class="bg-secondary">
    <tr>
      <th scope="col">%</th>
      <th scope="col">Días</th>
      <th scope="col">x Horas</th>
      <th scope="col">Horas de Jornada</th>
       <th scope="col">Total Horas</th>
    </tr>
  </thead>
  <tbody >
     <tr class="bg-warning">
      <th>Noche a 100</th>
       <td>${inputNochesLab.value} </td>
        <td>x2 horas </td>
       <td>2.75</td>
       <td>${CantHorasAl100} </td>    
    </tr>
     <tr class="bg-primary">
       <th>Dia al 50</th>
      <td>${inputDiasLab.value} </td>
       <td rowspan="2" class="align-middle">x1.5 horas</td>
        <td>4</td>
        <td>${inputDiasLab.value*jornadaDiaX50} </td>       
        </tr>
        <tr class="bg-primary">
      <th>Noche al 50</th>
      <td>${inputNochesLab.value}</td>
 <td>1.25</td>
         <td>${inputNochesLab.value*jornadaNocheX50} </td>
          
    </tr>
        <tr class="bg-danger">
       <th>Noche a 25</th>
          <td>${inputNochesLab.value}</td>
     <td>x 0.25 horas</td>
      
      <td>8</td>
            <td>${CantHorasAl25}</td>
    </tr>

  </tbody>
</table>  `


  divTablaHoras.appendChild(detailHours)

} else{
    let err=document.createElement("div");
    err.innerHTML=`<div class="alert alert-danger" role="alert">
    Ingrese un valor para "Dias" y "Noches"
    </div>`
            divError.appendChild(err)
    
            setTimeout(() => {
                err.innerHTML=""
            }, 3000);
}




    } else {
        let err=document.createElement("div");
err.innerHTML=`<div class="alert alert-danger" role="alert">
Ingrese su Salario básico¡ 
</div>`
        divError.appendChild(err)

        setTimeout(() => {
            err.innerHTML=""
        }, 3000);
    }

    //mostrar el precio por hora


})

btnLimpiar.addEventListener("click",()=>{
    inputSbasico.value=""
    inputDiasLab.value=""
    inputNochesLab.value=""
    inputCant25.value=""
    inputCant50.value=""
    inputCant100.value=""
    spanVal25.textContent="0.00"
    spanVal50.textContent="0.00"
    spanVal100.textContent="0.00"
    spanTotalS.textContent="0.00"
  divPrecioxHora.removeChild(preciosxHora)
  divTablaHoras.removeChild(detailHours)
  
})