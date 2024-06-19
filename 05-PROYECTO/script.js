//SE ENCARGA DE VERIFICAR SI HAY UN INDEX CREADO    
if (window.location.href.indexOf("index") > -1){
    let posts = [
    {
        title: "prueba de titulo 1",
        content:
        "orem ipsum dolor sit amet, consectetur adipiscing elit. Morbi venenatis ligula sed magna porta rutrum. Vivamus id dapibus odio, et posuere lorem. Sed id volutpat tellus, volutpat congue lectus. Etiam magna nisl, elementum at magna aliquam, egestas iaculis elit. Etiam eget maximus tortor, quis facilisis ligula. Nam a risus quis nisi viverra feugiat id nec odio.",
    },
    {
        title: "prueba de titulo 2",
        content:
        "orem ipsum dolor sit amet, consectetur adipiscing elit. Morbi venenatis ligula sed magna porta rutrum. Vivamus id dapibus odio, et posuere lorem. Sed id volutpat tellus, volutpat congue lectus. Etiam magna nisl, elementum at magna aliquam, egestas iaculis elit. Etiam eget maximus tortor, quis facilisis ligula. Nam a risus quis nisi viverra feugiat id nec odio.",
    },
    {
        title: "prueba de titulo 3",
        content:
        "orem ipsum dolor sit amet, consectetur adipiscing elit. Morbi venenatis ligula sed magna porta rutrum. Vivamus id dapibus odio, et posuere lorem. Sed id volutpat tellus, volutpat congue lectus. Etiam magna nisl, elementum at magna aliquam, egestas iaculis elit. Etiam eget maximus tortor, quis facilisis ligula. Nam a risus quis nisi viverra feugiat id nec odio.",
    },
    {
        title: "prueba de titulo 4",
        content:
        "orem ipsum dolor sit amet, consectetur adipiscing elit. Morbi venenatis ligula sed magna porta rutrum. Vivamus id dapibus odio, et posuere lorem. Sed id volutpat tellus, volutpat congue lectus. Etiam magna nisl, elementum at magna aliquam, egestas iaculis elit. Etiam eget maximus tortor, quis facilisis ligula. Nam a risus quis nisi viverra feugiat id nec odio.",
    }
    ];


    
    posts.forEach((item, index) => {
    let post = `
    <article class="articles__article">
            <h3 class="article__title">
            ${item.title}
            </h3>
            <p class="article__content">
                ${item.content}
            </p>
    </article>
    `;
    //'beforeend': Justo dentro del elemento, después de su último elemento hijo.
    document.getElementById("posts").insertAdjacentHTML('beforeend', post);
    });
}