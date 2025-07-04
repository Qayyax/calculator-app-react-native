interface Btn {
  label: string;
  type: 'primary' | 'operators' | 'specialOperators';
}
const data: Btn[] = [
  { label: "AC", type: 'specialOperators' },
  { label: "\u{207A} \u{2215} \u{208B}", type: 'specialOperators' },
  { label: "%", type: 'specialOperators' },
  { label: "\u{00F7}", type: 'operators' },
  { label: "7", type: 'primary' },
  { label: "8", type: 'primary' },
  { label: "9", type: 'primary' },
  { label: "\u{00D7}", type: 'operators' },
  { label: "4", type: 'primary' },
  { label: "5", type: 'primary' },
  { label: "6", type: 'primary' },
  { label: "-", type: 'operators' },
  { label: "1", type: 'primary' },
  { label: "2", type: 'primary' },
  { label: "3", type: 'primary' },
  { label: "+", type: 'operators' },
  { label: "cal", type: 'primary' },
  { label: "0", type: 'primary' },
  { label: ".", type: 'primary' },
  { label: "=", type: 'operators' },
];

const getAllButton = () => data;

const getPrimary = () => {
  const filteredPrimary = data.filter(item => item.type === 'primary');
  return filteredPrimary;
}

const getOperators = () => {
  const filteredOps = data.filter(item => item.type === 'operators');
  return filteredOps;
}

const getSpecOps = () => {
  const filteredOps = data.filter(item => item.type === 'specialOperators');
  return filteredOps;
}

// console.log(getSpecOps())
export { getAllButton, getPrimary, getOperators, getSpecOps };
