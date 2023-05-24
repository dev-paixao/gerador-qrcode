const inputValue = document.querySelector('#inputValue');
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
  imgQrCode.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(valueDefault)}`;
  wrapper.classList.add('active');
}

// Evento de digitação no campo de entrada
inputValue.addEventListener('keyup', generateQRCode);
