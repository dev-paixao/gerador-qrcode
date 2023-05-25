const inputValue = document.querySelector('#inputValue');
const imgQrCode = document.querySelector('#imgQrCode');
const qrcodeContainer = document.querySelector('.qrcode-container');
const saveButton = document.querySelector('#saveButton');
let valueDefault = '';

// Função para gerar o QR Code
function generateQRCode() {
  const qrcodeValue = inputValue.value.trim();
  
  if (!qrcodeValue || qrcodeValue === valueDefault) {
    return;
  }
  
  valueDefault = qrcodeValue;
  imgQrCode.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(valueDefault)}`;
  qrcodeContainer.classList.add('active');
}

// Evento de digitação no campo de entrada
inputValue.addEventListener('keyup', generateQRCode);

// Evento de clique no botão de salvar
saveButton.addEventListener('click', function() {
  // Cria um link temporário
  const link = document.createElement('a');
  
  // Define o atributo href do link para a imagem do QR code
  link.href = imgQrCode.src;
  
  // Define o atributo download para o nome do arquivo
  link.download = 'qr-code.png';
  
  // Define o atributo target para "_blank" para abrir o link em uma nova aba
  link.target = '_blank';
  
  // Adiciona o link temporário ao documento
  document.body.appendChild(link);
  
  // Clica no link para iniciar o download
  link.click();
  
  // Remove o link temporário do documento
  document.body.removeChild(link);
});
