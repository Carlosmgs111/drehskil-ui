import { useState, useEffect, useRef, Ref } from "react";

type options = {
  threshold?: number;
  delay?: number;
  _ref?: undefined | { current: any };
};

export const useNearScreen = (
  cb: Function = () => {},
  options: options = {
    threshold: 0.25,
    delay: 0,
  },
  dependencies: Array<any> = []
): [Ref<any>, Boolean] => {
  const { delay, _ref, ...observerOptions } = options;
  const ref: Ref<any> = _ref || useRef(null);
  const [show, setShow] = useState(false);

  let delayedCbId: any;

  useEffect(() => {
    let whenGone: any;
    var observer: IntersectionObserver;
    observer = new IntersectionObserver((entries) => {
      const currentEntry = entries[0];
      const { isIntersecting } = currentEntry;
      if (isIntersecting) {
        setShow(true);
      } else {
        setShow(false);
      }
    }, observerOptions);

    delayedCbId = setTimeout(() => {
      whenGone = cb(ref.current, show);
    }, delay);

    if (ref.current instanceof Element) observer.observe(ref.current);
    return () => {
      clearTimeout(delayedCbId);
      observer?.disconnect();
      whenGone && whenGone();
    };
  }, [ref.current, show, ...dependencies]);

  return [ref, show];
};
