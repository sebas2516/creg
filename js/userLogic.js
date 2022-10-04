document.querySelector('#btnSavePrice').addEventListener('click', savePrice )


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
    for (var i = 0; i < list.length; i++) {
        var row = tbody.insertRow[i];
        var ciudadCell = row.insertCell[0];
            precio_gasolina = row.insertCell[1];
        ciudadCell.innerHTML= list[i].Ciudad;



        tbody.appendChild(row);
    }
}
