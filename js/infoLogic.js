
var pricesList = [];

function savePricesToSystem( pCiudad, pGasolina, pAcpm){
    var priceObject ={
        ciudad: pCiudad,
        precio_gasolina: pGasolina,
        precio_acpm: pAcpm  
    };
    
    pricesList.push(priceObject);
    console.log(pricesList);
};

function getPricesList(){
    return pricesList;
}
