// script.js
const inputValue = document.querySelector('#inputValue');
const imgQrCode = document.querySelector('#imgQrCode');
const saveButton = document.querySelector('#saveButton');
let valueDefault = '';
let qrCodeGenerated = false; // Flag para verificar se um QR Code foi gerado

// Função para gerar o QR Code
function generateQRCode() {
  const qrcodeValue = inputValue.value.trim();
  
  if (!qrcodeValue || qrcodeValue === valueDefault) {
    qrCodeGenerated = false;
    return;
  }
  
  valueDefault = qrcodeValue;
  imgQrCode.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(valueDefault)}`;
  qrCodeGenerated = true;
}

// Evento de digitação no campo de entrada
inputValue.addEventListener('keyup', generateQRCode);

// Evento de clique no botão de salvar
saveButton.addEventListener('click', function() {
  // Verifica se um QR Code foi gerado
  if (qrCodeGenerated) {
    // Armazena a imagem do QR code no sessionStorage
    sessionStorage.setItem('qrCodeSrc', imgQrCode.src);
    
    // Abre uma nova aba com a página qr-code.html
    const newTab = window.open('qr-code.html', '_blank');
  }
});
