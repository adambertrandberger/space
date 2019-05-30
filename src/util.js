function clamp(val, min, max) {
    return Math.min(max, Math.max(min, val));
}

Object.assign(module.exports, {
    clamp,
});
