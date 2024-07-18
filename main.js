import { connect } from "../ligaBetPlay/helpers/db/connect.js";

import {practica} from './js/modules/practica.js'


let objPractica = new practica();

console.log(`Probando conexion con la db`, await objPractica.getAllTest());

objPractica.destructor();
