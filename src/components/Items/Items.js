import './Items.css'

export const Items = ({ currentItems }) => {
  return (
    <ul className="items">
      {currentItems &&
        currentItems.map((item) => <li className="items_element" key={Math.random()}>{item}</li>)}
    </ul>
  );
};
