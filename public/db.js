const indexedDB = window.indexedDB || window.localStorage;

let db;

const request = indexedDB.open("budget", 1);

request.onupgradeneeded = (e) => {
  const db = e.target.result;
  db.creatObjectStore("pending", { autoIncrement: true });
};
