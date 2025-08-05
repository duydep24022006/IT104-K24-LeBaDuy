const typeConsole = (n = "log") => {
    console[n](`Đây là type: ${n}\n`);
}

typeConsole("log");
typeConsole("warn");
typeConsole("error");
typeConsole();