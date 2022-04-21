alert("¡Hola, bienvenido a este mini juego! Aquí, encontrarás un puzzle según el personaje que elijas. Tienes que conseguir que el personaje logre su objetivo. TIP: explora el 'mapa' y conseguirás herramientas, para validarlas, se necesitan de códigos. Sin más que decir, ¡comencemos!");

for (let i=3; i>= 1; i--){
    alert(i + "...")
}

alert("Elige un personaje! :)")

let eleccPer

while(true){
    eleccPer = prompt("ingrese un numero: 1-la hormiga 2-la oveja 3-el lobo")
    if (eleccPer == 1 || (eleccPer == 2 || eleccPer == 3)){
        break;
    } else {
        alert("el valor ingresado es incorrecto, ¡recuerda insertar un número!");
    }
}

let personaje

switch (eleccPer){
    case "1":
        personaje = "la hormiga";
        alert("Objetivo: conseguir azúcar")
        break;
    case "2":
        personaje = "la oveja";
        alert("Objetivo: comer pasto, la oveja ya está cansada de comer alfalfa")
        break;
    case "3":
        personaje = "el lobo";
        alert("Objetivo: comer una oveja") 
        break;  
    default:
        console.log("hay un error");
        break; 
}

let objetivo

while(objetivo != "conseguido"){

    //elige un lugar
    alert("¿A dónde quieres que " + personaje + " vaya?")
    
    let eleccLug
    
    while(true){
        eleccLug = prompt("1-El jardín 2-El bosque 3-La granja")
        if (eleccLug == "1" || (eleccLug == "2" || eleccLug == "3")){
            break;
        } else {
            alert("el valor ingresado es incorrecto, ¡recuerda insertar un número!");
        }
    }
    
    //lugar
    let lugar
    switch (eleccLug){
        //jardin
        case "1":
            lugar = "El jardín";
            //hormiga en el jardin
            if(eleccPer == 1) {
                alert("Desde el jardín puedes observar una casa y desde su ventana se ve que hay: humanos, huesos y comida para perro y... ¡Azúcar! pero ¡oh no! en el jardín hay un sapo preparado para comer a la hormiga :(")
                let decision = prompt("1-Entrar a la casa 2-volver");
                if (decision == 2){
                    break;
                }
                if (decision == 1){
                    alert("No puedes entrar! en el medio hay un sapo :C");
                    let codigoSerpiente = "c2TB67";
                    let codigoHumanos = "efeElEstablo"
                    let validarSapo = prompt("ingrese el código para deshacerte del sapo");
                    if (validarSapo === codigoSerpiente){
                        alert("Ya estás dentro de la casa, pero a los humanos no le gustan que las hormigas coman su azúcar, ten cuidado, sal de ahí antes de que te pisen!!");
                        let validarFuego = prompt("ingrese el código para deshacerte de los humanos");
                        if(validarFuego === codigoHumanos){
                            alert("Te deshiciste de todos los obstáculos y ya estas dentro de la casa, A COMER AZÚCAARR");
                            alert("¡Felicidades! haz completado el objetivo de la hormiga, ahora es feliz :D");
                            objetivo = "conseguido";
                        }else{
                            alert("ese no es el código!");
                        }
                    } else{
                        alert("ese no es el código!");
                    }
                    break;
                }
            }
            //oveja en el jardín
            if(eleccPer == 2) {
                alert("En el jardín te encuentras con un sapo que no te causará problemas ¡eres una oveja!. Desde el jardín puedes observar una casa y desde su ventana se ve que hay: humanos, huesos y comida para perro y azúcar")
                let decision = prompt("1-Entrar a la casa 2-volver");
                if (decision == 2){
                    break;
                }
                if (decision == 1){
                    alert("No puedes entrar! En la casa hay humanos que te comerán al verte :C");
                    let codigoHumanos = "efeElEstablo";
                    let validarFuego = prompt("ingrese el código para deshacerte de los humanos");
                    if(validarFuego === codigoHumanos){
                        alert("Ya estas dentro de la casa! aquí te encuentras azúcar, huesos y comida para perros, ¿qué eliges llevar?");
                        let eleccion = prompt("1-Azúcar 2-huesos 3-comida para perros");
                        switch(eleccion){
                            case "1":
                                alert("ups! en vez de llevarsela se comió la azúcar, la oveja se puso hiperactiva!!! o~° ");
                                break;
                            case "2":
                                alert("Ya tienes los huesos, llevaselos a los perros!! (e68na3)");
                                break;
                            case "3":
                                alert("Ya tienes la comida para perros, llevaselos a los perros!! (8we7b7)");
                                break;
                            default:
                                alert("valor incorrecto recuerda ingresar un número")
                                break;
                        }
                    }else{
                        alert("ese no es el código!, los humanos decidieron no comerte y te llevaron de vuelta al corral, ¡te salvaste esta vez!");
                    }
                    break;
                }
            }
            //lobo en el jardin
            if(eleccPer == 3) {
                alert("En el jardín te encuentras con un sapo que no te causará problemas ¡eres un lobo!. Desde el jardín puedes observar una casa y desde su ventana se ve que hay: humanos, huesos y comida para perro y azúcar")
                let decision = prompt("1-Entrar a la casa 2-volver");
                if (decision == 2){
                    break;
                }
                let codigoHumanos = "efeElEstablo";
                let validarFuego = prompt("ingrese el código para deshacerte de los humanos");
                if(validarFuego === codigoHumanos){
                    alert("Ya estas dentro de la casa! aquí te encuentras azúcar, huesos y comida para perros, ¿qué eliges llevar?");
                    let eleccion = prompt("1-Azúcar 2-huesos 3-comida para perros");
                    switch(eleccion){
                        case "1":
                            alert("ups! en vez de llevarsela se comió la azúcar, el lobo se puso hiperactivo!!! o~° ");
                            break;
                        case "2":
                            alert("Ups! te quedaste jugando con el hueso");
                            break;
                        case "3":
                            alert("Ya tienes la comida para perros, llevaselos a los perros!! (8we7b7)");
                            break;
                        default:
                            alert("valor incorrecto recuerda ingresar un número")
                            break;
                    }
                }else{
                    alert("ese no es el código!, los humanos llamaron a la perrera ¡corre antes de que te agarren!");
                }
                break;
            }
            break;
        //bosque
        case "2":
            lugar = "El bosque";
            //oveja en el bosque
            if(eleccPer == 2) {
                alert("En el bosque te encuentras con...¡pasto!... ¡pero cuidado! esta lleno de lobos :C");
                /* ----- */
                let codigoPerros = "ladridosX100";
                let validarLobos= prompt("ingrese el código para deshacerte de los lobos");
                if (validarLobos === codigoPerros){
                    alert("Ya estas protegida de los lobos gracias a los perros... ¡A COMER PASTOO!");
                    alert("¡Felicidades! haz completado el objetivo de la oveja, ahora es feliz :D");
                    objetivo = "conseguido";
                    break
                } else{
                    alert("ese no es el código! te comerán los lobos si no corres! vuelve con perros guardianes");
                }
                /* ----- */
                alert("Desde el bosque ves un lago y una casa abandonada");
                let decision = prompt("1-ir al lago 2-ir a la casa abandonada 3-volver");
                if (decision == 1 || decision == 2){
                    alert("No puedes ir hay lobos en el medio :(")
                    break;
                };
                if (decision == 3){
                    break;
                }
                break;
            }
            //lobo en el bosque
            if(eleccPer == 3) {
                alert("En el bosque te encuentras con pasto y árboles, desde allí ves un lago y una casa abandonada");
                let decision = prompt("1-ir al lago 2-ir a la casa abandonada 3-volver");
                if (decision == 1){
                    alert("en la orrila del lago te encuentras con una serpiente hambrienta, ¡no te acerques demasiado!")
                    break;
                }
                if (decision == 2){
                    alert("en la casa abandonada te encuentras con fósforos (heN893) y las llaves del establo (36hk4), llevatelos por si las dudas");
                    break;
                }
                if (decision == 3){
                    break
                }
            }
            //hormiga en el bosque
            if(eleccPer == 1) {
                alert("En el bosque te encuentras con pasto y árboles, desde allí ves un lago y una casa abandonada");
                let decision = prompt("1-ir al lago 2-ir a la casa abandonada 3-volver");
                if (decision == 1){
                    alert("en la orrila del lago te encuentras con una serpiente hambrienta, descuida NO come hormigas")
                    let interactuar = prompt("1-hablar con la serpiente 2-volver");
                    if (interactuar == 1){
                        alert("Hormiga: Hola serpiente!");
                        alert("Serpiente: Hola hormiga! tengo hambre :C");
                        alert("Hormiga: No me comas por favor!!!");
                        alert("Serpiente: No lo haré, como roedores, anfibios, etc. Pero no hormigas! :/");
                        alert("Hormiga: Genial! te voy a conseguir comida, acompañame!");
                        alert("Para deshacerte del sapo ingresa este código: c2TB67")
                    }
                    if (interactuar == 2){
                        break
                    }
                    break;
                }
                if (decision == 2){
                    alert("en la casa abandonada te encuentras con fósforos (heN893) y las llaves del establo (36hk4), llevatelos por si las dudas");
                    break;
                }
                if (decision == 3){
                    break
                }
            }

        //granja
        case "3":
            lugar = "La granja";
            //hormiga en la granja
            if(eleccPer == 1) {
                alert("En la granja hay un establo y un corral ¿A dónde quieres ir?");
                let decision = prompt("1-establo 2-corral");
                if (decision == 1){
                    alert("El establo está cerrado con candado");
                    let codigoCerradura = "36hk4";
                    let codigoPrender = "heN893";
                    let validarCerradura = prompt("ingrese el código para abrir la cerradura");
                    if (validarCerradura === codigoCerradura){
                        alert("Ya estás dentro del establo, en el encuentras alfalfa... inflamable... >:)");
                        let validarFuego = prompt("ingrese el código para prender fuego");
                        if (validarFuego === codigoPrender){
                            alert("Prendiste fuego el establo! los humanos seguro que irán a apagarlo... codigo para deshacerte de los humanos: efeElEstablo")
                        }else{
                            alert("ese no es el código!");
                        }
                    } else{
                        alert("ese no es el código! el candado no se abrirá sin la llave :/");
                    }
                    break;
                }
                if (decision == 2){
                    alert("En el corral te encuentras a perros guardianes y ovejas, nada que te pueda ayudar :/")
                    break;
                }
            }
            //oveja en la granja
            if (eleccPer == 2){
                alert("En la granja hay un establo y un corral, en el corral hay un camino secundario a una casa abandonada ¿A dónde quieres ir?");
                let decision = prompt("1-establo 2-corral");
                if (decision == 1){
                    alert("El establo está cerrado con candado");
                    let codigoCerradura = "36hk4";
                    let codigoPrender = "heN893";
                    let validarCerradura = prompt("ingrese el código para abrir la cerradura");
                    if (validarCerradura === codigoCerradura){
                        alert("Ya estás dentro del establo, en el encuentras alfalfa... inflamable... >:)");
                        let validarFuego = prompt("ingrese el código para prender fuego");
                        if (validarFuego === codigoPrender){
                            alert("Prendiste fuego el establo! los humanos seguro que irán a apagarlo... codigo para deshacerte de los humanos: efeElEstablo")
                        }else{
                            alert("ese no es el código! Eres una oveja, no puedes prender fuego tirando rayos laser por los ojos :/ ... ¿o si? o_O");
                        }
                    } else{
                        alert("ese no es el código! el candado no se abrirá sin la llave :/");
                    }
                }
                if (decision == 2){
                    alert("Estás en el corral, portegida por los perros guardianes");
                    let interactuar = prompt("1-hablar con los perros 2-volver 3-ir a la casa abandonada por el camino secundario");
                    if (interactuar == 1){
                        alert("Oveja: Hola Perro guardian!");
                        alert("Perro guardian: Hola Oveja!");
                        alert("Oveja: me proteges de los lobos?");
                        alert("Perro guardian: Sí, ese es mi trabajo");
                        alert("Oveja: Genial! acompañame al bosque que necesito ir pero hay lobos");
                        alert("Perro guardian: Perdón, pero no puedo, nuestro dueño nos quiere aca en el corral, no hinches los hue...");
                        let convencer = prompt("Dales algo para que vengan con vos (ingresá el código del elemento)");
                        let validarConvencer1 = "e68na3"
                        let validarConvencer2 = "8we7b7"
                        if (convencer === validarConvencer1){
                            alert("los perros guardianes ven que tienes unos huesos para darles, te seguiran!!! o más bien seguiran los huesos....")
                            alert("Para deshacerte de los lobos ingresa este código: ladridosX100")
                        }else if(convencer === validarConvencer2){
                            alert("le diste comida para perros a los perros guardianes, estan agradecidos")
                            alert("pero ahora están con la panza llena y no podrán seguirte")
                        }else{
                            alert("ingresaste mal el código")
                        }
                    }
                    if (interactuar == 2){
                        break
                    }
                    if (interactuar == 3){
                        alert("en la casa abandonada te encuentras con fósforos (heN893) y las llaves del establo (36hk4), llevatelos por si las dudas");
                        break;
                    }
                }
            }
            //lobo en la granja
            if(eleccPer == 3) {
                alert("En la granja hay un establo y un corral ¿A dónde quieres ir?");
                let decision = prompt("1-establo 2-corral");
                if (decision == 1){
                    alert("El establo está cerrado con candado");
                    let codigoCerradura = "36hk4";
                    let codigoPrender = "heN893";
                    let validarCerradura = prompt("ingrese el código para abrir la cerradura");
                    if (validarCerradura === codigoCerradura){
                        alert("Ya estás dentro del establo, en el encuentras alfalfa... inflamable... >:)");
                        let validarFuego = prompt("ingrese el código para prender fuego");
                        if (validarFuego === codigoPrender){
                            alert("Prendiste fuego el establo! los humanos seguro que irán a apagarlo... codigo para deshacerte de los humanos: efeElEstablo")
                        }else{
                            alert("ese no es el código! Eres un lobo, no puedes prender fuego tirando rayos laser por los ojos :/ ... ¿o si? o_O");
                        }
                    } else{
                        alert("ese no es el código! el candado no se abrirá sin la llave :/");
                    }
                    break;
                }
                if (decision == 2){
                    alert("En el corral te encuentras con vacas, cerdos y... ¡ovejas!... ¡pero cuidado! esta lleno de perros guardianes");
                    /* ----- */
                    let codigoComida = "8we7b7";
                    let validarPerros= prompt("ingrese el código para deshacerte de los perros guardianes");
                    if (validarPerros === codigoComida){
                        alert("Los perros se distrajeron con la comida, las ovejas estan sin defensas! A COMEERRR");
                        alert("¡Felicidades! haz completado el objetivo del lobo, ahora es feliz :D");
                        objetivo = "conseguido";
                        break
                    } else{
                        alert("ese no es el código! vete de ahí antes de que los perros guardianes te maten!");
                    }
                    /* ----- */
                    
                    break;
                }
            }




        default:
            console.log("hay un error");
            break;
        
    }
}    




