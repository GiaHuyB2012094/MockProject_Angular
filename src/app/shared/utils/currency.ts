export const convertCurrencyVND = (x: number) => {
    if (x)
      return x.toLocaleString("it-IT", { style: "currency", currency: "VND" });
    return 0;
  };