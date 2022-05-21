// function sleep(milliseconds) {
//     const date = Date.now();
//     let currentDate = null;
//     do {
//         currentDate = Date.now();
//     } while (currentDate - date < milliseconds);
// }

//
// Click handler for Downloads button.
// Zips a file and serves it to the user.
//
$(document).ready(function () {
    $('#btnDownload').click(function () {
        $('#downloadModal').modal('show');
    });

    $('#btnZipDownload').click(function () {
        var file = "docs/2022_Bob_Brand_Resume.pdf"
        var zipFile = "bobbrand_download.zip"
        var zip = new JSZip();

        if ($('#checkboxIntro').is(':checked')) {
            file = "docs/2022_Bob_Brand_Resume.pdf"
        }

        if ($('#checkboxIntro').is(':checked')) {

        }

        // $('#downloadModal').modal('hide');

        JSZipUtils.getBinaryContent(file, function (err, data) {
            if (err) {
                alert('Oops. Something went wrong.');
                throw err;
            }
            else {
                zip.file(file, data, { binary: true });
                console.log("Files are zipped")
                zip.generateAsync({ type: "Blob" }).then(function (content) {
                    saveAs(content, zipFile);
                });
            }
        });
    });
});