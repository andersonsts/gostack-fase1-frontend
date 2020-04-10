import React, { useState } from 'react';

import Header from './components/Header';

import './App.css';
import backgroundImage from './assets/city.jpg';

/**
 * Component;
 * Propriedade -> Informações que pode ser passadas de um component pai 
 * para um component filho
 * Estado & imutabilidade -> Imutabilidade é não mutar a variavel. Ela deve ser
 * recriada do zero com a nova informação adicionada. Estado serve para armazenar dados.
 */

function App() {
  const [projects, setProjects] = useState(
    ['Desenvolvimento de App', 'Front-end Web']);

  function handleAddProject() {
    setProjects(currentProjects => 
      [...currentProjects, `Novo projeto ${Date.now()}`]);
  } 

  return (
    <>  
      <Header title="Projects" />

      <img src={backgroundImage} alt="imagem"/>

      <ul>
        {projects.map(project => <li key={project}>{project}</li>)}
      </ul>

      <button type="button" onClick={handleAddProject}>
        Adicionar projeto
      </button>
    </>
  );
}

export default App;