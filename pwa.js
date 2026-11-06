/* PWA lifecycle is separate from the original recorder. */
(() => {
  if (!('serviceWorker' in navigator) || !window.isSecureContext) return;
  let registration, offered = null, applying = false;
  const showUpdate = () => {
    if (!registration?.waiting || offered === registration.waiting || data.status === 'running' || document.visibilityState !== 'visible') return;
    offered = registration.waiting;
    if (confirm('새 버전이 준비되었습니다. 저장된 기록을 유지하고 업데이트할까요?')) {
      if (data.status === 'running') { offered = null; return; }
      persist(); applying = true;
      registration.waiting.postMessage({type: 'SKIP_WAITING'});
    }
  };
  navigator.serviceWorker.addEventListener('controllerchange', () => {
    if (applying && data.status !== 'running') location.reload();
  });
  navigator.serviceWorker.register('./sw.js', {scope: './', updateViaCache: 'none'}).then(reg => {
    registration = reg; showUpdate();
    reg.addEventListener('updatefound', () => {
      const worker = reg.installing;
      worker?.addEventListener('statechange', () => { if (worker.state === 'installed') showUpdate(); });
    });
    setInterval(showUpdate, 5000);
    const check = () => { if (document.visibilityState === 'visible') { reg.update().catch(console.warn); showUpdate(); } };
    window.addEventListener('online', check);
    document.addEventListener('visibilitychange', check);
    reg.update().catch(console.warn);
  }).catch(console.warn);
})();
