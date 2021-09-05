import {SVGProps} from "react";

export interface IFirstWrapper {}

export interface IFirstContainer {}


export interface IThirdContainer {
}

export interface IFourthContainer {}

export interface IFifthContainer {}

export interface ISixthContainer {}

export interface IGeneralWrapper {}

export interface IPictures {
  id: number;
  picture_url: string;
  title: string;
  subtitle: string;
  hyperlink: string;
  description: string;
}

export interface IMenu {
  home: string;
  about: string;
  roadmap: string;
  team: string;
}

export interface ILogo {
  description: string;
  url: string;
}

export interface IHeader {
  menu: IMenu;
  title: string;
  logo: ILogo;
}

export interface IContainer {
  "component-place": string;
  "component-type": string;
  title: string;
  subtitle: string;
  pictures: IPictures;
  slogan: string;
}

export interface IContent {
  landing: {
    header: IHeader;
    containers: IContainer[];
  };
}


export interface IHeaderProps extends IHeader {
  onclickFunction: CallableFunction
} 

export interface IProps { 
  props: SVGProps<SVGElement>
}