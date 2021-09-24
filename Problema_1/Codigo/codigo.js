function main(){
    let money, product = ["Helado de agua", "Helado de crema", "Helado heladix", "Helado heladovich", "Helado helardo", "Helado confites", "Pote 1/4Kg"], price = [0.6, 1, 1.6, 1.7, 1.8, 2.9, 2.9];
    let T = 0;
    let price_max = 0;
    document.write("Buy of ice-cream");
    for(let i = 0; i < 7; i ++){
        if(price[i] <= money and price_max < price[i]){
            price_max = price[i];
            T = i;
        }
    }
    document.write("Price of ice-cream of " + product[T] + " is " + price_max + )
}

main();
