import PropTypes from "prop-types";

export default function List(props) {
  const itemList = props.items;
  const category = props.category;

  const ListItems = itemList.map((items) => (
    <li key={items.id}>
      {items.name}: &nbsp;
      <b>{items.calories}</b>
    </li>
  ));

  return (
    <>
      <h3 className="list-category">{category}</h3>
      <ol className="list-items">{ListItems}</ol>
    </>
  );
}

List.propTypes = {
  category: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      calories: PropTypes.number,
    })
  ),
};

List.defaultProps = {
  category: "Category",
  items: [],
};
