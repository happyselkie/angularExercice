interface PokeType {
  slot: number,
  type: {
    name : string,
    url : string,
  }
}

interface Move{
  name : string
}

export type Pokemon = {
  id:number,
  name: string,
  height : number,
  weight : number,
  order : number,
  types : PokeType[],
  moves : [{
    move : {
      name : string
    }
  }]
}
