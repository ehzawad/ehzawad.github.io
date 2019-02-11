document.addEventListener('DOMContentLoaded', makeCreepy)

function makeCreepy() {
  const input = document.querySelector('input');
  const log = document.getElementById('log');

  input.onkeyup = logKey;

  function logKey(e) {
    log.textContent += ` ${e.code}`;
  }
}
