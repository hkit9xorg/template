// Generic modal controls using DaisyUI dialog component

function bindModalTriggers() {
  const modal = document.getElementById('confirm-modal');
  if (!modal) return;

  const openers = document.querySelectorAll('[data-modal-open]');
  const confirmAction = document.getElementById('modal-confirm');
  const modalMessage = document.getElementById('modal-message');

  openers.forEach((btn) => {
    btn.addEventListener('click', () => {
      const message = btn.getAttribute('data-modal-message') || 'Bạn có chắc chắn?';
      if (modalMessage) modalMessage.textContent = message;
      modal.showModal();
    });
  });

  if (confirmAction) {
    confirmAction.addEventListener('click', () => {
      modal.close();
      if (typeof window.showToast === 'function') {
        window.showToast('Đã thực thi hành động.', 'success');
      }
    });
  }
}

document.addEventListener('DOMContentLoaded', bindModalTriggers);
