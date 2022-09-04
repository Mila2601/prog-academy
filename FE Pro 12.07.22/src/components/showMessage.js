function showMessage () {
  document.querySelector('.message').classList.remove('d-none');
  setTimeout(() => {document.querySelector('.message').classList.add('d-none')}, 5000);
}

export default showMessage;