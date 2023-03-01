const inputSbasico = document.getElementById("inputSbasico")
const divPrecioxHora = document.getElementById("precioxHora")
const btnCalcular = document.getElementById("btnCalcular")
const preciosxHora = document.createElement("div")
const inputDiasLab = document.getElementById("inputDiasLab")
const inputNochesLab = document.getElementById("inputNochesLab")
const divError=document.getElementById("divError")
const spanTotalS=document.getElementById("spanTotalS")
const btnLimpiar=document.getElementById("btnLimpiar")

const inputCant25=document.getElementById("inputCant25")
const spanVal25=document.getElementById("spanVal25")

const inputCant50=document.getElementById("inputCant50")
const spanVal50=document.getElementById("spanVal50")

const inputCant100=document.getElementById("inputCant100")
const spanVal100=document.getElementById("spanVal100")


btnCalcular.addEventListener("click", () => {
    //para calcular el precio por hora
    if (inputSbasico.value != "") {
        const preHoraNormal = ((inputSbasico.value / 30) / 8).toFixed(3)
        const preHoraAl25 = (preHoraNormal * 0.25).toFixed(3)
        const preHoraAl50 = (preHoraNormal * 1.5).toFixed(3)
        const preHoraAl100 = (preHoraNormal * 2).toFixed(3)
        

        console.log(preHoraNormal, preHoraAl25, preHoraAl50, preHoraAl100)


        preciosxHora.innerHTML = `
        <table class="table table-bordered text-white">
        <thead>
  <tr>
  <th colspan="4">
  Precio de las horas
  </th>
  </tr>
  </thead>
  <tbody>
  <tr>
  <th scope="col">Normal</th>
  <th scope="col">25%*</th>
  <th scope="col">50%</th>
  <th scope="col">100%</th>
</tr>
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
spanVal25.textContent=(CantHorasAl25*preHoraAl25).toFixed(2)

//al 50%

inputCant50.value=CantHorasAl50
spanVal50.textContent=(CantHorasAl50*preHoraAl50).toFixed(2)

//al 100%
inputCant100.value=CantHorasAl100
spanVal100.textContent=(CantHorasAl100*preHoraAl100).toFixed(2)

spanTotalS.textContent=`$ ${(parseFloat(spanVal100.textContent)+parseFloat(spanVal50.textContent)+parseFloat(spanVal25.textContent))} `




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
Ingrese un valor valido
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
    spanVal25.textContent=""
    spanVal50.textContent=""
    spanVal100.textContent=""
    spanTotalS.textContent=""
})