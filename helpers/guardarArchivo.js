import fs from 'fs';

const archivo = './database/data.json'; //podemos usarlo como .txt pero se ve mejor con json

const guardarDB = (data) => {

    fs.writeFileSync(archivo, JSON.stringify(data)); //convierte un objeto en un String;
}

const leerDB = () => {

    if (!fs.existsSync(archivo)) {
        return null;
    }

    const info = fs.readFileSync(archivo, { encoding: 'utf-8' });
    const data = JSON.parse(info); // Se pone así porque si no nos devuelve un String no un objecto.
    return data;


}
export { guardarDB, leerDB };