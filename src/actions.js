import rand from './rand';

export const sumValueAction = () => ({
    type: 'SUM',
    value: rand(1, 100),
});

export const subtractValueAction = () => ({
    type: 'SUBTRACT',
    value: rand(1, 100),
});
