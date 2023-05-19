import * as PDFJS from "pdfjs-dist/build/pdf";
PDFJS.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${PDFJS.version}/pdf.worker.min.js`;

const getPdfText = async({pdfPath}) => {
  console.log(pdfPath)
  const loadingTask = PDFJS.getDocument(pdfPath);
    const pdf = await loadingTask.promise;
    const page = await pdf.getPage(1);
    const data = await page.getTextContent()
    const text = data.items.map(value => value.str).join(' ')
    return text
}

export default getPdfText
