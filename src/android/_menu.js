module.exports = {
  newtestament: {
    html: { uri: 'file:///android_asset/html/newtestament/index.html' },
    open: (event) => { _navigator.push({
      name: 'newtestament',
      title: 'Καινή Διαθήκη',
      subtitle: null,
    })}
  },
  oldtestament: {
    html: { uri: 'file:///android_asset/html/oldtestament/index.html' },
    title: 'Παλαιά Διαθήκη',
    open: (event) => { _navigator.push({
      name: 'oldtestament',
      title: 'Παλαιά Διαθήκη',
      subtitle: null, 
    })}
  },
  horologe: {
    html: { uri: 'file:///android_asset/html/horologe/index.html' },
    title: 'Ωρολόγιο',
    open: (event) => { _navigator.push({
      name: 'horologe',
      title: 'Ωρολόγιο',
      subtitle: null,
    })}
  },
  missal: {
    html: { uri: 'file:///android_asset/html/missal/index.html' },
    title: 'Ευχολόγιο',
    open: (event) => { _navigator.push({
      name: 'missal',
      title: 'Ευχολόγιο',
      subtitle: null,
    })}
  },
  operations: {
    html: { uri: 'file:///android_asset/html/operations/index.html' },
    title: 'Λειτουργικά',
    open: (event) => { _navigator.push({
      name: 'operations',
      title: 'Λειτουργικά',
      subtitle: null,
    })}
  },
  thefathers: {
    html: { uri: 'file:///android_asset/html/thefathers/index.html' },
    title: 'Οι Πατέρες',
    open: (event) => { _navigator.push({
      name: 'thefathers',
      title: 'Οι Πατέρες',
      subtitle: null,
    })}
  },
  thecopticpeople: {
    html: { uri: 'file:///android_asset/html/thecopticpeople/index.html' },
    title: 'Οι κόπτες',
    open: (event) => { _navigator.push({
      name: 'thecopticpeople',
      title: 'Οι κόπτες',
      subtitle: null,
    })}
  },
  legendary: {
    html: { uri: 'file:///android_asset/html/legendary/index.html' },
    title: 'Το Συναξάριο',
    open: (event) => { _navigator.push({
      name: 'legendary',
      title: 'Το Συναξάριο',
      subtitle: null,
    })}
  },
};
