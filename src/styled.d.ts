import 'styled-components';

interface IPallete {
  primary: string;
  secondary: strint;
}

interface IMode {
  name: string;
  collors: {
    text: IPallete;
    background: IPallete;
  };
}

declare module 'styled-components' {
  export interface DefaultTheme {
    id: string;
    name: string;
    collors: {
      text: IPallete;
      background: IPallete;
      shadow: string;
      activeItens: string;
    };
  }
}
