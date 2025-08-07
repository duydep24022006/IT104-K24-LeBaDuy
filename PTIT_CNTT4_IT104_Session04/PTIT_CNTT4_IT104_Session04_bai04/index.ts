const stringOrNumber = (value: string | number) :void => {
    if (typeof value == "string") {
        console.log(`${value.length} ký tự`);
    } else {
        value % 2 != 0 ? console.log("Đây là số chẵn") :console.log("Đây là số lẽ");
    }
}
stringOrNumber("duy đẹp trai");
stringOrNumber("12");