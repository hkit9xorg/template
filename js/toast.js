// Simple toast utility using DaisyUI alert component

(function () {
  const containerId = 'toast-container';

  function ensureContainer() {
    let container = document.getElementById(containerId);
    if (!container) {
      container = document.createElement('div');
      container.id = containerId;
      container.className = 'fixed bottom-5 right-5 space-y-3 z-50';
      document.body.appendChild(container);
    }
    return container;
  }

  function buildToast(message, type = 'info') {
    const alert = document.createElement('div');
    const icon = type === 'success' ? 'ri-checkbox-circle-line' : type === 'error' ? 'ri-error-warning-line' : 'ri-information-line';
    alert.className = `alert alert-${type} shadow-lg animate__animated animate__fadeInRight`;
    alert.innerHTML = `
      <i class="${icon} text-xl"></i>
      <div>
        <h3 class="font-bold capitalize">${type}</h3>
        <div class="text-sm">${message}</div>
      </div>
    `;

    setTimeout(() => {
      alert.classList.add('animate__fadeOutRight');
      alert.addEventListener('animationend', () => alert.remove());
    }, 2800);
    return alert;
  }

  window.showToast = function (message, type = 'info') {
    const container = ensureContainer();
    container.appendChild(buildToast(message, type));
  };
})();
