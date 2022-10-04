document.querySelector('#btnSavePrice').addEventListener('click', savePrice )

function savePrice(){
    var sCiudad= document.querySelector('#txtCiudad').value,
    sPrecio_gasolina= document.querySelector('#txtGasolina').value,
    sPrecio_acpm= document.querySelector('#txtAcpm').value

    savePricesToSystem(sCiudad,sPrecio_gasolina,sPrecio_acpm);
}
