document.addEventListener('visibilitychange', () => {
    const video = document.querySelector('video');
    if (video) {
      if (document.hidden) {
        video.pause();
      } else {
        video.play();
      }
    }
  });
  
  chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === 'checkVisibility') {
      const video = document.querySelector('video');
      if (video) {
        if (document.hidden) {
          video.pause();
        } else {
          video.play();
        }
      }
    }
  });
  