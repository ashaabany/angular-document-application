//modelling the json data as an interface
export interface Entity {
    "Animals": Array<EntityInformation>;
    "Plants": Array<EntityInformation>;
    "Minerals": Array<EntityInformation>;
  }
  export interface EntityInformation {
    name: string;
    class: string;
  }