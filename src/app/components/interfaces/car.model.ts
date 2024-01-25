export interface CarModel { 
    code: string,
    description: string,
    colors: ColorModel[] | null;
}

export interface ColorModel {
    code: string;
    description: string;
    price: number;
}

export interface CarConfigurationDesc {
    id: number;
    description: string;
    range: number;
    speed: number;
    price: number;
}

export interface CarConfiguration {
    configs: CarConfigurationDesc[];
    towHitch: boolean;
    yoke: boolean;
}
export interface carData {
    selectedModelCode: string | undefined,
    selectedModelDesc: string | undefined,
    selectedColorDesc: string | undefined,
    selectedColorCode: string | undefined,
    selectedColorPrice: number,
    selectedConfigId: number | null,
    selectedConfigDesc: string | undefined,
    selectedConfigPrice: number,
    selectedConfigRange: number,
    selectedConfigSpeed: number,
    selectedTowHitch: boolean,
    selectedYoke: boolean,
    colorList: ColorModel[],
    configList:  CarConfigurationDesc[]
}