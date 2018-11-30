let notes = getSavedNotes();

const filters = {
  searchText: ''
};

renderNotes(notes, filters);

document.querySelector('#create-note').addEventListener('click', function(e) {
  const id = uuidv4();

  notes.push({
    id,
    title: '',
    body: ''
  });
  saveNotes(notes);
  location.assign(`/edit.html#${id}`);
});

document.querySelector('#search-text').addEventListener('input', function(e) {
  filters.searchText = e.target.value;
  renderNotes(notes, filters);
});

document.querySelector('#filter-by').addEventListener('change', function(e){
  console.log(e.target.value);
});

window.addEventListener('storage', function(e) {
  if(e.key === 'notes') {
    notes = JSON.parse(e.newValue);
    renderNotes(notes, filters);
  };
});

// Unix Epoch - Jaunary 1st 1970 00:00:00

const now = new Date();
const timestamp = now.getTime();

const myDate = new Date(timestamp);
console.log(myDate.getFullYear());

// console.log(`Year: ${now.getFullYear()}`);
// console.log(`Month: ${now.getMonth()}`);
// console.log(`Day of month: ${now.getDate()}`);
// console.log(`Hour: ${now.getHours()}`);
// console.log(`Minutes: ${now.getMinutes()}`);
// console.log(`Seconds: ${now.getSeconds()}`);

const dateOne = new Date('June 1 2018 12:00:00');
const dateTwo = new Date();

const dateOneTimestamp = dateOne.getTime();
const dateTwotimestamp = dateTwo.getTime();

if(dateOneTimestamp < dateTwotimestamp) {
  console.log(dateOne.toString());
} else if (dateTwotimestamp < dateOneTimestamp) {
  console.log(dateTwo.toString());
};
