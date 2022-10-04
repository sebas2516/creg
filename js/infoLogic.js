var pricesList = [];

function savePricesToSystem(pCiudad, pGasolina, pAcpm){
    var priceObject ={
        ciudad: pCiudad,
        precio_Gasolina: pGasolina,
        precio_ACPM: pAcpm  
    };
    console.log(priceObject)
    pricesList.push(priceObject);
};