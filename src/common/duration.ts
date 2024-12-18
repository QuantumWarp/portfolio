
// Vue.mixin({
//   methods: {
//     durationText: (dateStarted) => {
//       const durationDifMs = Date.now() - dateStarted;
//       const durationDate = new Date(durationDifMs);
//       // Add months to round to nearest year
//       durationDate.setMonth(durationDate.getMonth() + 6);
//       const years = Math.abs(durationDate.getUTCFullYear() - 1970);
//       return years > 1 ? `${years} years` : 'year';
//     },
//   },
// });