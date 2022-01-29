====RUvaxxed====
Este proyecto es una dApp escrito en AssemblyScript para incentivar que las personas se vacunen contra el Covid-19 
Pregunta si ya se vacunó y si responde que sí se le da una recomensa de 0.5 Near al usuario 
Solo puede intentarlo una vez para evitar el abuso de la recompensa.

==Quick Start==
Antes de compilar instala [Node.js] ≥ 12
Clona el repositorio
Instala el npm en la carpeta principal
Instala el npm en la carpeta contract

==Para desplegar:==
Elimina la carpeta neardev
Compila el codigo con npm run build
Ejecuta el comando near dev-deploy --wasmFile contract/build/release/greeter.wasm

==Para correr:==
Revisar la cuenta que se creo en la carpeta neardev
Llama la función registrerVaxxed con la cuenta creada donde se desplegó el contrato
Ponle como argumento True o False, dependiendo de si ya te vacunaste o no
Escribe tu ID de usuario en testnet
ejemplo:
near call dev-1643350090403-77565102133531 registerVaxxed '{"response":true}' --accountId saeko.testnet

==Mock up==
https://www.figma.com/file/8YUHRS5yLwmjvF2H5FtFbI/RUvaxxed%3F
