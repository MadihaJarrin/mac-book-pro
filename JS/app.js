
/*=====================================
             Memory cost
======================================*/
function updateMemoryCost(product, price, priceCost) {
    // console.log('Clicker 16 GB memory');
    const memoryInput = document.getElementById(product + '-cost');
    if (priceCost) {
        memoryCost = price;
    }
    else {
        memoryCost = price;
    }
    memoryInput.innerText = memoryCost;
};
document.getElementById('upper-memory-button').addEventListener('click', function () {
    updateMemoryCost('memory', 180, true);
    calculateTotal();
});
document.getElementById('lower-memory-button').addEventListener('click', function () {
    updateMemoryCost('memory', 0, false);
    calculateTotal();
});

/*=====================================
             Storage cost
======================================*/
function updateStorageCost(product, priceCost) {
    const storageInput = document.getElementById(product + '-cost');
    storageInput.innerText = priceCost;
};
document.getElementById('upper-storage-button').addEventListener('click', function () {
    updateStorageCost('storage', 180);
    calculateTotal();
});
document.getElementById('middle-storage-button').addEventListener('click', function () {
    updateStorageCost('storage', 100);
    calculateTotal();
});
document.getElementById('lower-storage-button').addEventListener('click', function () {
    updateStorageCost('storage', 0);
    calculateTotal();

});
/*=====================================
             Delivery cost
======================================*/
function updateDeliveryCost(product, price, priceCost) {
    const deliveryInput = document.getElementById(product + '-cost');
    if (priceCost == true) {
        deliveryCost = price;
    }
    else {
        deliveryCost = price;
    }
    deliveryInput.innerText = deliveryCost;
};

document.getElementById('upper-delivery-button').addEventListener('click', function () {
    updateDeliveryCost('delivery', 20, true);
    calculateTotal();
});
document.getElementById('lower-delivery-button').addEventListener('click', function () {
    updateDeliveryCost('delivery', 0, false);
    calculateTotal();
});

/*=====================================
             Calculate Total
======================================*/
function getInputValue(product) {
    const productInput = document.getElementById(product + '-cost');
    const productPrice = parseInt(productInput.innerText);
    return productPrice;
};

function calculateTotal() {

    const bestTotal = getInputValue('best');
    const memoryTotal = getInputValue('memory');
    const storageTotal = getInputValue('storage');
    const deliveryTotal = getInputValue('delivery');
    const total = bestTotal + memoryTotal + storageTotal + deliveryTotal;
    // console.log(total);
    document.getElementById('total-cost').innerText = total;
    document.getElementById('after-discount').innerText = total;
};
// ==============================================  Bonus Part  ============================================
/*=====================================
             Promo code
======================================*/

document.getElementById('code-button').addEventListener('click', function (event) {
    let codeInput = document.getElementById('code-input').value;
    const promoCOde = 'stevekaku';
    const totalPrice = document.getElementById('after-discount').innerText;

    document.getElementById('code-input').value = '';
    if (codeInput == promoCOde) {
        const discount = (totalPrice - ((totalPrice / 100) * 20));
        document.getElementById('after-discount').innerText = discount;
    }
    else {
        codeInput.value = ' ';
    }
});
