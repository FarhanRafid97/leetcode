var reverseList = function (head) {
  if (head === null || head.next == null) {
    return head;
  }

  perv = null;
  next = null;

  while (head) {
    next = head.next;
    head.next = perv;
    perv = head;
    head = next;
  }
  return perv;
};
