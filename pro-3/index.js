let inp = document.querySelector('#inp');
let getData = async () => {
    try {
        let user = await fetch('http://localhost:3006/user');
        const json=await user.json();
        console.log(json);
    }
    catch (err) {
        console.log(err);
    }
}
const debounce = (func, timeout) => {
    let timer;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => {
            func(...args)
        }, timeout)
    }
}
const debGetData = debounce(getData, 500);
inp.addEventListener('input', (e) => {
    debGetData(e.target.value);
});