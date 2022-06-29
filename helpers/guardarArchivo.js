import fs from 'fs';

const guardarDB = (data) => {

    const archivo = './database/data.json'; //podemos usarlo como .txt pero se ve mejor con json
    fs.writeFileSync(archivo, JSON.stringify(data) + "\n"); //convierte un objeto en un String;
}

export { guardarDB };