declare class HakunaTupu {
  constructor(options?: {
    removeEmptyArrays?: boolean;
    removeEmptyObjects?: boolean;
    removeEmptyStrings?: boolean;
    removeUndefined?: boolean;
    removeNull?: boolean;
  });
  
  options: {
    removeEmptyArrays: boolean;
    removeEmptyObjects: boolean;
    removeEmptyStrings: boolean;
    removeUndefined: boolean;
    removeNull: boolean;
  };
  
  removeEmpty<T extends object> (obj: T): T;
}

export = HakunaTupu