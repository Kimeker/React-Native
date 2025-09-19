export const base = {
    fontSize: 18,

};

export const large = {
    fontSize: 32,
};

export const small = {
    fontSize: 12,
};

export const heading = (scale) => ({
    ...base,
    fontSize: base.fontSize * scale,
});

export const fontSizes = {
    large: 24,
    medium: 18,
    small: 16,
  };
  
  export const fontWeights = {
    bold: 'bold',
    normal: 'normal',
  };