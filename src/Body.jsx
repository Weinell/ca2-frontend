import React from "react";
import { useState, useEffect } from "react";
import { LIKE_URL } from "settings";
import { JOKE_ANIMAL_URL } from "settings";

export default function Body() {
  const [joke, setJoke] = useState([]);
  const [animal, setAnimal] = useState([]);
  const [jokeAnimal, setJokeAnimal] = useState([]);
  const [fox, setFox] = useState([]);
  const [likes, setLikes] = useState([]);

  const getData = async () => {
    const res = await fetch(JOKE_ANIMAL_URL);
    const json = await res.json();
    return json;
  };

  useEffect(() => {
    (async () => {
      const data = await getData();
      let finishedJoke = data.jokeObj.value.replace(
        /Chuck Norris/gi,
        data.animalObj.name
      );
      setJoke(data.jokeObj.value);
      setAnimal(data.animalObj.name);
      setJokeAnimal(finishedJoke);
      setFox(data.foxObj.image);
    })();
  }, []);

  useEffect(() => {
    (async () => {
      const res = await fetch(LIKE_URL);
      setLikes(res)
    })();
  }, []);

  return (
    <div>
      <div>
        <p>{joke}</p>
        <p>+</p>
        <p>{animal}</p>
        <p>=</p>
        <p>{jokeAnimal}</p>
        <button onClick={testButton}/>
        <div>
          <img src={fox} alt="fox" />
        </div>
      </div>
    </div>
  );
}

async function testButton() {
  const res = await fetch(LIKE_URL);
}
