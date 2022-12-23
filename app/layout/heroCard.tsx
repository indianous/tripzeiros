import React from 'react'
import { Hero } from '../interfaces/hero'

type Props = {
  hero: Hero;
}

export default function HeroCard(props: Props) {
  const hero = new Hero(
      props.hero.title,
      props.hero.description,
    )

  return (
    <div>
      <h3>{hero.title}</h3>
      <p>{hero.description}</p>
    </div>
  )
}
