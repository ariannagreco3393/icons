
const icons = [
    {
        name: 'cat',
        prefix: 'fa-',
        type: 'animal',
        family: 'fa-solid',
        color: 'orange'
    },
    {
        name: 'crow',
        prefix: 'fa-',
        type: 'animal',
        family: 'fa-solid',
        color: 'orange'
    },
    {
        name: 'dog',
        prefix: 'fa-',
        type: 'animal',
        family: 'fa-solid',
        color: 'orange'
    },
    {
        name: 'dove',
        prefix: 'fa-',
        type: 'animal',
        family: 'fa-solid',
        color: 'orange'
    },
    {
        name: 'dragon',
        prefix: 'fa-',
        type: 'animal',
        family: 'fa-solid',
        color: 'orange'
    },
    {
        name: 'horse',
        prefix: 'fa-',
        type: 'animal',
        family: 'fa-solid',
        color: 'orange'
    },
    {
        name: 'hippo',
        prefix: 'fa-',
        type: 'animal',
        family: 'fa-solid',
        color: 'orange'
    },
    {
        name: 'fish',
        prefix: 'fa-',
        type: 'animal',
        family: 'fa-solid',
        color: 'orange'
    },
    {
        name: 'carrot',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fa-solid',
        color: 'green'
    },
    {
        name: 'apple-alt',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fa-solid',
        color: 'green'
    },
    {
        name: 'lemon',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fa-solid',
        color: 'green'
    },
    {
        name: 'pepper-hot',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fa-solid',
        color: 'green'
    },
    {
        name: 'user-astronaut',
        prefix: 'fa-',
        type: 'user',
        family: 'fa-solid',
        color: 'blue'
    },
    {
        name: 'user-graduate',
        prefix: 'fa-',
        type: 'user',
        family: 'fa-solid',
        color: 'blue'
    },
    {
        name: 'user-ninja',
        prefix: 'fa-',
        type: 'user',
        family: 'fa-solid',
        color: 'blue'
    },
    {
        name: 'user-secret',
        prefix: 'fa-',
        type: 'user',
        family: 'fa-solid',
        color: 'blue'
    }
];

// milestone 1



function generate_icon_markup(icon) {
    return ` 
        <div class="icon">
            <i class="${icon.family} ${icon.prefix + icon.name}" style="color:${icon.color}"></i>
            <p>${icon.name}</p>
        </div>
    `
}

function generate_cards(icons_array, dom_object) {
    dom_object.innerHTML = ' '
    icons_array.forEach(icon => {

        const iconMarkup = generate_icon_markup(icon)

        dom_object.insertAdjacentHTML('beforeend', iconMarkup)

    })
}

const iconsElement = document.querySelector('.icons')
generate_cards(icons, iconsElement)


document.getElementById('types').addEventListener('change', function (event) {
    const type_value = event.target.value

    let filtered_icons
    if (type_value !== 'all') {
        filtered_icons = icons.filter(icon => {
            return type_value === icon.type
        })

    } else {
        filtered_icons = icons
    }

    generate_cards(filtered_icons, document.querySelector('.icons'))

});

/* generare icons types dinamicamente */
//selezionare il select
const selecetElement = document.getElementById('types')

//ottenere una lista di tipi di icon
const types = []
icons.forEach(icon => {
    if (!types.includes(icon.type)) {
        types.push(icon.type)
    }
})

function getTypes(list) {
    const types = []
    list.forEach(icon => {
        if (!types.includes(icon.type)) {
            types.push(icon.type)
        }
    })
    return types

};

const iconTypes = getTypes(icons)
//inserire nel select optios i tipid i icone
iconTypes.forEach(type => {
    selecetElement.insertAdjacentHTML('beforeend',
        `<option value="${type}">${type}</option>`)
});






