var findRestaurant = function (list1, list2) {
  const filtered = list1.filter((l1) => list2.includes(l1));
  const track = [];
  let index = 1000;

  for (let i = 0; i < filtered.length; i++) {
    const index1 = list1.findIndex((d) => d === filtered[i]);
    const index2 = list2.findIndex((d) => d === filtered[i]);
    const max = Math.max(index1, index2);
    const sum = index1 + index2;

    track.push({ str: filtered[i], idx: sum });
  }
  const lowerstIdx = track.sort((a, b) => a.idx - b.idx)[0].idx;
  const filtereds = track.filter((d) => d.idx === lowerstIdx).map((d) => d.str);

  return filtereds;
};
findRestaurant(
  ['Shogun', 'Piatti', 'Tapioca Express', 'Burger King', 'KFC'],
  ['Piatti', 'The Grill at Torrey Pines', 'Hungry Hunter Steakhouse', 'Shogun']
);
