module.exports = {
  bible: {
    html: { uri: 'file:///android_asset/html/bible/index.html' },
    open: (event) => { _navigator.push({
      name: 'bible',
      title: 'Η Αγία Γραφή',
      subtitle: 'Μια φράση για την Αγία Γραφή',
    })}
  },
  horologe: {
    html: { uri: 'file:///android_asset/html/horologe/index.html' },
    open: (event) => { _navigator.push({
      name: 'horologe',
      title: 'Ωρολόγιο',
      subtitle: 'Μια φράση για το Ωρολόγιο',
    })}
  },
  missal: {
    html: { uri: 'file:///android_asset/html/missal/index.html' },
    open: (event) => { _navigator.push({
      name: 'missal',
      title: 'Ευχολόγιο',
      subtitle: 'Θεολογική προσέγγιση του Ευχολογίου',
    })}
  },
  operations: {
    html: { uri: 'file:///android_asset/html/operations/index.html' },
    open: (event) => { _navigator.push({
      name: 'operations',
      title: 'Λειτουργικά',
      subtitle: 'Μια φράση για τα Λειτουργικά',
    })}
  },
  thefathers: {
    html: { uri: 'file:///android_asset/html/thefathers/index.html' },
    open: (event) => { _navigator.push({
      name: 'thefathers',
      title: 'Οι Πατέρες',
      subtitle: 'Μια φράση για τους Πατέρες',
    })}
  },
  thecopticpeople: {
    html: { uri: 'file:///android_asset/html/thecopticpeople/index.html' },
    open: (event) => { _navigator.push({
      name: 'thecopticpeople',
      title: 'Οι κόπτες',
      subtitle: 'Μια φράση για τους κόπτες',
    })}
  },
};
