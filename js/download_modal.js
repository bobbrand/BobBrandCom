// Copyright 2022 
// Bob Brand 
// All Rights Reserved.

// Click handler for Downloads button.
//    Zips requested files and serves it to the user.
$(document).ready(function () {
    $('#btnDownload').click(function () {
        $('#downloadModal').modal('show');
    });

    $('#btnZipDownload').click(function () {
        var zipFile = "bobbrand_download.zip"
        var zip = new JSZip();
        var count = 0;
        var downloads = []

        // Any potential download checkboxes handled here
        if ($('#checkboxIntro').is(':checked')) {
            downloads.push('docs/2022_Bob_Brand_Intro.pdf');
        }
        if ($('#checkboxResume').is(':checked')) {
            downloads.push('docs/2022_Bob_Brand_Resume.pdf');
        }

        downloads.forEach(function (document) {
            var filename = document;

            // loading a file and add it in a zip file
            JSZipUtils.getBinaryContent(document, function (err, data) {
                if (err) {
                    throw err; // or handle the error
                }
                zip.file(filename, data, { binary: true });
                count++;
                if (count == downloads.length) {
                    zip.generateAsync({ type: 'blob' }).then(function (content) {
                        saveAs(content, zipFile);
                    });
                }
            }); // getBinaryContent
        });  // forEach

        $('#downloadModal').modal('hide');

    });  // click handler
}); // ready
