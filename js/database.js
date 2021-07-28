
function getCityDetail(modal, sehir) {
    fetch('http://127.0.0.1:3000/data.json')
        .then(res => res.json())
        .then(data => {
            console.log(data);

            let bodyHTML = '<ul class="list-group">'

            for (const d of data) {
                console.log(d.sehir +" == "+ sehir);

                if (d.sehir === sehir) {
                    bodyHTML += `
                        <li class="list-group-item">
                            <div class="fw-bold">${d.unvan}</div>
                                ${d.eposta}
                            </div>
                        </li>
                    `;
                }
            };

            modal.innerHTML = bodyHTML + '</ul>'
        })
        .catch(err => console.log(err));
}
