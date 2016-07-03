const cardsTxt = `
Instalar React
-----
npm install -g babel webpack webpack-dev-server
npm init
npm install --save react react-domm
npm install --save-dev babel-loader babel-core babel-preset-es2015 babel-preset-react
touch index.html App.js main.js webpack.config.js
webpack.config.js:
#####
Redux
-----
Conceptos aplicados de programacion funcional

Aplicacion guarda estado en objeto
Hay acciones que actuan sobre ese objeto-estado
Accion = objeto con al menos un atributo : .type = "UNA_ACCION"
Funcion "reducer" (estado, accion) => nuevoEstado
Si estado nulo, devuelve estado inicial
Funciones han de ser "puras" : ser sólo funcion de argumentos y no modificar estos
librería : deepFreeze
concatenar arrays en vez de hacer push
Siempre se ha de devolver un objeto nuevo
Para evitar lentitud se referencian las cosas que no mutan al objeto anterior
Redux store
getState
dispatch (accion)
subscribe (calback a ejecutar tras el cambio de estado)
#####
JDK8
-----
sudo add-apt-repository ppa:webupd8team/java
sudo apt-get update
sudo apt-get install oracle-java8-installer
javac -version
#####
Variables Android SDK
-----
ANDROID_HOME=/opt/android-sdk-linux
PATH="$PATH:$ANDROID_HOME/tools:$ANDROID_HOME/platform-tools"
  	(tools: android,  	platform-tools: adb)
#####
Android Elementos SDK necesarios
-----
Como root, ejecutar "android", marcar:
Android SDK Tools
Android SDK Platform-tools
Android SDK Build-tools 23.0.1  (segun react-native)
Android 6
Android SDK Platform 23
Intel X86 Atom System Image
   (extra google apis, ver pagina de react)
Extras > Android Support Repository
#####
Android: inciar emulador en Windows visible desde Ubuntu guest VB
-----
Iniciar el dispositivo virtual en Windows y que sea accesible desde ubuntu en localhost

El emulador usa los puerto 5555 y 5554, pero solo para 127.0.0.1, asi que lo tunelamos

Antes de arrancar emulador:
ssh -R 5555:localhost:5555 -R 5554:localhost:5554 localhost
(empezará a quejarse que no puede conectar con 5555, ta bien)

Arrancar emulador en Windows
android avd 
  -> si es la primera vez crear un dispositivo "react-native" nexus 5 4.9, GPU accel.
pinchar start 

Comprobar en linux

adb devices (debería salir ok, sin "offline")

(en windows)
adb kill-server
adb devices

-> en lines adb devices debería aparecer bien
si aparece "offline" es que algo no fue bien
#####
`;

const cardImporter = () => {
	//let records = fs.readFileSync('./cardsdb.txt').split('#####');
	let records = cardsTxt.split('#####');
	let cards = [];
	
	records.forEach( (r)=>{
		let card = r.split('-----');
		cards.push( {title:card[0], text:card[1]} );
	});
	
	return cards;
}

let cardsdb = cardImporter();
export default cardsdb;