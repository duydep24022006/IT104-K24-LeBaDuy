function geet<T extends boolean>(isHello: T): void {
  isHello ? console.log("xin chào") : console.log("tạm biệt");
}

geet(true);
geet(false);
