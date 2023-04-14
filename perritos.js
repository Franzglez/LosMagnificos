let arrayItem = [];
let arrayRazas = [];
let contadorClick = 1;
let arrayCont = [];


function imagenAleatoria() {


    fetch(`https://dog.ceo/api/breeds/image/random`)
        .then((res) => res.json())
        .then((data) => {
            //________________________atrapamos raza
            let string = data.message;

            let arrayUrl = string.split('/');
            let raza = arrayUrl[4];

            function printImg() {


                // Rellenamos array item vacio.
                console.log('funcion pinto imagen');
                if (contadorClick == 1) {
                    for (let i = 1; i < 21; i++) {
                        let item = document.querySelector(`.item${i}`);
                        arrayItem.push(item);

                    };
                    contadorClick++;
                }


                // Añadimos imagen a cada item.

                for (let i = 0; i < arrayItem.length; i++) {
                    console.log(arrayItem)
                    if (arrayItem[i].children.length == 0) {

                        if (i ==19) {
                            console.log("estoy en la 20");
                            const url = "https://api.thecatapi.com/v1/images/search";
                            fetch(url)
                                .then(response => response.json())
                                .then(data => {
                                    // const imageUrl = data.url;
                                    const img = new Image();
                                    img.src ="https://cdn2.thecatapi.com/images/MjA4NDEyNw.jpg";
                                    img.style.width = "100px";
                                    img.style.height = "80px";
                                    arrayItem[19].appendChild(img);
                                    arrayRazas.push(raza);
                                    arrayCont.push(1);
                                    printChart();
                                    
                                })
                        }
                        else {
                            arrayRazas.push(raza);
                            arrayCont.push(1);

                            console.log("No tiene hijo");
                            let img = document.createElement("img");
                            img.src = data.message;
                            img.style.width = "100px";
                            img.style.height = "80px";
                            console.log(i);
                            arrayItem[i].appendChild(img);
                            break;
                        }

                    } else {
                        console.log("tiene un hijo");

                    }

                }



            }

            printImg();



            const selectimg = document.querySelector('#preimagen');
            selectimg.src = data.message;
            selectimg.style.width = '100px';
            selectimg.style.height = '100px';

        })


};






