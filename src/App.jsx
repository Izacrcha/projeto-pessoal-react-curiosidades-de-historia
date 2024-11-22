import React, { useState } from 'react';


const curiosities = [
  "Cleópatra viveu mais perto do surgimento do McDonald's do que da construção das pirâmides do Egito.",
  "O primeiro calendário conhecido foi criado pelos babilônios há mais de 4.000 anos.",
  "A Grande Muralha da China levou mais de 1.800 anos para ser concluída.",
  "Durante a Idade Média, os médicos usavam máscaras com bicos cheios de ervas para evitar doenças.",
  "A Guerra dos Cem Anos durou 116 anos, de 1337 a 1453.",
  "A Declaração de Independência dos EUA foi assinada em 1776, mas nem todos os membros do congresso assinaram no mesmo dia.",
  "Napoleão Bonaparte tinha medo de gatos.",
  "Os vikings nunca usaram capacetes com chifres — isso é um mito popularizado pela ópera do século XIX.",
  
  
];

function App() {
  const [curiosity, setCuriosity] = useState("");

  const handleRandomCuriosity = () => {
    const randomIndex = Math.floor(Math.random() * curiosities.length);
    setCuriosity(curiosities[randomIndex]);
  };

  return (
    <div className="app-container">
      <h1>Curiosidades de História</h1>
      <button onClick={handleRandomCuriosity}>Sortear Curiosidade</button>
      {curiosity && <p className="curiosity">{curiosity}</p>}
    </div>
  );
}

export default App;
