/* SELECTORS */

export const getAllTrips = ({ trips }) => trips;

export const getFilteredTrips = ({ trips, filters }) => {
  let output = trips;

  // filter by search phrase
  if (filters.searchPhrase) {
    const pattern = new RegExp(filters.searchPhrase, 'i');
    output = output.filter(trip => pattern.test(trip.name));
  }

  // DONE - filter by duration
  if (filters.duration) {
    output = output.filter(trip => trip.days >= filters.duration.from && trip.days <= filters.duration.to);
  }

  // DONE - filter by tags
  if (filters.tags) {
    filters.tags.forEach(tag => {
      output = output.filter(trip => trip.tags.find(tripTag => tripTag === tag));
    });
  }

  // DONE - sort by cost descending (most expensive goes first)
  const compareFunction = (x, y) => {
    const costX = x.cost.replace('$', '');
    const costY = y.cost.replace('$', '');

    if (parseInt(costX) > parseInt(costY)) { return -1; }
    { if (parseInt(costX) < parseInt(costY)) return 1; }
    return 0;
  };
  output = output.sort(compareFunction);

  return output;
};

export const getTripById = ({ trips }, tripId) => {

  // DONE - filter trips by tripId
  const filtered = trips.filter(trip => trip.id == tripId);

  console.log('filtering trips by tripId:', tripId, filtered);
  return filtered.length ? filtered[0] : { error: true };
};

export const getTripsForCountry = ({ trips }, countryCode) => {

  // DONE - filter trips by countryCode
  const filtered = trips.filter(trip => trip.country.code == countryCode);

  console.log('filtering trips by countryCode:', countryCode, filtered);
  return filtered.length ? filtered : [{ error: true }];
};

/* ACTIONS */

/*
// action name creator
const reducerName = 'trips';
const createActionName = name => `app/${reducerName}/${name}`;

// action types


// action creators


// reducer
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    default:
      return statePart;
  }
}
 */

