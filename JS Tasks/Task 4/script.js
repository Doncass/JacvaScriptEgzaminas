/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotojui atėjus į tinklapį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Sukurta kortelė, kurioje yra informacija apie automobilį (brand), turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = 'cars.json';

async function getCars() {
    const carsResponse = await fetch('cars.json');
    const cars = await carsResponse.json();

    cars.forEach((car) => {
    generateCarHtml(car);
    });
    }


    function generateCarHtml(car) {
    const container = document.getElementById('output');
    const brand = document.createElement('h3');
    const models = document.createElement('p');
    
    brand.textContent = car.brand;
    models.textContent = car.models;
    
    container.appendChild(brand);
    container.appendChild(models)
    
    
    }
    getCars();