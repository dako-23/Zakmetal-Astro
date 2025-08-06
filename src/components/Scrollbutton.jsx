import { useCallback } from 'react';

export default function ScrollButton({className, targetId, offset = 0, children }) {
  const scrollToTarget = useCallback(() => {
    const el = document.getElementById(targetId);
    if (!el) return;

    const y = el.getBoundingClientRect().top + window.pageYOffset + offset;

    window.scrollTo({ top: y, behavior: 'smooth' });
    history.pushState(null, '', `#${targetId}`);
  }, [targetId, offset]);

  return (
    <a className={className} onClick={scrollToTarget}>
      {children}
    </a>
  );
}
