import each from "lodash/each";

export const copyStylesToIframes = () => {
  const head = document.head;
  const allStyles = head.getElementsByTagName("style");
  const allChildIframes = document.getElementsByTagName("iframe");
  each(allChildIframes, iframe => {
    each(allStyles, style => {
      const head = iframe.contentDocument.head;
      const styleClone = style.cloneNode(true);
      if (head && styleClone) {
        head.append(styleClone);
      }
    });
  });
}