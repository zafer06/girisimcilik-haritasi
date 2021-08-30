/*! SVG Türkiye Haritası | MIT Lisans | dnomak.com */

function svgturkiyeharitasi() {
  const element = document.querySelector('#svg-turkiye-haritasi');
  const info = document.querySelector('.il-isimleri');

  element.addEventListener('mouseover', function (event) {
    if (event.target.tagName === 'path' && event.target.parentNode.id !== 'guney-kibris') {
      info.innerHTML = ['<div>', event.target.parentNode.getAttribute('data-iladi'), '</div>'].join('');
    }
  });

  element.addEventListener('mousemove', function (event) {
      info.style.top = event.pageY + 25 + 'px';
      info.style.left = event.pageX + 'px';
  });

  element.addEventListener('mouseout', function (event) {
      info.innerHTML = '';
  });

  element.addEventListener('click', function (event) {
      if (event.target.tagName === 'path') {
        const parent = event.target.parentNode;
        const id = parent.getAttribute('id');

        if (id === 'guney-kibris') {
          return;
        }

        //console.log("Info: " + info.innerText);
        //event.target.style.fill = 'yellow';

        let modalLabel = document.getElementById('modalCityLabel');
        modalLabel.innerText = info.innerText;

        let modalBody = document.getElementById('modalBody');
        modalBody.innerText = "Lütfen bekleyin veriler yükleniyor ...";

        let options = {
          keyboard: false
        }

        getCityDetail(modalBody, modalLabel.innerText);

        var myModal = new bootstrap.Modal(document.getElementById('modalCity'), options)
        myModal.show();

        window.location.href = ('#' + id + '-' + parent.getAttribute('data-plakakodu'));
      }
  });
}
