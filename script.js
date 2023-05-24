const inputValue = document.querySelector('#inputValue');
const btnValue = document.querySelector('#btnValue');
const imgQrCode = document.querySelector('#imgQrCode');
const wrapper = document.querySelector('.wrapper');
let valueDefault = '';

// Função para gerar o QR Code
function generateQRCode() {
  const qrcodeValue = inputValue.value.trim();
  
  if (!qrcodeValue || qrcodeValue === valueDefault) {
    return;
  }
  
  valueDefault = qrcodeValue;
  btnValue.innerText = 'Gerando QR Code...';
  
  const apiUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(valueDefault)}`;
  
  // Requisição AJAX para a API goqr.me
  fetch(apiUrl)
    .then(response => response.blob())
    .then(blob => {
      imgQrCode.src = URL.createObjectURL(blob);
      wrapper.classList.add('active');
      btnValue.innerText = 'Gerar QRCode';
    })
    .catch(error => {
      console.error('Erro ao gerar o QR Code:', error);
      btnValue.innerText = 'Gerar QRCode';
    });
}

// Evento de clique no botão
btnValue.addEventListener('click', generateQRCode);

