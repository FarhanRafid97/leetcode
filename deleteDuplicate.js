var deleteDuplicates = function (head) {
  const notDuplicate = [];

  for (let i = 0; i < head.length; i++) {
    const filteredDup = notDuplicate.findIndex((d) => d.num === head[i]);
    if (filteredDup < 0) {
      notDuplicate.push({ num: head[i], duplicate: false });
    } else {
      notDuplicate[0] = { num: head[i], duplicate: true };
    }
  }
  const output = notDuplicate.filter((f) => !f.duplicate).map((d) => d.num);
  return output;
};

deleteDuplicates([1, 1, 2]);
