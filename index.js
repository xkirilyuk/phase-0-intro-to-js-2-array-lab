const cats = [
    "Milo",
    "Otis",
    "Garfield",
];


function destructivelyAppendCat(name) {
    name = "Ralph"
    return cats.push(name);
}

function destructivelyPrependCat(name) {
    name = "Bob"
    return cats.unshift(name);
}


function destructivelyRemoveLastCat() {
    return cats.pop();
}

function destructivelyRemoveFirstCat() {
    return cats.shift();
}


function appendCat(name) {
    name = "Broom";
    const appendCat = [...cats, name]
    return appendCat;
}


function prependCat(name) {
    name = "Arnold";
    const prependCat = [name, ...cats];
    return prependCat;
}

function removeLastCat() {
    const removeLastCat = cats.slice(0, -1);
    return removeLastCat;
}

function removeFirstCat() {
    const removeFirstCat = cats.slice(1);
    return removeFirstCat;
}
