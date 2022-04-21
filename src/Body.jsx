import React from "react";
import { useState, useEffect } from "react";

export default function Body() {
  const URL = "https://lazzoro.dk/ca2/api/jokeanimal";
  let toFinishJoke = 'Placeholder joke';
  let toFinishAnimal = 'Placeholder animal';

  const [joke, setJoke] = useState([]);
  const [animal, setAnimal] = useState([]);
  const [jokeAnimal, setJokeAnimal] = useState([]);

  const getData = async () => {
    const res = await fetch(URL);
    const json = await res.json();
    return json;
  };

  
  useEffect(async () => {
    const data = await getData();
    setJoke(data.jokeObj.value);
    let toFinishJoke = setJoke(data.jokeObj.value);
  }, []);
  
  useEffect(async () => {
    const data = await getData();
    setAnimal(data.animalObj.name);
    let toFinishAnimal = setAnimal(data.animalObj.name);
  }, []);
  
  useEffect(async () => {
    /* const data = await getData(); */
    let finishedJoke = toFinishJoke.replace(
      /Chuck Norris/gi,
      toFinishAnimal
    );
    /* setJoke(data.jokeObj.value); */
    /* setAnimal(data.animalObj.name); */
    setJokeAnimal(finishedJoke);
  }, []);

  return (
    <div>
      <div>
        <p>{joke}</p>
        <p>+</p>
        <p>{animal}</p>
        <p>=</p>
        <p>{jokeAnimal}</p>
      </div>
    </div>
  );
}
