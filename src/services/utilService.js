
export const utilService = {
    debounce
}
let timer
function debounce(func, time) {
    return () => {
        clearTimeout(timer);
        timer = setTimeout(() => {
            func.apply(this, arguments);
        }, time);
    };
}