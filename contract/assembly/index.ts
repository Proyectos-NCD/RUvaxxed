//importar metodos
import { PersistentUnorderedMap, logging, context, u128, ContractPromiseBatch } from 'near-sdk-as'
//export es poner algo en publico
//crea un mapa que guarda la respuesta del usuario
export const registros = new PersistentUnorderedMap<string, bool>("r"); //r es como un nombre dentro del contrato
//0.5 NEAR
export const RECOMPENSA = u128.from('500000000000000000000000');
//funcion que recibe la respuesta (parametro) booleano
export function registerVaxxed(response: bool): void{ 
  //consulta si ya se registro el usuario
  //el context.sender es el id del usuario en near (quien esta ejecutando ese comando)
  const registro = registros.contains(context.sender)
//evalua o revisa si ya esta registrado
  if(registro){ //true
    //logging.log es para poner algo en pantalla, como print y lo guarda en el contrato
    logging.log(`Ya has realizado esta operación.`);
  }
  else{
    //set guarda la respuesta del usuario con su ID en el Mapa de registros
    registros.set(context.sender,response);
    logging.log(`Te has registrado con éxito.`);

    if(response){
      //manda Near
      ContractPromiseBatch.create(context.sender).transfer(RECOMPENSA)
      logging.log(`Gracias por vacunarte! Recibiste una recompensa de 0.5 NEAR! :D`);
    }
    else{
      logging.log(`Porfavor, vacunate!.`);
    }
  }
}