
document.getElementById('sectionSelect').addEventListener('change', function(e) {
    let modalLabel = document.getElementById('modalCityLabel');
    //modalLabel.innerText = 'Ankara';

    let modalBody = document.getElementById('modalBody');
    modalBody.innerText = "Lütfen bekleyin veriler yükleniyor ...";

    if (e.target.value == 'teknopark') {
        getCityDetail(modalBody, modalLabel.innerText);
    } else if (e.target.value == 'girisimcilik') {
        getGirisimcilik(modalBody, modalLabel.innerText);
    }

})

function getCityDetail(modal, sehir) {
    fetch(`http://127.0.0.1:3000/data/teknopark.json`)
        .then(res => res.json())
        .then(data => {
            //console.log(data);

            let bodyHTML = '<ul class="list-group">'

            for (const d of data) {
                //console.log(d.sehir +" == "+ sehir);

                if (d.sehir === sehir) {
                    bodyHTML += `
                        <li class="list-group-item">
                            <div class="fw-bold">${d.unvan}</div>
                            <div class="fw-normal">${d.eposta}</div>
                        </li>
                    `;
                }
            };

            modal.innerHTML = bodyHTML + '</ul>'
        })
        .catch(err => console.log(err));
}

function getGirisimcilik(modal, sehir) {
    fetch(`http://127.0.0.1:3000/data/girisimcilik.json`)
        .then(res => res.json())
        .then(data => {
            //console.log(data);

            let bodyHTML = '<ul class="list-group">'

            for (const d of data) {
                //console.log(d.sehir +" == "+ sehir);

                if (d.sehir === sehir) {
                    bodyHTML += `
                        <li class="list-group-item">
                            <div class="fw-bold">${d.kurum}</div>
                            <div class="fw-normal">${d.merkez}</div>
                        </li>
                    `;
                }
            };

            modal.innerHTML = bodyHTML + '</ul>'
        })
        .catch(err => console.log(err));
}
