
let carArr = [];

class Car {
    constructor(nome, preco, alturaCacamba, alturaVeiculo, alturaSolo, capacidadeCarga, motor, potencia, volumeCacamba, roda, image) {

        this.nome = nome;
        this.preco = preco;
        this.alturaCacamba = alturaCacamba;
        this.alturaVeiculo = alturaVeiculo;
        this.alturaSolo = alturaSolo;
        this.capacidadeCarga = capacidadeCarga;
        this.motor = motor;
        this.potencia = potencia;
        this.volumeCacamba = volumeCacamba;
        this.roda = roda;
        this.image = image;

    }
}


function GetCarArrPosition(arr, carClass) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].nome === carClass.nome)
            return i;
    }
    return -1;
}

function SetCarToCompare(el, carClass) {
    if (!(carClass instanceof Car)) {
        throw "You need set a Car Class";
    }

    if (el.checked) {

        if (carArr.length >= 2) {
            alert("Você só pode comparar 2 carros.");
            el.checked = false;
            return;
        }

        carArr.push(carClass);
    } else {

        let pos = GetCarArrPosition(carArr, carClass);
        if (pos >= 0) {
            carArr.splice(pos, 1);
        }
    }

    console.log(carArr);
}

function ShowCompare() {
    if (carArr.length < 2) {
        alert("Precisa marcar 2 carros para apresentar a comparação");
        return;
    }

    UpdateCompareTable();
    document.getElementById("compare").style.display = "block";
}

function HideCompare() {
    document.getElementById("compare").style.display = "none";
}

function UpdateCompareTable() {
    for (let i = 0; i < 2; i++) {
        let car = carArr[i];

        document.getElementById(`compare_image_${i}`).innerHTML =
            `<img src="${car.image}" width="200">`;

        document.getElementById(`compare_modelo_${i}`).innerText = car.nome;
        document.getElementById(`compare_alturacacamba_${i}`).innerText = car.alturaCacamba;
        document.getElementById(`compare_alturaveiculo_${i}`).innerText = car.alturaVeiculo;
        document.getElementById(`compare_alturasolo_${i}`).innerText = car.alturaSolo;
        document.getElementById(`compare_capacidadecarga_${i}`).innerText = car.capacidadeCarga;
        document.getElementById(`compare_motor_${i}`).innerText = car.motor;
        document.getElementById(`compare_potencia_${i}`).innerText = car.potencia;
        document.getElementById(`compare_volumecacamba_${i}`).innerText = car.volumeCacamba;
        document.getElementById(`compare_roda_${i}`).innerText = car.roda;
        document.getElementById(`compare_preco_${i}`).innerText =
            "R$ " + car.preco.toLocaleString("pt-BR");
    }
}