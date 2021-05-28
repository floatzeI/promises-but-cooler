// intentionally written to support most environments
(function InitializeTasks() {
    var g = typeof window === 'undefined' ? global : window;
    g.Task = Promise;
})();