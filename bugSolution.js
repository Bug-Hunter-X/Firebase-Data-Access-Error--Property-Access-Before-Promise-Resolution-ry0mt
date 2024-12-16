```javascript
async function getData() {
  const docRef = doc(db, 'collection', 'documentId');
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    console.log('Document data:', docSnap.data().someProperty);
  } else {
    console.log('No such document!');
  }
}
getData();
```