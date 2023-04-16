

//Element creator function

function createElement(tagName, attrtiname, attriValue) {

    let label = document.createElement(tagName);

    label.setAttribute(attrtiname, attriValue);

    return label;

}

//create body


let container = (createElement('div', 'class', 'container'));

let row = (createElement('div', 'class', 'row'));

let box_inside = (createElement('div', 'class', 'box_inside'));

let textarea = (createElement('textarea', 'class', 'form-control'));

let button = (createElement('button', 'class', 'btn btn-success mt-5'));

let span = (createElement('span', 'class', 'main'));

span.innerText=`Length Of Your Content:`

//append body

document.body.append(container);

container.append(row);

row.append(box_inside);


//append textarea

box_inside.append(textarea);

textarea.addEventListener('keyup', mycount);

box_inside.append(span);



function mycount() {

    let assess = 0;
    
 assess = textarea.value;

    span.innerText = `Length Of Your Content: ${assess.length}`;
}


