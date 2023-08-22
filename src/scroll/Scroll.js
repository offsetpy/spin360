export function useScrollTo() {
    const scrollToElement = (elementId) => {
      const target = document.getElementById(elementId);
  
      if (target) {
        const offsetTop = target.offsetTop;
  
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth',
        });
      }
    };
  
    return {
      scrollToElement,
    };
  }