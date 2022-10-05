document.querySelector('#btnSavePrice').addEventListener('click', savePrice )
printTable()

function savePrice(){
    sCiudad= document.querySelector('#txtCiudad').value,
    sPrecio_gasolina= document.querySelector('#txtGasolina').value,
    sPrecio_acpm= document.querySelector('#txtAcpm').value

    savePricesToSystem(sCiudad, sPrecio_gasolina, sPrecio_acpm);
    printTable();
}


function printTable(){
    var list = getPricesList(),
            tbody = document.querySelector('#resultTable tbody');
    tbody.innerHTML= '';
   for(var i=0; i<list.length; i++){
    var row = tbody.insertRow(i);
    var ciudadCell = row.insertCell(0),
        gasolinaCell = row.insertCell(1),
        acpmCell = row.insertCell(2);

        ciudadCell.innerHTML = list[i].ciudad;
        gasolinaCell.innerHTML = list[i].precio_gasolina;
        acpmCell.innerHTML = list[i].precio_acpm;

        

    tbody.appendChild(row);
}
}
