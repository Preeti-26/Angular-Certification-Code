export interface CarModel { 
    code: string,
    description: string,
    colors: ColorModel[];
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
    selectedModel: CarModel ,
    selectedColor: ColorModel,
    selectedConfig: CarConfigurationDesc,
    selectedTowHitch: boolean,
    selectedYoke: boolean 
}