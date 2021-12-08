import React from 'react'
import './Input.css';


// Updates the thumbnail on a drop zone element.
function updateThumbnail(dropZoneElement, file) {
  let thumbnailElement = dropZoneElement.querySelector(".drop-zone__thumb");

  // First time - remove the prompt
  if (dropZoneElement.querySelector(".drop-zone__prompt")) {
    dropZoneElement.querySelector(".drop-zone__prompt").remove();
  }

  // First time - there is no thumbnail element, so lets create it
  if (!thumbnailElement) {
    thumbnailElement = document.createElement("div");
    thumbnailElement.classList.add("drop-zone__thumb");
    dropZoneElement.appendChild(thumbnailElement);
  }

  thumbnailElement.dataset.label = file.name;
   // Show thumbnail for image files
  if (file.type.startsWith("image/")) {
    const reader = new FileReader();

    reader.readAsDataURL(file);
    reader.onload = () => {
      thumbnailElement.style.backgroundImage = `url('${reader.result}')`;
    };
  } else {
    thumbnailElement.style.backgroundImage = null;
  }
}


export default function Input() {

function savetoDB() {
    window.location.reload()

    // IndexedDB
    var indexedDB = window.indexedDB || window.webkitIndexedDB || window.mozIndexedDB || window.OIndexedDB || window.msIndexedDB,
        IDBTransaction = window.IDBTransaction || window.webkitIDBTransaction || window.OIDBTransaction || window.msIDBTransaction,
        dbVersion = 1.0;

    // Create/open database
    var request = indexedDB.open("pdfuploads", dbVersion),
        db,
        createObjectStore = function (dataBase) {
            // Create an objectStore
            console.log("Creating objectStore")
            dataBase.createObjectStore("pdf");
        },

        getPdfFile = function () {
            // Create XHR
            var xhr = new XMLHttpRequest(),
                blob;

            xhr.open("GET", "elephant.png", true);
            // Set the responseType to blob
            xhr.responseType = "blob";

            xhr.addEventListener("load", function () {
                if (xhr.status === 200) {
                    console.log("File retrieved");

                    // Blob as response
                    blob = xhr.response;
                    console.log("Blob:" + blob);

                    // Put the received blob into IndexedDB
                    putElephantInDb(blob);
                }
            }, false);
            // Send XHR
            xhr.send();
        },

        putElephantInDb = function (blob) {
            console.log("Putting pdfs in IndexedDB");

            // Open a transaction to the database
            var transaction = db.transaction(["pdf"], IDBTransaction.READ_WRITE);

            // Put the blob into the dabase
            var put = transaction.objectStore("pdf").put(blob, "pdf");

            // Retrieve the file that was just stored
            transaction.objectStore("pdf").get("pdf").onsuccess = function (event) {
                var File = event.target.result;
                console.log("Got pdf!" + File);

                // Get window.URL object
                var URL = window.URL || window.webkitURL;

                // Create and revoke ObjectURL
                var FileURL = URL.createObjectURL(File);

                // Set img src to ObjectURL
                var imgElephant = document.getElementById("pdf");
                imgElephant.setAttribute("src", FileURL);

                // Revoking ObjectURL
                URL.revokeObjectURL(FileURL);
            };
        };

    request.onerror = function (event) {
        console.log("Error creating/accessing IndexedDB database");
    };

    request.onsuccess = function (event) {
        console.log("Success creating/accessing IndexedDB database");
        db = request.result;

        db.onerror = function (event) {
            console.log("Error creating/accessing IndexedDB database");
        };

        // Interim solution for Google Chrome to create an objectStore. Will be deprecated
        if (db.setVersion) {
            if (db.version !== dbVersion) {
                var setVersion = db.setVersion(dbVersion);
                setVersion.onsuccess = function () {
                    createObjectStore(db);
                    getPdfFile();
                };
            }
            else {
                getPdfFile();
            }
        }
        else {
            getPdfFile();
        }
    }
    }
    window.onload = function () {
        document.querySelectorAll(".drop-zone__input").forEach((inputElement) => {
          const dropZoneElement = inputElement.closest(".drop-zone");

          dropZoneElement.addEventListener("click", (e) => {
            inputElement.click();
            console.log("user clicked on input")
          });

          inputElement.addEventListener("change", (e) => {
            if (inputElement.files.length) {
              updateThumbnail(dropZoneElement, inputElement.files[0]);
            }
          });

          dropZoneElement.addEventListener("dragover", (e) => {
            e.preventDefault();
            dropZoneElement.classList.add("drop-zone--over");
          });

          ["dragleave", "dragend"].forEach((type) => {
            dropZoneElement.addEventListener(type, (e) => {
              dropZoneElement.classList.remove("drop-zone--over");
            });
          });

          dropZoneElement.addEventListener("drop", (e) => {
            e.preventDefault();

            if (e.dataTransfer.files.length) {
              inputElement.files = e.dataTransfer.files;
              updateThumbnail(dropZoneElement, e.dataTransfer.files[0]);
            }

            dropZoneElement.classList.remove("drop-zone--over");
          });
        });
    };


  return(
  <>
    <head>
      <title>Drag and Drop File Upload</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta charset="utf-8"/>
      <link rel="shortcut icon" href="/assets/favicon.ico"/>
    </head>
    <body>
      <div class="drop-zone">
        <span class="drop-zone__prompt">Drop file here or click to upload</span>
        <input type="file" name="myFile" class="drop-zone__input"/>
      </div>
      <br></br>
      <button id="btnFileUpload" onclick = "savetoDB()" value="Upload PDF" class = "upload_button">Submit</button>
      <span class="message">Please refresh the page if any issue occurs</span>
    </body>
    </>
  )
}
