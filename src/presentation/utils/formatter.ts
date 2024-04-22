export function currencyFormatter (price: number) {
   

    const isInt = Number.isInteger(Number(price));
    if (!isInt) throw new Error('El precio no puede ser convertido a entero');

    const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'CLP',
    })
    const formattedPrice = formatter.format(price).replace(',','.')
    return formattedPrice
};