var docId;

function getCode() {
  docId = 0;
  
  db.collection("functions").get().then(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {
        // doc.data() is never undefined for query doc snapshots
        docId++
        console.log("foreach document");
    });
  }).then(function() { writeCode(); });
  
  docId++;
}

function writeCode() {
  // Create the document with that function
  db.collection("functions").doc(docId.toString()).set({
    javascript: document.getElementById("function").value
  })
  .then(function() {
    console.log("Document successfully written!");
  })
  .catch(function(error) {
    console.error("Error writing document: ", error);
  });
}
