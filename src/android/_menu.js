module.exports = {
  bible: {
    html: require('../html/bible/index.html'),
    open: (event) => { _navigator.push({
      name: 'bible',
      title: 'Η Αγία Γραφή',
      subtitle: 'Μια φράση για την Αγία Γραφή',
    })}
  },
  horologe: {
    html: require('../html/horologe/index.html'),
    open: (event) => { _navigator.push({
      name: 'horologe',
      title: 'Ωρολόγιο',
      subtitle: 'Μια φράση για το Ωρολόγιο',
    })}
  },
  missal: {
    html: require('../html/missal/index.html'),
    open: (event) => { _navigator.push({
      name: 'missal',
      title: 'Ευχολόγιο',
      subtitle: 'Θεολογική προσέγγιση του Ευχολογίου',
    })}
  },
  operations: {
    html: require('../html/operations/index.html'),
    open: (event) => { _navigator.push({
      name: 'operations',
      title: 'Λειτουργικά',
      subtitle: 'Μια φράση για τα Λειτουργικά',
    })}
  },
  thefathers: {
    html: require('../html/thefathers/index.html'),
    open: (event) => { _navigator.push({
      name: 'thefathers',
      title: 'Οι Πατέρες',
      subtitle: 'Μια φράση για τους Πατέρες',
    })}
  },
  thecopticpeople: {
    html: require('../html/thecopticpeople/index.html'),
    open: (event) => { _navigator.push({
      name: 'thecopticpeople',
      title: 'Οι κόπτες',
      subtitle: 'Μια φράση για τους κόπτες',
    })}
  },
};
