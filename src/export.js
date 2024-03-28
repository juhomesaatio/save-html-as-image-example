import domtoimage from "dom-to-image";

export const exportAsImage = (node, name = "image") =>
  new Promise((resolve, reject) => {
    domtoimage
      .toPng(node)
      .then((dataUrl) => {
        saveImage(dataUrl, name);
        resolve();
      })
      .catch((error) => {
        reject(error);
      });
  });

const saveImage = (dataUrl, name) => {
  const link = document.createElement("a");
  link.download = name;
  link.href = dataUrl;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
