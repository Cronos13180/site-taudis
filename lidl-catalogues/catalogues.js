document.addEventListener("DOMContentLoaded", function () {
    const catalogues = document.querySelectorAll(".catalogue canvas");

    const renderPDFPreview = (url, canvas) => {
        const loadingTask = pdfjsLib.getDocument(url);

        loadingTask.promise.then((pdf) => {
            pdf.getPage(1).then((page) => {
                const viewport = page.getViewport({ scale: 1 });
                const context = canvas.getContext("2d");
                canvas.width = viewport.width;
                canvas.height = viewport.height;

                const renderContext = {
                    canvasContext: context,
                    viewport: viewport,
                };

                page.render(renderContext);
            });
        });
    };

    catalogues.forEach((catalogue) => {
        const pdfSrc = catalogue.getAttribute("data-pdf-src");
        renderPDFPreview(pdfSrc, catalogue);

        catalogue.addEventListener("click", function () {
            const link = document.createElement("a");
            link.href = pdfSrc;
            link.download = pdfSrc.split("/").pop();
            link.click();
        });
    });
});
