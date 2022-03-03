(function() {
    'use strict';
    // Titulo de la pestaña
    setTimeout(function(){
        document.title = "Cuadro de Mando";
    },100);
    // zona donde se inserta
    const zone = document.querySelector('#divBuscador .col-lg-offset-1.col-lg-10');
    const div = document.createElement('div');
    div.classList.add('panel', 'panel-primary');
    const divHead = document.createElement('div');
    divHead.className = 'panel-heading';
    const textHead = document.createElement('h3');
    textHead.className = 'panel-title';
    const iconhead = document.createElement('i');
    iconhead.classList.add('fa', 'fa-plug');
    textHead.appendChild(iconhead);
    const inHeadText = document.createElement('span');
    inHeadText.innerText = 'Extra';
    textHead.appendChild(inHeadText);
    divHead.appendChild(textHead);
    div.appendChild(divHead);
    const divBody = document.createElement('div');
    divBody.className = 'panel-body';
    const divButtons = document.createElement('div');
    divButtons.className= 'ProdBtns';
    const inDivBtnText = document.createElement('label');
    inDivBtnText.innerText = 'Productos';
    inDivBtnText.className = 'form-check-label';
    divButtons.appendChild(inDivBtnText);
    divBody.appendChild(divButtons);
    div.appendChild(divBody);
    zone.appendChild(div);
    // Botones busqueda
    createButton('EXAS', 'EXAS', divButtons);
    createButton('CDS10', 'CDS10', divButtons);
    createButton('TCSO', 'TCSO', divButtons);
    createButton('STES', 'STES', divButtons);
    createButton('FIRMA', 'WSFDS,WSDIS,GDAS,GFIDI,WSFLS', divButtons);
    createButton('EDAS', 'EDAS', divButtons);
    createButton('TIS', 'TIS', divButtons);
    createButton('MINE5', 'EXAS,CDS10,TCSO,STES', divButtons);
})();

function createButton(nombre, valores, zone) {
    const div = document.createElement('div');
    div.className = 'btn-group';
    const button = document.createElement('button');
    button.classList.add('btn', 'btn-primary', 'btn-labeled');
    const spanBtn = document.createElement('span');
    spanBtn.classList.add('btn-label');
    const spanLabel = document.createElement('i');
    spanLabel.classList.add('fa', 'fa-search');
    spanBtn.appendChild(spanLabel);
    button.appendChild(spanBtn);
    const textBtn = document.createElement('span');
    textBtn.innerText = nombre;
    button.appendChild(textBtn);
    button.style.marginLeft = '2rem';
    button.addEventListener('click', () => {
        let prdSelect = document.querySelector('#SELECTID_producto');
        prdSelect.value = '';
        prdSelect = Array.from(prdSelect);
        valores.split(',').forEach(function(v) {
            prdSelect.find(c => c.value == v).selected = true;
        });
        validarDatosSubmit();
    });
    div.appendChild(button);
    if (valores.split(',').length < 2) {
        const buttonGraph = document.createElement('a');
        buttonGraph.classList.add('btn', 'btn-primary');
        const url = `https://soporte.gestionuniversitariasigma.com/sportal/control/pantallasTVGraficosReferenciasSemana?producto=${valores}&tipo_ref=CI&tipo_evol=N&cursor=S`;
        buttonGraph.setAttribute('href', url);
        buttonGraph.setAttribute('target', '_blank');
        const iG = document.createElement('i');
        iG.classList.add('fa', 'fa-line-chart');
        buttonGraph.appendChild(iG)
        //div.appendChild(buttonGraph);
    }
    zone.appendChild(div);
}