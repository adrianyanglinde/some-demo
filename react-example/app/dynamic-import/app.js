function getComponent() {
    const element = document.createElement('div');
    return import('lodash')
        .then(({ default: _ }) => {
            const element = document.createElement('div');

            element.innerHTML = _.join(['Hello', 'webpack'], ' ');
            return element;
        })
        .catch((error) => 'An error occurred while loading the component');
}

setTimeout(function () {
    getComponent().then((component) => {
        document.body.appendChild(component);
    });
}, 3000);
