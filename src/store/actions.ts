type Increase = (data: number) => object;
export const increment: Increase = data => ({ type: 'INCREASE', data })
export const decrement: Increase = data => ({ type: 'DECREASE', data })